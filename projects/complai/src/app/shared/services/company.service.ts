import { Injectable, IterableDiffers } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Url } from 'url';
import { Observable } from 'rxjs';
import { map, tap, delay } from 'rxjs/operators';
import { Company } from '../resources/company';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  constructor(private http: HttpClient) {}

  public getCompanyTags(url: string): Observable<Array<string>> {
    return this.http
      .get<Array<Company>>('../../../../assets/data/company-tag.json')
      .pipe(
        delay(2000),
        map(data => data.find(item => item.url === url).tags)
      );
  }
}
