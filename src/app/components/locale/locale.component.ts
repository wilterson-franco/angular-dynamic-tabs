import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-locale',
  templateUrl: './locale.component.html',
  styleUrls: ['./locale.component.css']
})
export class LocaleComponent implements OnInit {

  @Input() locale;

  constructor() { }

  ngOnInit() {
  }

}
