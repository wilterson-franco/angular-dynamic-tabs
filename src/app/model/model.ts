import { Type } from '@angular/core';

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

export interface SkeletonComponent {
  data: any;
}
