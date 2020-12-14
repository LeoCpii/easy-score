import { Schema, model, Document, Model } from 'mongoose';

export interface IApp {
    name: string;
    slug: string;
    category: number;
    image: string;
    favorite: boolean;
    color: {
        primary: string;
        secondary: string;
    }
};

export interface IAppDoc extends IApp, Document { }

const CATEGORIES = Object.freeze({
    ['Música']: 0,
    ['Stream']: 1
})

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
    image: {
        type: String,
        default: '',
    },
    favorite: {
        type: Boolean,
        default: false,
    },
    category: {
        type: Number,
        required: [true, 'Categoria é obrigatória'],
        enum: [Object.values(CATEGORIES)],
        message: props => `${props.value} não é uma propriedade válida!`
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

Object.assign(AppSchema.statics, {
    CATEGORIES,
});

export default model<IAppDoc>('App', AppSchema);

export class AppHelper {
    private get app(): Model<IAppDoc, {}> {
        return model<IAppDoc>('App', AppSchema);
    }

    public async updateFavorite(id: string, data: { favorite: boolean }) {
        await this.app.updateOne(
            { _id: id, },
            { $set: data, },
            { upsert: true }
        ).catch(e => {
            throw { message: e, status: 422 };
        });
    }

    public async update(id: string, params: IApp) {
        await this.app.updateOne(
            { _id: id, },
            {
                $set: {
                    name: params.name,
                    image: params.image,
                    category: params.category,
                    color: {
                        primary: params.color.primary,
                        secondary: params.color.secondary
                    },
                },
            },
            { upsert: true }
        ).catch(e => {
            throw { message: e, status: 422 };
        });
    }
}