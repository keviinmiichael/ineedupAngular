import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { apiUrl } from '../../../environment';
import { Demand, DemandDetail } from '../models/demand.model';
import { Response } from '../../../core/models/response.model';
import { NewDemandRequest } from '../models/new-demand.model';

@Injectable({
  providedIn: 'root',
})
export class DemandService {
  private _apiUrl = apiUrl;

  constructor(private _http: HttpClient) {}

  getDemands() {
    return this._http.get<Response<Demand[]>>(this._apiUrl + '/demands');
  }

  getDemandById(id: number) {
    return this._http.get<Response<DemandDetail>>(
      this._apiUrl + '/demands/' + id
    );
  }

  createDemand(newDemandRequest: NewDemandRequest) {
    return this._http.post<Response<DemandDetail>>(
      this._apiUrl + '/demands',
      newDemandRequest
    );
  }

  deleteDemandById(id: number) {
    return this._http.delete<Response<DemandDetail>>(
      this._apiUrl + '/demands/' + id
    );
  }
}
