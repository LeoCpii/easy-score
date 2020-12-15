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
    'Arte e design': 0,
    'Beleza': 1,
    'Bibliotecas e demos': 2,
    'Casa e decoração': 3,
    'Clima': 4,
    'Comer e beber': 5,
    'Compras': 6,
    'Comunicação': 7,
    'Corporativo': 8,
    'Criar os filhos': 9,
    'Daydream': 10,
    'Educação': 11,
    'Encontros': 12,
    'Entretenimento': 13,
    'Esportes': 14,
    'Estilo de vida': 15,
    'Eventos': 16,
    'Ferramentas': 17,
    'Finanças': 18,
    'Fotografia': 19,
    'Humor': 20,
    'Livros e referências': 21,
    'Mapas e navegação': 22,
    'Medicina': 23,
    'Música e áudio': 24,
    'Notícias e revistas': 25,
    'Personalização': 26,
    'Produtividade': 27,
    'Realidade aumentada': 28,
    'Reproduzir e editar vídeos': 29,
    'Saúde e fitness': 30,
    'Social': 31,
    'Turismo e local': 32,
    'Veículos': 33,
    'Jogos': 34
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

    public async delete(id: string) {
        await this.app.deleteOne(
            { _id: id, },
            { upsert: true }
        ).catch(e => {
            throw { message: e, status: 422 };
        });
    }
}