import { NgModule, ModuleWithProviders } from '@angular/core';

import { OverlayModule } from '@angular/cdk/overlay';
import { MatIconModule } from '@angular/material/icon';

import { ToastComponent } from './toast.component';
import { defaultToastConfig, TOAST_CONFIG_TOKEN } from './toast-config';

@NgModule({
    imports: [OverlayModule, MatIconModule],
    declarations: [ToastComponent],
    entryComponents: [ToastComponent],
    providers: [],
})
export class ToastModule {
    public static forRoot(config = defaultToastConfig): ModuleWithProviders {
        return {
            ngModule: ToastModule,
            providers: [
                { // define uma implementação padrão para o token deste módulo injetado no service e no componente toast
                    provide: TOAST_CONFIG_TOKEN,
                    useValue: { ...defaultToastConfig, ...config }, // faz o merge com os valores das propriedades spread operator
                },
            ],
        };
    }
}
