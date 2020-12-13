import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UtilsService {
    public clipboard(word: string): void {
        const el = document.createElement('textarea');
        el.value = word;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
    }
}
