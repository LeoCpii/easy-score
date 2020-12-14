import { IJWT, JWT } from '../../src/shared/lib/jwt.lib';
import { expect } from 'chai';
import dotenv from 'dotenv';
import 'mocha';

describe('jwt.lib.ts', () => {
    let lib: JWT;
    let data: IJWT;

    beforeEach(() => {
        dotenv.config();
        lib = new JWT();
        data = {
            id: '123456789',
            email: 'teste@teste.com',
            name: 'Leonardo Gonçalves',
        }
    });

    it('generetaToken e decodeToken', () => {
        const token = lib.generetaToken(data);
        const result = lib.decodeToken(token);
        expect(result.id).to.equal(data.id);
    });
});