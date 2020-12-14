import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryEnum } from 'src/app/shared/enum/category.enum';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
    selector: 'app-card-app-fragment',
    templateUrl: './card-app.fragment.html',
    styleUrls: ['./card-app.fragment.scss'],
})

export class CardAppFragment implements OnInit {
    @Input() data: IApp;

    public state: boolean;

    constructor(
        private user: UserService,
        private router: Router
    ) { }

    get category() {
        return CategoryEnum.description(this.data.category);
    }

    public updateFavorite(): void {
        const params = { slug: this.data.slug };
        this.user.updateFavorite(params)
            .then(() => this.data.favorite = !this.data.favorite);
    }

    public go(): void {
        this.router.navigate(['admin', 'edit-app', this.data.slug]);
    }

    ngOnInit() { }
}
