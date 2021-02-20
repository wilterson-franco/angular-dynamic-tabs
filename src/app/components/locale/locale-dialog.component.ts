import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {Locale, Language} from "../../model/model";

@Component({
  selector: 'app-new-location-dialog',
  templateUrl: './locale-dialog.component.html',
  styleUrls: ['./locale-dialog.component.css']
})
export class LocaleDialogComponent implements OnInit {

  title: string;
  language: string;
  defaultLocale: boolean;
  description: string;

  locale: Locale;
  languages: string[];

  languagesExcluded = new Array<string>();

  constructor(private dialogRef: MatDialogRef<LocaleDialogComponent>) { }

  ngOnInit() {
    this.languages = this.filterLanguages(Object.keys(Language).map(key => Language[key]).filter(value => typeof value === 'string') as string[]);
    this.locale = new Locale(this.language, this.defaultLocale, this.description);
  }

  filterLanguages(allLanguages: string[]) {
    return allLanguages.filter((lang: string) => this.languagesExcluded.indexOf(lang) < 0);
  }

  save() {
    this.dialogRef.close(this.locale);
  }

  dismiss() {
    this.dialogRef.close(null);
  }
}
