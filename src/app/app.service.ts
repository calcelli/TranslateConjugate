import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AppService {
    constructor(private http: HttpClient) { }

    getTranslation(url) {
        return this.http.get(url);
    }

}
