import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ExplorerFilters } from '../../../shared/resources/explorer-filters';

@Injectable({
  providedIn: 'root'
})
export class ExplorerFiltersService {
  constructor(private http: HttpClient) {}

  public getRegulationFilters(): Observable<ExplorerFilters> {
    return this.http.get<ExplorerFilters>(
      '../../../../assets/data/explorer-filters.json'
    );
  }
}
