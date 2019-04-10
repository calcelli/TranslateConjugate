import { Component } from '@angular/core';
import { Translate } from '@google-cloud/translate';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { AppService } from './app.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Translator';

  translated: string;
  result: any;
  q: any;

  constructor(private http: HttpClient, private appService: AppService) {}

  translate(): void {
    let url = 'https://translation.googleapis.com/language/translate/v2';
    const apiKey = 'AIzaSyDEzhsmDJSkTp2sRSubOupvoN_QxaAjXYA';
    const target = 'es';
    const source = 'en';
    const format = 'text';

    url = `${url}?key=${apiKey}&q=${this.q}&target=${target}&source=${source}&format=${format}`;

    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'apiKey': 'AIzaSyDEzhsmDJSkTp2sRSubOupvoN_QxaAjXYA',
    //     'target': 'es',
    //     'source': 'en',
    //     'format': 'text',
    //   })
    // }
    this.appService.getTranslation(url).subscribe( x => {
      this.translated = x['data']['translations'][0]['translatedText']
      console.log(this.translated);
    });
  }

  onKey(value: string) { this.q = value; }
}
