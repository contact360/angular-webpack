import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule }  from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import { AppComponent } from './app.component';
import { ServiceAuthComponent } from './components/serviceauth/serviceauth.component';
import { LocationSelectorComponent } from './components/locationselector/locationselector.component';
import { ChannelSelectorComponent } from './components/channelselector/channelselector.component';
import { RecordInformationComponent } from './components/recordinformation/recordinformation.component';
import { AccountService } from './account.service';
@NgModule({
  imports: [
    BrowserModule, FormsModule,HttpModule
  ],
  declarations: [
    AppComponent, ServiceAuthComponent
    , LocationSelectorComponent
    , ChannelSelectorComponent
    , RecordInformationComponent
  ],
  bootstrap: [ AppComponent ],
  providers: [ AccountService ]
})
export class AppModule { }
