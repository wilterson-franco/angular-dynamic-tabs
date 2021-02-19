import {Component, OnInit} from "@angular/core";
import {TabService} from "./tab.service";
import {Tab} from "./model/model";
import {MatDialog} from "@angular/material/dialog";
import {LocaleDialogComponent} from "./components/locale/locale-dialog.component";
import {Locale} from "./model/model";
import {LocaleComponent} from "./components/locale/locale.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  tabs = new Array<Tab>();
  selectedTab: number;

  constructor(private tabService: TabService, private dialog: MatDialog) {
  }

  ngOnInit() {
    this.tabService.tabSub.subscribe(tabs => {
      this.tabs = tabs;
      this.selectedTab = tabs.findIndex(tab => tab.active);
    });
  }

  tabChanged(event) {
    console.log("tab changed");
  }

  addLocaleTab() {
    let dialogRef = this.dialog.open(LocaleDialogComponent, {
      width: '500px'
    });

    dialogRef.afterClosed().subscribe((locale: Locale) => {
      if (locale !== null && locale !== undefined) {
        const newLocale = new Locale(locale.language, locale.defaultLocale, locale.description);
        this.tabService.addTab(new Tab(LocaleComponent, newLocale.language, newLocale));
      }
    })
  }

  removeLocaleTab(index: number): void {
    this.tabService.removeTab(index);
  }
}
