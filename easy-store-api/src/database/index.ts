import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { HandlerError } from './../shared/lib/error.lib';

type IDatabaseState = 'disconnected' | 'connected' | 'connecting' | 'disconnecting' | 'uninitialized';

dotenv.config();
export class Database {
    constructor() { }
    public databaseServer() {
        mongoose.connect(process.env.DATABASE_CONNECT, {
            useCreateIndex: true,
            useNewUrlParser: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        })
    }

    public isHealthConnetion(): IDatabaseState {
        try {
            const states = mongoose.connection.states;
            return states[mongoose.connection.readyState] as IDatabaseState;
        } catch (error) {
            throw new HandlerError(500, 'Database connection error');
        }
    }
}

export default new Database().databaseServer;