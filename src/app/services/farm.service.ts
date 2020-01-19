import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FarmService {

  suffix = '';
  base_url = "http://localhost:8000/api/";

  constructor(private httpClient: HttpClient) { }

  get(id){
    let url = this.base_url + this.suffix + "/" + id;
    return this.httpClient.get(url);
  }

  getAll(params?: any){
    let url = this.base_url + this.suffix;

    if (params) {
      url = this.parseurl(url, params);
    }

    return this.httpClient.get(url);
  }

  post(item){
    let url = this.base_url + this.suffix + "/";
    return this.httpClient.post(url, item);
  }

  put(id, item: any) {
    let url = this.base_url + this.suffix + '/' + id;
    return this.httpClient.put(url, item);
  }

  putData(id, item: any){
    let url = this.base_url + this.suffix + '/' + id;
    return this.httpClient.put(url, item);
  }


  delete(id){
    let url = this.base_url + this.suffix + '/' + id;
    return this.httpClient.delete(url);
  }

  private parseurl = (prev_url, params = {}) => {
    var new_url = prev_url;
    let keys = Object.keys(params);
    for (let i = 0; i < keys.length; i++) {
      var key = keys[i];
      if (i == 0) {
        new_url += "?";
      }
      new_url += `${key}=${params[key]}`;
      if (i != keys.length - 1) {
        new_url += "&";
      }
    }
    return new_url;
  };
}
