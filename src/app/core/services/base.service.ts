import { Injectable } from "@angular/core";
import { map, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class BaseService {
  constructor(public http: HttpClient) { }

  getData(url: any): Observable<any> {
    return this.http
      .get(url)
      .pipe(map(response => response), catchError((err: any) => this.handleError(err)));
  }
  getDataParam(url: any, params: any): Observable<any> {
    return this.http
      .get(url, { params: params })
      .pipe(map(response => response), catchError((err: any) => this.handleError(err)));
  }
  createData(url: any, data: any) : Observable<any> {
    return this.http
      .post(url, data)
      .pipe(map(response => response), catchError((err: any) => this.handleError(err)));
  }
  createDataParam(url: any, data: any, params: any): Observable<any> {
    return this.http
      .post(url, data, { params: params })
      .pipe(map(response => response), catchError((err: any) => this.handleError(err)));
  }
  updateData(url: any, data: any): Observable<any> {
    return this.http
      .put(url, data)
      .pipe(map(response => response), catchError((err: any) => this.handleError(err)));
  }
  updateDataParam(url: any, data: any, params: any): Observable<any> {
    return this.http
      .put(url, data, { params: params })
      .pipe(map(response => response), catchError((err: any) => this.handleError(err)));
  }
  deleteData(url: any, data: any): Observable<any> {
    return this.http
      .delete(url + "/" + data)
      .pipe(map(response => response), catchError((err: any) => this.handleError(err)));
  }

  handleError(error: any) {
    return throwError(error.message.response || error);
  }

  createDataHeader(url: any, data: any, httpOptions: any): Observable<any> {
    return this.http
      .post(url, data, httpOptions)
      .pipe(map(response => response), catchError((err: any) => this.handleError(err)));
  }
  getDataHeader(url:any, httpOptions:any):Observable<any> {
    return this.http
    .get(url, httpOptions)
    .pipe(map(response => response), catchError((err: any) => this.handleError(err)));
  }
}