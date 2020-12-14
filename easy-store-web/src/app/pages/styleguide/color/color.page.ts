import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LIST_ANIMATION_LATERAL } from 'src/app/shared/animations/list.animation';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { COLORS, IColors } from './color.const';

@Component({
    selector: 'app-color-page',
    templateUrl: './color.page.html',
    styleUrls: ['./color.page.scss'],
    animations: [LIST_ANIMATION_LATERAL]
})

export class ColorPage implements OnInit {
    public show: boolean;

    constructor(
        private utils: UtilsService,
        private snackBar: MatSnackBar,
    ) { }

    public get colors(): IColors[] {
        return COLORS;
    }

    public getClass(name: string): string {
        const color = name.replace('$', '');
        return `color--${color}`;
    }

    public clip(color: IColors): void {
        this.utils.clipboard(color.name);
        this.snackBar.open(`${color.name}: copiado!`, '', {
            duration: 2000,
            horizontalPosition: 'center',
            verticalPosition: 'top'
        });
    }

    ngOnInit() {
        setTimeout(() => { this.show = true; }, 0);
    }
}
