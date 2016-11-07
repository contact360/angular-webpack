import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ServiceAuthComponent } from './components/serviceauth/serviceauth.component';
import { LocationSelectorComponent } from './components/locationselector/locationselector.component';
import { ChannelSelectorComponent } from './components/channelselector/channelselector.component';

@NgModule({
  imports: [
    BrowserModule, FormsModule
  ],
  declarations: [
    AppComponent, ServiceAuthComponent
    , LocationSelectorComponent
    , ChannelSelectorComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
