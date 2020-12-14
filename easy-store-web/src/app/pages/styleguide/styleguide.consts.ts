export interface IButtonPage {
    label: string;
    route: string;
}

export const PAGES: IButtonPage[] = [
    {
        label: 'Typography',
        route: '/styleguide/typography',
    },
    {
        label: 'Color',
        route: '/styleguide/color',
    },
    {
        label: 'Button',
        route: '/styleguide/button',
    },
    {
        label: 'Form',
        route: '/styleguide/form',
    },
    {
        label: 'Skeleton',
        route: '/styleguide/skeleton',
    },
];

