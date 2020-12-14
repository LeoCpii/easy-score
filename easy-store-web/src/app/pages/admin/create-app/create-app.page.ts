import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SLIDE_X_L_TO_R, SLIDE_X_R_TO_L, SLIDE_Y_STATE } from 'src/app/shared/animations/slide.animation';
import { AlertService } from 'src/app/shared/components/alert/alert.service';
import { IMAGES } from 'src/app/shared/constants/images.const';
import { CategoryEnum } from 'src/app/shared/enum/category.enum';
import { UserService } from 'src/app/shared/services/user.service';
import { SELECT_CATEGORIES } from './create-app.const';

export interface ICreateApp extends IApp { }

@Component({
    selector: 'app-create-app-page',
    templateUrl: './create-app.page.html',
    styleUrls: ['./create-app.page.scss'],
    animations: [SLIDE_X_L_TO_R, SLIDE_X_R_TO_L, SLIDE_Y_STATE]
})

export class CreateAppPage implements OnInit {
    public data: ICreateApp;
    public animate = 'ready';
    public isFinish: boolean;
    public isLoading: boolean;

    public form = new FormGroup({
        name: new FormControl('', Validators.required),
        image: new FormControl('', Validators.required),
        primary: new FormControl('', Validators.required),
        secondary: new FormControl('', Validators.required),
        category: new FormControl('', Validators.required),
    });

    constructor(
        private user: UserService,
        private router: Router,
        private alert: AlertService,
        private route: ActivatedRoute,
    ) { }

    public get image() {
        return this.form.value.image || IMAGES.empty.app;
    }

    public get selects() {
        return SELECT_CATEGORIES;
    }

    public get name() {
        return this.form.value.name || 'Nome do aplicativo';
    }

    public get category() {
        return CategoryEnum.description(this.form.value.category) || 'Categoria do aplicativo';
    }

    public get primary() {
        return this.form.value.primary || '#d1d1d1';
    }

    public get secondary() {
        return this.form.value.secondary || '#e9e9e9';
    }

    public close(): void {
        this.router.navigate(['admin', 'list']);
    }

    public create() {
        this.isLoading = true;
        const params: IApp = {
            name: this.form.value.name,
            category: Number(this.form.value.category),
            image: this.form.value.image,
            color: {
                primary: this.form.value.primary,
                secondary: this.form.value.secondary,
            }
        };

        this.user.addApp(params)
            .then(() => this.isFinish = true)
            .catch(() => this.alert.show('Erro ao criar categoria'))
            .finally(() => setTimeout(() => this.isLoading = false, 500))
    }

    private setForm() {
        this.form.patchValue({
            name: this.data.name, 
            image: this.data.image,
            primary: this.data.color.primary,
            secondary: this.data.color.secondary,
            category: this.data.category,
        });
    }


    ngOnInit() {
        this.data = this.route.snapshot.data.data;
        if (this.data) { this.setForm(); }
    }
}
