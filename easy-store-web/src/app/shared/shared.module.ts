import { NgModule } from '@angular/core';
import { ComponentsModule } from './components/components.module';
import { LoggedGuard } from './guards/logged.guard';

// lIB
import { JWT } from './lib/jwt.lib';

// Service
import { SecurityService } from './services/security.service';
import { UserService } from './services/user.service';

// Guard

// Directive

// Pipes

const SERVICES = [SecurityService, UserService];

const LIBS = [JWT];

const GUARDS = [LoggedGuard];

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
