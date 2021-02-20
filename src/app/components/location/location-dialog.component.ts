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

  country: Country;
  region: CountryRegion;
  categoryCode: string;
  email: string;
  defaultLocation: boolean;

  countries: string[];
  regions: string[];
  location: Location;

  constructor(private dialogRef: MatDialogRef<LocationDialogComponent>) { }

  ngOnInit() {
    this.location = new Location(this.country, this.defaultLocation);
    this.location.email = this.email;
    this.location.categoryCode = this.categoryCode;
    this.location.region = this.region;

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
