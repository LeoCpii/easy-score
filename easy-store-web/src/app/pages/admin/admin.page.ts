import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LIST_ANIMATION_LATERAL } from 'src/app/shared/animations/list.animation';
import { SecurityService } from 'src/app/shared/services/security.service';

export interface IAdminPage {
    email: string;
    name: string;
}

@Component({
    selector: 'app-admin-page',
    templateUrl: './admin.page.html',
    styleUrls: ['./admin.page.scss'],
    animations: [LIST_ANIMATION_LATERAL]
})

export class AdminPage implements OnInit, OnDestroy {
    public data: IAdminPage;
    public hasMobile = false;
    public sub: Subscription;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private security: SecurityService,
    ) { }

    get name(): string {
        const name = this.data.name.split(' ')[0];
        return `Olá, ${name}`;
    }

    public go(): void {
        this.router.navigate(['admin']);
    }

    public logout() {
        this.security.logout();
    }

    ngOnDestroy() { }

    ngOnInit() {
        this.data = this.route.snapshot.data.data;
    }
}
