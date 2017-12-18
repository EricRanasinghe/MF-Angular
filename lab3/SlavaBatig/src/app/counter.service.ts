import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class CounterService {

  private activeChangedDist = new Subject<string>();
  private unactiveChangedDist = new Subject<string>();

  activeChanged$ = this.activeChangedDist.asObservable();
  unactiveChanged$ = this.unactiveChangedDist.asObservable();

  changeActive(user:string) {
    this.activeChangedDist.next(user);
  }

  changeUnactive(user:string) {
    this.unactiveChangedDist.next(user);
  }
}
