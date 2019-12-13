import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MrfiReportService {

  constructor(private httpClient: HttpClient) {

  }
  getMrfiReports() {
    var mrfi = "./assets/mrfi.json";
    return this.httpClient.get(mrfi);
  }
}
