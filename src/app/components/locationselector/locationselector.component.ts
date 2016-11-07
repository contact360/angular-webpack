
import { Component } from '@angular/core';

let LOCATIONS:any[] = [
    { text: "Head Office", id: 1, sublocations : [
        "Reception","Desk 2"
    ] },

    { text: "Office 2", id: 2, sublocations : [
        "Desk A", "Desk B"
    ] }
];

@Component({
  selector: 'location-selector',
  templateUrl: './locationselector.component.html',
  //styleUrls: ['./app.component.css'],
  
})
export class LocationSelectorComponent { 
    locations: any[] ;
    sublocations: any[];
    selectedLocation:string;

    constructor(){
        this.locations= LOCATIONS;
        this.sublocations = [];
        this.selectedLocation='';
    }    

    onLocationChange(event:any){
        let location = 
            this.locations.find( (l) => {
                return l.id == event.target.value;
        });

        if ( location ) {
            this.sublocations = location.sublocations; 
        }
        else {
            this.sublocations = [];
        }
    }
}
