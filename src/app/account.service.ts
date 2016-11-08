
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http } from '@angular/http';
export class AccountInformation{
    name: string;
    label: string;
    value: string;
}
@Injectable()
export class AccountService {
    constructor(private http:Http){

    }
    getAccountInformation() : Observable<AccountInformation[]> {
        return this.http.get('./mock-data/recordinformation.json').map(response => response.json());
    }
    
}
