import { Component, Input, OnInit } from '@angular/core';

export interface ICardApp {
    slug: string;
    image: string;
    name: string;
    category: string;
    favorite: boolean;
    color: {
        primary: string;
        secondary: string;
    }
}

@Component({
    selector: 'app-card-app-fragment',
    templateUrl: './card-app.fragment.html',
    styleUrls: ['./card-app.fragment.scss'],
})

export class CardAppFragment implements OnInit {
    @Input() data: ICardApp;

    public state: boolean;

    constructor() { }

    public go(): void {

    }

    ngOnInit() { }
}
