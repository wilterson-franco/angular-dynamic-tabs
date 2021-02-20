import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import {AppComponent} from "./app.component";
import {TabContentComponent} from "./tab-content.component";
import {ContentContainerDirective} from "./content-container.directive";
import {LocaleTabService} from "./services/locale-tab.service";
import {LocaleDialogComponent} from './components/locale/locale-dialog.component';
import {FormsModule} from "@angular/forms";
import {MaterialModule} from "./shared/material.module";
import {LocaleComponent} from './components/locale/locale.component';
import {LocationDialogComponent} from "./components/location/location-dialog.component";
import {LocationComponent} from "./components/location/location.component";
import {LocationTabService} from "./services/location-tab.service";

@NgModule({
  declarations: [
    AppComponent,
    TabContentComponent,
    ContentContainerDirective,
    LocaleDialogComponent,
    LocaleComponent,
    LocationDialogComponent,
    LocationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [
    LocaleTabService,
    LocationTabService
  ],
  bootstrap: [
    AppComponent
  ],
  entryComponents: [
    LocaleComponent,
    LocaleDialogComponent,
    LocationComponent,
    LocationDialogComponent
  ]
})
export class AppModule {
}
