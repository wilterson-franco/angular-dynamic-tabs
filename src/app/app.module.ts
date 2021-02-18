import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import {AppComponent} from "./app.component";
import {TabContentComponent} from "./tab-content.component";
import {ContentContainerDirective} from "./content-container.directive";
import {TabService} from "./tab.service";
import {Comp1Component} from "./components/comp1.component";
import {NewLocationDialogComponent} from './components/new-location-dialog/new-location-dialog.component';
import {FormsModule} from "@angular/forms";
import {MaterialModule} from "./shared/material.module";

@NgModule({
  declarations: [
    AppComponent,
    TabContentComponent,
    ContentContainerDirective,
    Comp1Component,
    NewLocationDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [TabService],
  bootstrap: [AppComponent],
  entryComponents: [Comp1Component, NewLocationDialogComponent]
})
export class AppModule {
}
