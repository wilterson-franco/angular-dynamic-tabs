import {Component, OnInit} from "@angular/core";
import {TabService} from "./tab.service";
import {Tab} from "./model/tab.model";
import {MatDialog} from "@angular/material/dialog";
import {NewLocationDialogComponent} from "./components/new-location-dialog/new-location-dialog.component";
import {Locale} from "./model/locale";
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

  addNewTab() {
    let dialogRef = this.dialog.open(NewLocationDialogComponent, {
      width: '500px'
    });

    dialogRef.afterClosed().subscribe((locale: Locale) => {
      if (locale !== null && locale !== undefined) {
        const newLocale = new Locale(locale.language, locale.defaultLocale, locale.description);
        this.tabService.addTab(new Tab(LocaleComponent, newLocale.language, newLocale));
      }
    })
  }

  removeTab(index: number): void {
    this.tabService.removeTab(index);
  }
}
