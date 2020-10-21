import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { RegulationSummary } from '../../../shared/resources/regulation';
import { environment } from '../../../../environments/environment';
import { AuthService } from '../../../core/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RegulationsService  {
  private regulationsEndPoint = environment.apiBaseUrl + '/regulations'
  constructor(private http: HttpClient,
    private authService: AuthService) {}

  public getAllRegulationsSummaries(): Observable<RegulationSummary[]> {

    return this.http.get<RegulationSummary[]>(this.regulationsEndPoint + '/getAllRegulations')
  }

  public getJSON(): Observable<RegulationSummary[]> {
    return this.http.get<RegulationSummary[]>(this.regulationsEndPoint + '/getAllRegulations')
  }
}
