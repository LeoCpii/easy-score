import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';
import { ICreateApp } from './create-app.page';

@Injectable({ providedIn: 'root' })
export class CreateAppResolver implements Resolve<ICreateApp> {

    constructor(private user: UserService) { }

    async resolve(route: ActivatedRouteSnapshot) {
        const slug = route.params.slug;

        const data = await this.user.app(slug);

        return data;
    }
}
