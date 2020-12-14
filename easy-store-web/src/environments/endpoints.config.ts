import { Endpoints } from 'src/app/shared/endpoints';

export const endpoints = {
    auth: {
        login: new Endpoints('/security/signIn', false, '/security/signIn'),
        forgot: new Endpoints('/forgot', false, '/forgot'),
        register: new Endpoints('/security/create-user', false, '/security/create-user'),
    },
    user: {
        info: new Endpoints('/user', false, '/user'),
        apps: new Endpoints('/user/apps', false, '/user/apps'),
        app: (slug: string) => new Endpoints(`/user/app?slug=${slug}`, false, `/user/app?slug=${slug}`),
        addApp: new Endpoints('/user/add-app', false, '/user/add-app'),
        updateFavorite: new Endpoints('/user/update-favorite', false, '/user/update-favorite'),
    }
};
