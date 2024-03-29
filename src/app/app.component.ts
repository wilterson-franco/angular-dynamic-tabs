import {Component, OnInit} from "@angular/core";
import {LocaleTabService} from "./services/locale-tab.service";
import {Country, Language, Locale, Location, Tab} from "./model/model";
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

  showAddLocale: boolean = true;
  showAddLocation: boolean = true;

  constructor(private localeTabService: LocaleTabService,
              private locationTabService: LocationTabService,
              private dialog: MatDialog) {
  }

  ngOnInit() {
    this.localeTabService.tabSub.subscribe((tabs: Tab[]) => {
      this.localeTabs = tabs;
      this.localeSelectedTab = tabs.findIndex(tab => tab.active);
    });
    this.locationTabService.tabSub.subscribe((tabs: Tab[]) => {
      this.locationTabs = tabs;
      this.locationSelectedTab = tabs.findIndex(tab => tab.active);
    });
  }

  addLocaleTab() {
    let dialogRef = this.dialog.open(LocaleDialogComponent, {
      width: '500px'
    });

    const instance = dialogRef.componentInstance;
    instance.title = "New Locale";
    instance.languagesExcluded = this.localeTabs.map((tab: Tab) => tab.tabData.language);
    instance.locale = new Locale(undefined, undefined, undefined);

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
    instance.locale = new Locale(localeTab.tabData.language, localeTab.tabData.defaultLocale, localeTab.tabData.description);

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

  localeTabChanged(event) {
    this.showAddLocale = Object.keys(Language).length !== this.localeTabService.getNumberOfOpenedTabs()
  }

  addLocationTab() {
    let dialogRef = this.dialog.open(LocationDialogComponent, {
      width: '500px'
    });

    const instance = dialogRef.componentInstance;
    instance.title = "New Location";
    instance.countriesExcluded = this.locationTabs.map((tab: Tab) => tab.tabData.country);
    instance.location = new Location(
      undefined,
      undefined,
      undefined,
      undefined,
      undefined);

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
    instance.location = new Location(
      locationTab.tabData.country,
      locationTab.tabData.region,
      locationTab.tabData.defaultLocation,
      locationTab.tabData.categoryCode,
      locationTab.tabData.email);

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

  locationTabChanged(event) {
    this.showAddLocation = Object.keys(Country).length !== this.locationTabService.getNumberOfOpenedTabs()
  }

}
