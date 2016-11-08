import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http } from '@angular/http';
export class ActionInformation{
    name: string;
    label: string;
    value: string;
}
@Injectable()
export class ActionService {
    constructor(private http:Http){
    }
    getAvailableActions(){
        return this.http.get('./mock-data/actions.json').map(response => response.json())
    }
}