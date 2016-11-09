import { Component } from '@angular/core';
import { ActionService } from '../../actions.service';

let ACTIONS:any[] = [
];

@Component({
  selector: 'available-actions',
  templateUrl: './availableactions.component.html',
  styleUrls: ['./availableactions.component.css'],
})
export class AvailableActionsComponent { 

    actions : Array<any>;

    constructor(service : ActionService ) {
        service.getAvailableActions().subscribe( data =>
            this.actions = data)
    }    

}
