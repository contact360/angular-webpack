import { Component } from '@angular/core';
import { AccountService } from '../../account.service';
@Component({
  selector: 'record-selector',
  templateUrl: './recordselector.component.html',
  styleUrls: ['./recordselector.component.css'],
  
})
export class RecordSelectorComponent { 

    accounts: Array<any>;

    constructor( service : AccountService){
        service.getAccounts().subscribe( data =>
            this.accounts = data)
    }    
    
}
