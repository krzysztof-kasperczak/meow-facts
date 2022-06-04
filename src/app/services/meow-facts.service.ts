import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class MeowFactsService {
    private static readonly URL = 'https://meowfacts.herokuapp.com/';

    constructor(private httpClient: HttpClient) {
    }

    getFact(): Observable<string> {
        return this.httpClient.get<{ data: string[] }>(MeowFactsService.URL).pipe(map(x => x.data[0]));
    }
}
