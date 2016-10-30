import { cssRule } from 'typestyle';

export function initGlobalStyles(): void {
    cssRule('body', {
        fontFamily: 'Monospaced'
    });
}
