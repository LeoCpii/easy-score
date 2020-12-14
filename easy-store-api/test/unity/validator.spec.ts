import Validator from './../../src/shared/lib/validator.lib';
import { expect } from 'chai';
import 'mocha';

describe('validator.lib.ts', () => {
    describe('isValidEmail', () => {
        it('Deve retornar true para email valido', () => {
            const isValid = Validator.isValidEmail('teste@teste.com');
            expect(isValid).to.equal(true);
        });
        it('Deve retornar falso para email invalido', () => {
            const isValid = Validator.isValidEmail('teste.com');
            expect(isValid).to.equal(false);
        });
    });

    describe('isValidColor', () => {
        it('Deve retornar true para cor valida', () => {
            const isValid = Validator.isValidColor('#ffffff');
            expect(isValid).to.equal(true);
        });
        it('Deve retornar falso para cor invalida', () => {
            const isValid = Validator.isValidColor('123123');
            expect(isValid).to.equal(false);
        });
    });

    describe('isValidBase64', () => {
        it('Deve retornar true para base64 valida', () => {
            const isValid = Validator.isValidBase64('data:image/png;base64,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');
            expect(isValid).to.equal(true);
        });
        it('Deve retornar falso para base64 invalida', () => {
            const isValid = Validator.isValidBase64('123123');
            expect(isValid).to.equal(false);
        });
    });
});