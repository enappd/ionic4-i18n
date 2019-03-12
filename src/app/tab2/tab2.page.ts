import { Component } from '@angular/core';
import { Globalization } from '@ionic-native/globalization/ngx';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  public title: string;
  public title_2: string;
  public description: string;
  public language: string;
  constructor(private globalization: Globalization, private _translate: TranslateService) {
    _translate.setTranslation('en', {
      "TITLE": "Bye sir",
      "TITLE_2": "Bye {{value}}",
      "description": "Thanks for translating this text"
    });
    _translate.setTranslation('fr', {
      "TITLE": "Au revoir Monsieur",
      "TITLE_2": "Au revoir  {{value}}",
      "description": "Merci d'avoir traduit ce texte"
    });
    _translate.setTranslation('es', {
      "TITLE": "Adiós señor",
      "TITLE_2": "Adiós {{value}}",
      "description": "Gracias por traducir este texto"
    });
  }

  ionViewDidEnter(): void {
    console.log('challa?')
    this._initTranslate()
  }


  public _initialiseTranslation(): void {
    this._translate.get('TITLE').subscribe((res: string) => {
      console.log(res);
      this.title = res;
    });
    this._translate.get('description').subscribe((res: string) => {
      console.log(res);
      this.description = res;
    });
    this._translate.get('TITLE_2', { value: 'John' }).subscribe((res: string) => {
      console.log(res);
      this.title_2 = res;
    });

  }

  public changeLanguage(): void {
    this._translateLanguage();
  }

  _translateLanguage(): void {
    console.log('language', this.language)
    this._translate.use(this.language);
    this._initialiseTranslation();
  }

  _initTranslate() {
    // Set the default language for translation strings, and the current language.
    this._translate.setDefaultLang('en');

    if (this._translate.getBrowserLang() !== undefined) {
      this.language = this._translate.getBrowserLang();
      console.log('browser language is', this._translate.getBrowserLang());
    }
    else {
      this.language = 'en'; // Set your language here
    }

    this._translateLanguage();
  }

  getDeviceLanguage() {
    this.globalization.getPreferredLanguage()
      .then(res => console.log(res))
      .catch(e => console.log(e));
  }
}
