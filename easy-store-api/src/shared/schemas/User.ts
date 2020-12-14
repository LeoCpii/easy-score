import { Schema, model, Document, Model } from 'mongoose';
import Validator from './../services/validator.service';
import { IApp, IAppDoc } from './App';
export interface IUser {
    name: string;
    email: string;
    apps: IAppDoc[];
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
    apps: [{
        type: Schema.Types.ObjectId,
        ref: 'App',
        default: [],
        unique: true,
    }],
}, {
    timestamps: true
});

export default model<IUserDoc>('User', UserSchema);

export class UserHelper {
    private get user(): Model<IUserDoc, {}> {
        return model<IUserDoc>('User', UserSchema);
    }

    public async associateAppToUser(id: string, options: Object) {
        await this.user.updateOne(
            { _id: id, },
            { $addToSet: options, },
            { upsert: true }
        ).catch(e => {
            throw { message: e, status: 422 };
        });
    }
}