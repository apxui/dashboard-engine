import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class WizardService {

	readonly open$: Subject<string> = new Subject<string>();
	readonly chartOptions$: Subject<any[]> = new Subject<any[]>();

	open(entity: string): Observable<any[]> {
		this.open$.next(entity);
		return this.chartOptions$.asObservable();
	}
}