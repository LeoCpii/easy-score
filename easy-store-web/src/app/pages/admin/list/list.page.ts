import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LIST_ANIMATION_LATERAL } from 'src/app/shared/animations/list.animation';
import { SLIDE_Y_SIMPLE, SLIDE_Y_STATE } from 'src/app/shared/animations/slide.animation';
import { UserService } from 'src/app/shared/services/user.service';
import { WindowService } from 'src/app/shared/services/window.service';

@Component({
    selector: 'app-list-page',
    templateUrl: './list.page.html',
    styleUrls: ['./list.page.scss'],
    animations: [SLIDE_Y_SIMPLE, LIST_ANIMATION_LATERAL, SLIDE_Y_STATE]
})

export class ListPage implements OnInit {
    public animate = 'ready';
    public timeout: NodeJS.Timeout;
    public cards: IApp[] = [];
    public filtered: IApp[] = [];
    public arr = new Array(15);
    public loading = true;
    public hasMobile = false;
    public sub: Subscription;

    constructor(
        private user: UserService,
        private router: Router,
        private window: WindowService,
    ) { this.hasMobile = window.hasMobile; }

    public search(e: Event) {
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
            const word = e.target['value'] as string;
            if (word.length > 2) {
                this.loading = true;
                this.filtered = this.cards.filter(card =>
                    card.name.toLocaleLowerCase().includes(word.toLocaleLowerCase()));
                setTimeout(() => this.loading = false, 500);
            } else {
                this.loading = true;
                this.resetPage();
                setTimeout(() => this.loading = false, 500);
            }
        }, 500);
    }

    private resetPage() {
        this.filtered = this.cards;
        this.sort();
    }

    private sort() {
        this.cards.sort((a, b) => a.slug > b.slug ? 1 : -1);
    }

    private getCards(): void {
        this.user.apps()
            .then(response => {
                this.cards = response
                this.resetPage();
            })
            .finally(() => setTimeout(() => this.loading = false, 500));
    }

    public go() {
        this.router.navigate(['admin', 'create-app']);
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    ngOnInit() {
        this.getCards();
        this.sub = this.window.change.subscribe((hasMobile: boolean) => {
            this.hasMobile = hasMobile
        });
    }
}
