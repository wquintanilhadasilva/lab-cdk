import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ToastService } from '../toast/toast.service';

import { ToastConfig, TOAST_CONFIG_TOKEN, defaultToastConfig } from '../toast/toast-config';

// Configuração customizada do provider para o toast
export const customToastConfig: ToastConfig = {
  position: {
      top: 300,
      right: 300,
  },
  animation: {
      fadeOut: 35000,
      fadeIn: 4000,
  },
};

@Component({
  selector: 'app-toast-custom',
  templateUrl: './toast-custom.component.html',
  styleUrls: ['./toast-custom.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [
    ToastService,
    { // aplica a configuração customizada do toast neste componente
      provide: TOAST_CONFIG_TOKEN,
      useValue: customToastConfig,
    },
  ],
})
export class ToastCustomComponent implements OnInit {

  constructor(private toastService: ToastService) { }

  ngOnInit() {
  }

  toast() {
    this.toastService.show({type: 'success', text: 'Toast Customizado!'});
  }

}
