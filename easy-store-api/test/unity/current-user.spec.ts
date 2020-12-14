import { IJWT, JWT } from '../../src/shared/lib/jwt.lib';
import { expect } from 'chai';
import dotenv from 'dotenv';
import 'mocha';
import { CurrentUser } from '../../src/shared/lib/curren-user.lib';

describe('current-user.lib.ts', () => {
    let lib_jwt: JWT;
    let lib_current: CurrentUser;
    let data: IJWT;

    beforeEach(() => {
        dotenv.config();
        lib_jwt = new JWT();
        lib_current = new CurrentUser();
        data = {
            id: '123456789',
            email: 'teste@teste.com',
            name: 'Leonardo Gonçalves',
        }
    });

    it('current', () => {
        const token = lib_jwt.generetaToken(data);
        const email = lib_current.current(token);
        expect(email).to.equal(data.email);
    });
});