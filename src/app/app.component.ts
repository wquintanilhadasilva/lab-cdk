import { Component } from '@angular/core';
import { LoadingSpinnerService } from './loading-spinner-component/loading-spinner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'lab-cdk';
  name = 'Angular 7.2';

  constructor(private loadingSpinner: LoadingSpinnerService) {}

  loadData() {
    this.loadingSpinner.reveal();
    setTimeout(() => this.loadingSpinner.hide(), 2000);
  }

}
