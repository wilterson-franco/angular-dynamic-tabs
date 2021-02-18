import { Component, OnInit } from "@angular/core";
import { TabService } from "./tab.service";
import { Tab } from "./tab.model";
import { Comp1Component } from "./components/comp1.component";
import {MatDialog} from "@angular/material/dialog";
import {NewLocationDialogComponent} from "./components/new-location-dialog/new-location-dialog.component";
import {Locale} from "./module/locale";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  tabs = new Array<Tab>();
  selectedTab: number;

  constructor(private tabService: TabService, private dialog: MatDialog) {}

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
      width: '450px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result !== null && result !== undefined) {
        const newLocale = new Locale(result.language, false, 'please enter merchant\'s description in the selected language', true);
        this.tabService.addTab(new Tab(Comp1Component, newLocale.language, newLocale));
      }
    })
  }

  removeTab(index: number): void {
    this.tabService.removeTab(index);
  }
}
