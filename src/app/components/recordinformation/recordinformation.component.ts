import { Component } from '@angular/core';
import { AccountService } from '../../account.service';
@Component({
  selector: 'record-information',
  templateUrl: './recordinformation.component.html',
  styleUrls: ['./recordinformation.component.css'],
  
})
export class RecordInformationComponent { 

    rows: Array<any>;

    constructor( service : AccountService){
        service.getAccountInformation().subscribe( data =>
            this.rows = data)
    }    
    
}
