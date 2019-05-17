import {
  Injectable,
  ComponentFactoryResolver,
  ApplicationRef,
  Injector
} from '@angular/core';
import {
  ComponentType,
  Portal,
  ComponentPortal,
  DomPortalHost
} from '@angular/cdk/portal';

import { LoadingSpinnerComponent } from './loading-spinner.component';

@Injectable({
  providedIn: 'root'
})
export class LoadingSpinnerService {

  private loadingSpinnerPortal: ComponentPortal<LoadingSpinnerComponent>;
  private bodyPortalHost: DomPortalHost;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector) {

      this.loadingSpinnerPortal = new ComponentPortal(LoadingSpinnerComponent);

      this.bodyPortalHost = new DomPortalHost(
        document.body,
        this.componentFactoryResolver,
        this.appRef,
        this.injector);
  }

  reveal() {
    this.bodyPortalHost.attach(this.loadingSpinnerPortal);
  }

  hide() {
    this.bodyPortalHost.detach();
  }

}
