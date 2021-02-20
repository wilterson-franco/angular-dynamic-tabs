import {Type} from '@angular/core';

export class Tab {
  public id: number;
  public title: string;
  public tabData: any;
  public active: boolean;
  public component: Type<any>;

  constructor(component: Type<any>, title: string, tabData: any) {
    this.component = component;
    this.title = title;
    this.tabData = tabData;
  }
}

export interface SkeletonComponent {
  data: any;
  readonly: boolean;
}

export enum Language {
  ENGLISH = 'English',
  FRENCH = 'French',
  SPANISH = 'Spanish',
  PORTUGUESE = 'Portuguese'
}

export enum Country {
  CAN = 'Canada',
  USA = 'The United States',
  SPA = 'Spain',
  BRA = 'Brazil',
}

export enum CountryRegion {
  REGION1 = 'Region 1',
  REGION2 = 'Region 2',
  REGION3 = 'Region 3',
  REGION4 = 'Region 4',
  REGION5 = 'Region 5',
}

export class Locale {

  constructor(language: string, defaultLocale: boolean, description: string) {
    this.language = language;
    this.defaultLocale = defaultLocale;
    this.description = description;
  }

  language: string;
  defaultLocale: boolean;
  description: string;
}

export class Location {

  constructor(country: string, defaultLocation: boolean) {
    this.country = country;
    this.defaultLocation = defaultLocation;
  }

  country: string;
  region: string;
  defaultLocation: boolean;
  categoryCode: string;
  email: string;
}

