import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {Locale} from "../../model/model";

@Component({
  selector: 'app-new-location-dialog',
  templateUrl: './locale-dialog.component.html',
  styleUrls: ['./locale-dialog.component.css']
})
export class LocaleDialogComponent implements OnInit {

  languages = ['English', 'French', 'Spanish', 'Portuguese'];

  locale: Locale;

  constructor(private dialogRef: MatDialogRef<LocaleDialogComponent>) { }

  ngOnInit() {
    this.locale = new Locale('Portuguese', false, null);
  }

  save() {
    this.dialogRef.close(this.locale);
  }

  dismiss() {
    this.dialogRef.close(null);
  }
}
