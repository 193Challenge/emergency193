import { Component, OnInit, NgModule, ViewChild, ElementRef } from '@angular/core';
import { TNSCheckBoxModule } from 'nativescript-checkbox/angular';
import { registerElement } from "nativescript-angular/element-registry";
import { MapboxMarker, MapboxView } from "nativescript-mapbox";
import { RouterExtensions } from 'nativescript-angular/router';

registerElement("Mapbox", () => require("nativescript-mapbox").MapboxView);
var mapbox = require("nativescript-mapbox");

@NgModule({
    imports: [TNSCheckBoxModule],
})
export class ChekBoxModule {}

@Component({
  selector: 'app-operation-question',
  templateUrl: './operation-question.component.html',
  styleUrls: ['./operation-question.component.css']
})
export class OperationQuestionComponent implements OnInit {

  public message: string;

  constructor(private router: RouterExtensions) { }

  ngOnInit() {}

  public onMapReady(args) {
    // you can tap into the native MapView objects (MGLMapView for iOS and com.mapbox.mapboxsdk.maps.MapView for Android)
    var nativeMapView = args.ios ? args.ios : args.android;
    console.log("Mapbox onMapReady for " + (args.ios ? "iOS" : "Android") + ", native object received: " + nativeMapView);
  
    args.map.getUserLocation().then(
      function(userLocation) {
        console.log("Current user location: " +  userLocation.location.lat + ", " + userLocation.location.lng);
        console.log("Current user speed: " +  userLocation.speed);
        args.map.setCenter(
          {
            lat: userLocation.location.lat + 0.001, // mandatory
            lng: userLocation.location.lng + 0.001, // mandatory
            animated: true // default true
          })
        args.map.addMarkers([
          {
            lat: userLocation.location.lat,
            lng: userLocation.location.lng,
            title: 'Local da Ocorrência',
            subtitle: 'Os bombeiros irão ao local informado',
            selected: true, // makes the callout show immediately when the marker is added (note: only 1 marker can be selected at a time)
            onCalloutTap: function(){console.log("'Nice location' marker callout tapped");}
          }]
        );
      }
  )
  }

  public request() {
    this.router.navigate(['response']);
  }

}
