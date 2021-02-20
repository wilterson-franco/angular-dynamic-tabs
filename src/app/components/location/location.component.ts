import {Component, Input, OnInit} from '@angular/core';
import {Location} from "../../model/model";

@Component({
  selector: 'app-locale',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  @Input() data: Location;
  @Input() readonly: boolean;

  constructor() { }

  ngOnInit() {
  }

}
