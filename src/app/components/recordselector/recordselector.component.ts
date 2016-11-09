import { Component } from '@angular/core';
import { AccountService } from '../../account.service';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'record-selector',
    templateUrl: './recordselector.component.html',
    styleUrls: ['./recordselector.component.css']
})
export class RecordSelectorComponent {

    term = new FormControl();
    accounts: Array<any>;
    

    constructor(service: AccountService) {
       
        service.getAccounts().subscribe(data =>
            this.accounts = data);

        this.term.valueChanges
             .debounceTime(500)
             .subscribe((val) =>
                service.getAccounts().subscribe((accounts:Array<any>) =>
                    this.accounts = accounts.filter(
                        (account) => val == '' || (account.Account).indexOf(val) >=0 || (account.Address.toUpperCase()).indexOf(val.toUpperCase()) >= 0
                    )
                )
             );
    }

    OnFilterChanged(value: string) {

    }
}
