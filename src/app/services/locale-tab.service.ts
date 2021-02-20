import {Injectable} from "@angular/core";
import {Language, Locale, Tab} from "../model/model";
import {BehaviorSubject} from "rxjs";
import {LocaleComponent} from "../components/locale/locale.component";

@Injectable()
export class LocaleTabService {

  public tabs: Tab[] = [
    new Tab(LocaleComponent, Language.ENGLISH, new Locale(Language.ENGLISH, true, null))
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
      if (tab.tabData.defaultLocale === true && this.tabs[i].tabData.defaultLocale === true) {
        this.tabs[i].tabData.defaultLocale = false;
      }
    }
    tab.id = this.tabs.length + 1;
    tab.active = true;
    this.tabs.push(tab);
    this.tabSub.next(this.tabs);
  }

  public updateTab(index: number, locale: Locale) {
    if (locale.defaultLocale === true) {
      for (let i = 0; i < this.tabs.length; i++) {
        this.tabs[i].tabData.defaultLocale = false;
      }
    }
    this.tabs[index].tabData.language = locale.language;
    this.tabs[index].tabData.description = locale.description;
    this.tabs[index].tabData.defaultLocale = locale.defaultLocale;
    this.tabSub.next(this.tabs);
  }

  public getNumberOfOpenedTabs() {
    return this.tabs.length;
  }
}
