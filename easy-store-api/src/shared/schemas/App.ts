import { Schema, model, Document, Model } from 'mongoose';

export interface IApp {
    name: string;
    slug: string;
    category: string;
    color: {
        primary: string;
        secondary: string;
    }
};

interface IAppDoc extends IApp, Document { }

/*
* Model - App
*/
const AppSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Nome é obrigatório'],
    },
    slug: {
        type: String,
        required: [true, 'Slug é obrigatório'],
    },
    category: {
        type: String,
        required: [true, 'Categoria é obrigatória'],
    },
    color: {
        type: {
            primary: { type: String },
            secondary: { type: String },
        },
        required: [true, 'Cores são obrigatórias'],
    },
}, {
    timestamps: true
});

export default model<IAppDoc>('App', AppSchema);

export class AppHelper {
    private get app(): Model<IAppDoc, {}> {
        return model<IAppDoc>('App', AppSchema);
    }
}