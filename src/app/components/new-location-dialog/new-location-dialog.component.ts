import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {Locale} from "../../model/locale";

@Component({
  selector: 'app-new-location-dialog',
  templateUrl: './new-location-dialog.component.html',
  styleUrls: ['./new-location-dialog.component.css']
})
export class NewLocationDialogComponent implements OnInit {

  languages = ['English', 'French', 'Spanish', 'Portuguese'];

  locale: Locale;

  constructor(private dialogRef: MatDialogRef<NewLocationDialogComponent>) { }

  ngOnInit() {
    this.locale = new Locale('Portuguese', false, null, false);
  }

  save() {
    this.dialogRef.close(this.locale);
  }

  dismiss() {
    this.dialogRef.close(null);
  }
}
