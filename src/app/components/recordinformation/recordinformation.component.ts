import { Component } from '@angular/core';

@Component({
  selector: 'record-information',
  templateUrl: './recordinformation.component.html',
  //styleUrls: ['./app.component.css'],
  
})
export class RecordInformationComponent { 

    rows: Array<any>;

    constructor(){
        this.rows = [{value:"J SMITH",label:"Account Holder"
        },
            {"label" : "Property Reference", "value": "6334404"},
{"label" : "Address", "value": "MORTON LN, BEVERLY, EAST RIDING"},
{"label" : "Postcode", "value": "HU17 9DB"},
{"label" : "E-Billing", "value": "On"}

        ];
    }    
    
}
