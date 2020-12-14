import admin, { AppOptions } from "firebase-admin";
import { Utils } from './utils.lib';
import { Storage } from '@google-cloud/storage';

export class Firebase {
    private app: admin.app.App;

    private static MESSAGE_ERROR = {
        'auth/wrong-password': {
            message: 'Email ou senha inválidos',
            status: 422
        },
        'auth/argument-error': {
            message: 'Requisição inválida',
            status: 428
        },
        'auth/user-not-found': {
            message: 'Usuário não encontrado',
            status: 428
        },
    }

    private config = {
        apiKey: process.env.API_KEY,
        authDomain: process.env.AUTH_DOMAIN,
        databaseURL: process.env.DBURL,
        projectId: process.env.PID,
        storageBucket: process.env.BUCKET,
        messagingSenderId: process.env.MSGID,
        measurementId: process.env.MEASUREMENT_ID
    }

    private get credentials(): AppOptions {
        return this.config;
    }

    private get storage() {
        return new Storage({ projectId: this.credentials.projectId, keyFilename: './firebase.json' });
    }

    private get bucket() {
        return this.storage.bucket(this.credentials.storageBucket);
    }

    public get bucketName() {
        return process.env.BUCKET;
    }

    public init() {
        admin.initializeApp(this.credentials);
    }

    public async upload(serverPath: string, path: string) {
        await this.bucket.upload(serverPath, {
            destination: path,
            public: true,
        }).catch(err => {
            return this.error(err);
        })
    }

    private error(err: { code: string, message?: string; Error: string; }): { message: string; status: number } {
        const utils = new Utils();
        return Firebase.MESSAGE_ERROR[err.code] || {
            message: utils.isNoProd ? (err.message || err[0].Error) : 'Oops, algo deu errado, tente novamente mais tarde.',
            status: 500
        };
    }
}