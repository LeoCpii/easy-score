import { Component, OnInit } from '@angular/core';
import { LIST_ANIMATION_LATERAL } from 'src/app/shared/animations/list.animation';
import { SLIDE_Y_SIMPLE } from 'src/app/shared/animations/slide.animation';
import { ICardApp } from './card-app/card-app.fragment';

@Component({
    selector: 'app-list-page',
    templateUrl: './list.page.html',
    styleUrls: ['./list.page.scss'],
    animations: [SLIDE_Y_SIMPLE, LIST_ANIMATION_LATERAL]
})

export class ListPage implements OnInit {
    public animate = 'ready';
    public timeout: NodeJS.Timeout;
    public cards: ICardApp[] = [];
    public arr = new Array(15);
    public loading = true;

    constructor() { }

    public search(e: Event) {
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
            const word = e.target['value'];
            console.log(word);
        }, 500);
    }

    public getCards(): void {
        setTimeout(() => {
            this.cards = [
                {
                    slug: 'spotify',
                    image: 'https://www.masterambiental.com.br/wp-content/uploads/2020/07/image-gallery-spotify-logo.png',
                    name: 'Spotify',
                    category: 'Música',
                    favorite: false,
                    color: {
                        primary: '#1ed760',
                        secondary: '#191515',
                    }
                },
                {
                    slug: 'netflix',
                    image: 'https://www.freepnglogos.com/uploads/netflix-logo-circle-png-5.png',
                    name: 'Netflix',
                    category: 'Streaming',
                    favorite: true,
                    color: {
                        primary: '#e50913',
                        secondary: '#000000',
                    }
                }
            ]

            this.loading = false;
        }, 700);
    }

    ngOnInit() {
        this.getCards();
    }
}
