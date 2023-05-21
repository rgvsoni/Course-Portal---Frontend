import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class NoticeService {

  constructor(private _http: HttpClient) { }

  public notices() {
    return this._http.get(`${baseUrl}/notice/`);
  }

  public noticesByCategory(categoryId) {
    return this._http.get(`${baseUrl}/notice/category/${categoryId}`)
  }

  // public noticesByCategoryAndDateRange(categoryId, dates) {
  //   return this._http.get(`${baseUrl}/notice/category/${categoryId}`, dates)
  // }

  public notice(noticeId) {
    return this._http.get(`${baseUrl}/notice/${noticeId}`)
  }

  public addNotice(notice) {
    return this._http.post(`${baseUrl}/notice/`, notice)
  }

  public updateNotice(notice) {
    return this._http.put(`${baseUrl}/notice/`, notice)
  }

  public deleteNotice(noticeId) {
    return this._http.delete(`${baseUrl}/notice/${noticeId}`)
  }

  
}
