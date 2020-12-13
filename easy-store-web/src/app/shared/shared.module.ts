import { NgModule } from '@angular/core';
import { ComponentsModule } from './components/components.module';

// lIB
import { JWT } from './lib/jwt.lib';

// Service

// Guard

// Directive

// Pipes

const SERVICES = [];

const LIBS = [JWT];

const GUARDS = [];

const DIRECTIVES = [];

const PIPES = [];

@NgModule({
    imports: [ComponentsModule],
    exports: [ComponentsModule, ...DIRECTIVES, ...PIPES],
    declarations: [...DIRECTIVES, ...PIPES],
    providers: [
        ...SERVICES,
        ...GUARDS,
        ...LIBS
    ],
})
export class SharedModule { }
