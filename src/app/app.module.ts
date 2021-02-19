import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import {AppComponent} from "./app.component";
import {TabContentComponent} from "./tab-content.component";
import {ContentContainerDirective} from "./content-container.directive";
import {TabService} from "./tab.service";
import {LocaleDialogComponent} from './components/locale/locale-dialog.component';
import {FormsModule} from "@angular/forms";
import {MaterialModule} from "./shared/material.module";
import { LocaleComponent } from './components/locale/locale.component';

@NgModule({
  declarations: [
    AppComponent,
    TabContentComponent,
    ContentContainerDirective,
    LocaleDialogComponent,
    LocaleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [TabService],
  bootstrap: [AppComponent],
  entryComponents: [LocaleDialogComponent, LocaleComponent]
})
export class AppModule {
}
