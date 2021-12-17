import {Injectable} from '@angular/core';
import {Subject, Subscription} from 'rxjs';

/*
* Event bus to handle model navigation.
* */
@Injectable({
  providedIn: 'root'
})
export class ModalEventBusService {

  private subject = new Subject();

  constructor() {
  }

  emitModalRouteEvent(target: string): void {
    this.subject.next(target);
  }

  onModalRouteChange(action: any): Subscription {
    return this.subject.subscribe(action);
  }

}
