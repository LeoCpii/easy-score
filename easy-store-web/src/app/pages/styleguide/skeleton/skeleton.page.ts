import { Component, OnInit } from '@angular/core';
import { LIST_ANIMATION_LATERAL } from 'src/app/shared/animations/list.animation';
import { SKELETONS } from './skeleton.const';

@Component({
    selector: 'app-skeleton-page',
    templateUrl: './skeleton.page.html',
    styleUrls: ['./skeleton.page.scss'],
    animations: [LIST_ANIMATION_LATERAL]
})

export class SkeletonPage implements OnInit {

    constructor() { }

    public get skeletons() {
        return SKELETONS;
    }

    ngOnInit() { }
}
