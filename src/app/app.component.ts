import { Component } from '@angular/core';
import { LocationService} from './location.service';

import '../../assets/css/styles.css';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[LocationService]
})
export class AppComponent { }
