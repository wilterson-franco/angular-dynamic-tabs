import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {Location, Country, CountryRegion, Language} from "../../model/model";

@Component({
  selector: 'app-new-location-dialog',
  templateUrl: './location-dialog.component.html',
  styleUrls: ['./location-dialog.component.css']
})
export class LocationDialogComponent implements OnInit {

  title: string;

  countries: string[];
  regions: string[];
  location: Location;

  constructor(private dialogRef: MatDialogRef<LocationDialogComponent>) { }

  ngOnInit() {
    this.location = new Location(Country.CAN, false);
    this.countries = Object.keys(Country).map(key => Country[key]).filter(value => typeof value === 'string') as string[];
    this.regions = Object.keys(CountryRegion).map(key => CountryRegion[key]).filter(value => typeof value === 'string') as string[];
  }

  save() {
    this.dialogRef.close(this.location);
  }

  dismiss() {
    this.dialogRef.close(null);
  }
}
