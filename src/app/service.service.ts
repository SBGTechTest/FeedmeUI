import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from "@angular/common/http";

const baseURL=environment.baseUrl;

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }
  
    extractAndPushDataToKafka(){
    var extractDataUrl = `${baseURL}/data/extractData`;
    return this.http.get(extractDataUrl);
   }

   getDataFromDb(){
    var getDbDataUrl = `${baseURL}/data/getDataFromDb`;
    return this.http.get(getDbDataUrl);
   }
}
