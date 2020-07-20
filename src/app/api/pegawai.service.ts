import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PegawaiService {

  private REST_API_SERVER = "http://localhost/backendEDII";
  
  constructor(private httpClient: HttpClient) {}


  public sendGetRequest(urlDataPegawai: string){
    return this.httpClient.get(this.REST_API_SERVER+urlDataPegawai);
  }

  public postRequest(urlDataPegawai: string, data:any){
    
    return this.httpClient.post(this.REST_API_SERVER+urlDataPegawai, data);
  }
}
