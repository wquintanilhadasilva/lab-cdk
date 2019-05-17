import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoadingSpinnerService } from 'src/app/loading-spinner-component/loading-spinner.service';
import { ToastService } from 'src/app/toast';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(
    private http: HttpClient,
    private loadingSpinner: LoadingSpinnerService,
    private toastService: ToastService) { }

  sendUser(user): void {
    console.log(user);
    this.loadingSpinner.reveal();
    this.http.post(`https://localhost:5001/api/usuario`, user, {responseType: 'text'})
        .subscribe(
          r => {
            this.toastService.show({type: 'success', text: r});
            console.log(r);
            setTimeout(() => this.loadingSpinner.hide(), 2000);
          }
        );
  }
}
