import { NgModule } from '@angular/core';
import { ComponentsModule } from './components/components.module';
import { ResizeDirective } from './directives/resize.directive';

// lIB
import { JWT } from './lib/jwt.lib';

// Service
import { SecurityService } from './services/security.service';
import { UserService } from './services/user.service';

// Guard

// Directive
import { LoggedGuard } from './guards/logged.guard';

// Pipes

const SERVICES = [SecurityService, UserService];

const LIBS = [JWT];

const GUARDS = [LoggedGuard];

const DIRECTIVES = [ResizeDirective];

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
