import {Component, OnInit} from "@angular/core";
import {LocaleTabService} from "./services/locale-tab.service";
import {Country, Locale, Location, Tab} from "./model/model";
import {MatDialog} from "@angular/material/dialog";
import {LocaleDialogComponent} from "./components/locale/locale-dialog.component";
import {LocaleComponent} from "./components/locale/locale.component";
import {LocationDialogComponent} from "./components/location/location-dialog.component";
import {LocationComponent} from "./components/location/location.component";
import {LocationTabService} from "./services/location-tab.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  localeTabs = new Array<Tab>();
  localeSelectedTab: number;

  locationTabs = new Array<Tab>();
  locationSelectedTab: number;

  constructor(private localeTabService: LocaleTabService,
              private locationTabService: LocationTabService,
              private dialog: MatDialog) {
  }

  ngOnInit() {
    this.localeTabService.tabSub.subscribe((tabs : Tab[]) => {
      this.localeTabs = tabs;
      this.localeSelectedTab = tabs.findIndex(tab => tab.active);
    });
    this.locationTabService.tabSub.subscribe((tabs : Tab[]) => {
      this.locationTabs = tabs;
      this.locationSelectedTab = tabs.findIndex(tab => tab.active);
    });
  }

  localeTabChanged(event) {
    console.log("Locale tab changed");
  }

  locationTabChanged(event) {
    console.log("Location tab changed");
  }

  addLocaleTab() {
    let dialogRef = this.dialog.open(LocaleDialogComponent, {
      width: '500px'
    });

    const instance = dialogRef.componentInstance;
    instance.title = "New Locale";

    dialogRef.afterClosed().subscribe((locale: Locale) => {
      if (locale !== null && locale !== undefined) {
        this.localeTabService.addTab(new Tab(LocaleComponent, locale.language, locale));
      }
    })
  }

  removeLocaleTab(index: number): void {
    this.localeTabService.removeTab(index);
  }

  editLocaleTab(index: number, localeTab: Tab): void {

    let dialogRef = this.dialog.open(LocaleDialogComponent, {
      width: '500px'
    });

    const instance = dialogRef.componentInstance;
    instance.title = "Edit Location [ " + localeTab.tabData.language.toUpperCase() + " ]";
    instance.language = localeTab.tabData.language;
    instance.defaultLocale = localeTab.tabData.defaultLocale;
    instance.description = localeTab.tabData.description;

    dialogRef.afterClosed().subscribe((updatedLocale: Locale) => {
      if (updatedLocale !== null && updatedLocale !== undefined) {
        localeTab.title = updatedLocale.language;
        localeTab.tabData.language = updatedLocale.language;
        localeTab.tabData.defaultLocale = updatedLocale.defaultLocale;
        localeTab.tabData.description = updatedLocale.description;
        this.localeTabService.updateTab(index, updatedLocale);
      }
    })

  }
  addLocationTab() {
    let dialogRef = this.dialog.open(LocationDialogComponent, {
      width: '500px'
    });

    const instance = dialogRef.componentInstance;
    instance.title = "New Location";

    dialogRef.afterClosed().subscribe((location: Location) => {
      if (location !== null && location !== undefined) {
        this.locationTabService.addTab(new Tab(LocationComponent, location.country, location));
      }
    })
  }

  removeLocationTab(index: number): void {
    this.locationTabService.removeTab(index);
  }

  editLocationTab(index: number, locationTab: Tab): void {

    let dialogRef = this.dialog.open(LocationDialogComponent, {
      width: '500px'
    });

    const instance = dialogRef.componentInstance;
    instance.title = "Edit Location [ " + locationTab.tabData.country.toUpperCase() + " ]";
    instance.country = locationTab.tabData.country;
    instance.region = locationTab.tabData.region;
    instance.categoryCode = locationTab.tabData.categoryCode;
    instance.email = locationTab.tabData.email;
    instance.defaultLocation = locationTab.tabData.defaultLocation;

    // instance.location = new Location(locationTab.tabData.country, locationTab.tabData.defaultLocation);

    dialogRef.afterClosed().subscribe((updatedLocation: Location) => {
      if (updatedLocation !== null && updatedLocation !== undefined) {
        locationTab.title = updatedLocation.country;
        locationTab.tabData.country = updatedLocation.country;
        locationTab.tabData.region = updatedLocation.region;
        locationTab.tabData.categoryCode = updatedLocation.categoryCode;
        locationTab.tabData.email = updatedLocation.email;
        locationTab.tabData.defaultLocation = updatedLocation.defaultLocation;
        this.locationTabService.updateTab(index, updatedLocation);
      }
    })
  }

}
