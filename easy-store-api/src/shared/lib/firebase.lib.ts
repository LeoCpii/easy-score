import admin, { AppOptions } from 'firebase-admin';
import { Utils } from './utils.lib';
import { Storage } from '@google-cloud/storage';
import { HandlerError } from './error.lib';
import internal from 'stream';
export class Firebase {
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

    public async upload(path: string, base64: string) {
        const bufferStream = new internal.PassThrough();
        bufferStream.end(Buffer.from(base64, 'base64'));

        const file = this.bucket.file(path);

        bufferStream.pipe(file.createWriteStream({
            metadata: {
                contentType: 'image/jpeg',
                metadata: {
                    custom: 'metadata'
                }
            },
            public: true,
            validation: 'md5'
        }))
            .on('error', (err) => { throw new HandlerError(428, err) });
    }

    private error(err: { code: string, message?: string; Error: string; }): { message: string; status: number } {
        const utils = new Utils();
        return Firebase.MESSAGE_ERROR[err.code] || {
            message: !utils.isProd ? (err.message || err[0].Error) : 'Oops, algo deu errado, tente novamente mais tarde.',
            status: 500
        };
    }
}