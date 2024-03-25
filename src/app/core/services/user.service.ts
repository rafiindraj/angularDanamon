import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Configuration } from '../config/config';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService {
  private baseUrl = 'https://jsonplaceholder.typicode.com:'
  constructor(http: HttpClient) {
    super(http);
   }

  getPhotoData(params:{page : any, limit : any}){
    const query = `_page=${params.page}&_limit=${params.limit}`
    return this.getData(Configuration.PHOTO_URL+query)
  }
}