import { Schema, model, Document, Model } from 'mongoose';
import Validator from './../services/validator.service';
export interface IUser {
    name: string;
    email: string;
    favorites: Array<{ name: string; slug: string }>
};

interface IUserDoc extends IUser, Document { }

/*
* Model - User
*/
const UserSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Nome é obrigatório'],
    },
    email: {
        type: String,
        required: [true, 'Email é obrigatório'],
        unique: true,
        validate: {
            validator: (value: string) => Validator.isValidEmail(value),
            message: (props: { value: string; }) => `${props.value} não é um email válido!`
        }
    },
    apps: {
        type: [Schema.Types.ObjectId],
        ref: 'App',
        default: []
    },
    favorites: {
        type: [{
            name: { type: String },
            slug: { type: String },
        }],
        default: []
    }
}, {
    timestamps: true
});

export default model<IUserDoc>('User', UserSchema);

export class UserHelper {
    private get user(): Model<IUserDoc, {}> {
        return model<IUserDoc>('User', UserSchema);
    }
}