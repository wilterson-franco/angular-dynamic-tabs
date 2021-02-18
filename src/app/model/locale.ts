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
