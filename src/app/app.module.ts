import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule }  from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import { AppComponent } from './app.component';
import { ServiceAuthComponent } from './components/serviceauth/serviceauth.component';
import { LocationSelectorComponent } from './components/locationselector/locationselector.component';
import { ChannelSelectorComponent } from './components/channelselector/channelselector.component';
import { RecordInformationComponent } from './components/recordinformation/recordinformation.component';
import { RecordSelectorComponent } from './components/recordselector/recordselector.component';
import { AvailableActionsComponent } from './components/availableactions/availableactions.component';
import { AccountService } from './account.service';
import { ActionService } from './actions.service';

@NgModule({
  imports: [
    BrowserModule, FormsModule,HttpModule, ReactiveFormsModule
  ],
  declarations: [
    AppComponent, ServiceAuthComponent
    , LocationSelectorComponent
    , ChannelSelectorComponent
    , RecordInformationComponent
    , RecordSelectorComponent
    , AvailableActionsComponent
    
  ],
  bootstrap: [ AppComponent ],
  providers: [ AccountService, ActionService ]
})
export class AppModule { }
