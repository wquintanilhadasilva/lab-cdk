import { Component } from '@angular/core';
import { LoadingSpinnerService } from './loading-spinner-component/loading-spinner.service';
import { ToastService } from './toast/toast.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  title = 'lab-cdk';
  name = 'Angular 7.2';

  constructor(private loadingSpinner: LoadingSpinnerService, private toastService: ToastService) {}

  loadData() {
    this.loadingSpinner.reveal();
    setTimeout(() => this.loadingSpinner.hide(), 2000);
  }

  toast() {
    this.toastService.show({type: 'success', text: 'Até agora tudo certo!'});
  }

}
