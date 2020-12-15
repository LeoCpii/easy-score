import { Injectable } from '@angular/core';
import { AjaxService } from './ajax.service';
import { endpoints } from 'src/environments/endpoints.config';

@Injectable()
export class UserService {
    constructor(private ajax: AjaxService) { }

    public async user() {
        const url = endpoints.user.info.url;
        return await this.ajax.get<IUser>(url);
    }

    public async apps() {
        const url = endpoints.user.apps.url;
        return await this.ajax.get<IApp[]>(url);
    }

    public async app(slug: string) {
        const url = endpoints.user.app(slug).url;
        return await this.ajax.get<IApp>(url);
    }

    public async addApp(params: IApp) {
        const url = endpoints.user.addApp.url;
        return await this.ajax.post(url, params);
    }

    public async updateApp(params: IApp) {
        const url = endpoints.user.updateApp.url;
        return await this.ajax.put(url, params);
    }

    public async deleteApp(slug: string) {
        const url = endpoints.user.deleteApp(slug).url;
        return await this.ajax.delete(url);
    }

    public async updateFavorite(params: { slug: string }) {
        const url = endpoints.user.updateFavorite.url;
        return await this.ajax.put(url, params);
    }
}
