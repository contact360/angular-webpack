import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ServiceAuthComponent } from './components/serviceauth/serviceauth.component';
import { RecordInformationComponent } from './components/recordinformation/recordinformation.component';
import { RecordSelectorComponent } from './components/recordselector/recordselector.component';
import { AvailableActionsComponent } from './components/availableactions/availableactions.component';
import { AccountService } from './account.service';
import { ActionService } from './actions.service';
import { Http, HttpModule, ConnectionBackend, RequestOptions, RequestOptionsArgs } from '@angular/http';

describe('App', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ declarations: [AppComponent,ServiceAuthComponent,
      RecordInformationComponent,RecordSelectorComponent,AvailableActionsComponent],
    providers:[AccountService,ActionService,Http,ConnectionBackend,RequestOptions]});
  });
  it ('should work', () => {
    let fixture = TestBed.createComponent(AppComponent);
    expect(fixture.componentInstance instanceof AppComponent).toBe(true, 'should create AppComponent');
  });
});

