export class Locale {

  constructor(language: string, defaultLocale: boolean, description: string, active: boolean) {
    this.language = language;
    this.defaultLocale = defaultLocale;
    this.description = description;
    this.active = active;
  }

  language: string;
  defaultLocale: boolean;
  description: string;
  active: boolean;
}
