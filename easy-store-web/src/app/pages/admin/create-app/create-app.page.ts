import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RoutesRecognized } from '@angular/router';
import { filter } from 'rxjs/operators';
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
    public isLoadingButtonExclude: boolean;
    public messageSuccess: string;

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
        if (this.form.touched) {
            const out = confirm('Você não salvou suas alterações. Deseja continuar?');
            if (out) { this.router.navigate(['admin', 'list']);}
        } else {
            this.router.navigate(['admin', 'list']);
        }
    }

    public do(): void {
        this.data ? this.update() : this.create();
    }

    public exclude() {
        this.isLoadingButtonExclude = true;

        this.user.deleteApp(this.data.slug)
            .then(() => {
                this.messageSuccess = 'App excluído com sucesso';
                setTimeout(() => this.isFinish = true, 500)
            })
            .catch(error => this.alert.show('Erro ao excluir app'))
            .finally(() => setTimeout(() => this.isLoadingButtonExclude = false, 500))
    }

    private create() {
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
            .then(() => {
                this.messageSuccess = 'App criado com sucesso';
                setTimeout(() => this.isFinish = true, 500)
            })
            .catch(error => this.alert.show('Erro ao salvar app'))
            .finally(() => setTimeout(() => this.isLoading = false, 500))
    }

    private update() {
        this.isLoading = true;
        const params: IApp = {
            name: this.form.value.name,
            slug: this.data.slug,
            category: Number(this.form.value.category),
            image: this.form.value.image,
            color: {
                primary: this.form.value.primary,
                secondary: this.form.value.secondary,
            }
        };

        this.user.updateApp(params)
            .then(() => {
                this.messageSuccess = 'App editado com sucesso';
                setTimeout(() => this.isFinish = true, 500)
            })
            .catch(error => this.alert.show('Erro ao editar app'))
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
