import {Injectable} from "@angular/core";
import {Country, Location, Tab} from "../model/model";
import {BehaviorSubject} from "rxjs";
import {LocationComponent} from "../components/location/location.component";

@Injectable()
export class LocationTabService {

  public tabs: Tab[] = [
    new Tab(LocationComponent, Country.CAN, new Location(Country.CAN, true))
  ];

  public tabSub = new BehaviorSubject<Tab[]>(this.tabs);

  public removeTab(index: number) {
    this.tabs.splice(index, 1);
    if (this.tabs.length > 0) {
      this.tabs[this.tabs.length - 1].active = true;
    }
    this.tabSub.next(this.tabs);
  }

  public addTab(tab: Tab) {
    for (let i = 0; i < this.tabs.length; i++) {
      if (this.tabs[i].active === true) {
        this.tabs[i].active = false;
      }
      if (tab.tabData.defaultLocation === true && this.tabs[i].tabData.defaultLocation === true) {
        this.tabs[i].tabData.defaultLocation = false;
      }
    }
    tab.id = this.tabs.length + 1;
    tab.active = true;
    this.tabs.push(tab);
    this.tabSub.next(this.tabs);
  }

  public updateTab(index: number, location: Location) {
    if (location.defaultLocation === true) {
      for (let i = 0; i < this.tabs.length; i++) {
        this.tabs[i].tabData.defaultLocation = false;
      }
    }
    this.tabs[index].tabData.country = location.country;
    this.tabs[index].tabData.region = location.region;
    this.tabs[index].tabData.categoryCode = location.categoryCode;
    this.tabs[index].tabData.email = location.email;
    this.tabs[index].tabData.defaultLocation = location.defaultLocation;
    this.tabSub.next(this.tabs);
  }

  public getNumberOfOpenedTabs() {
    return this.tabs.length;
  }
}
