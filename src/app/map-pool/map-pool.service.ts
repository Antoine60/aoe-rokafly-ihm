import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {IMap} from '../model/map';
import {environment} from './../../environments/environment';
import {catchError} from "rxjs/operators";

@Injectable()
export class MapPoolService {
    private url = environment.apiUrlLocal + 'api/maps';

    constructor(private http: HttpClient) {
    }

    getAllMaps(): Observable<IMap[]> {
        return this.http.get<IMap[]>(this.url);
    }
}
