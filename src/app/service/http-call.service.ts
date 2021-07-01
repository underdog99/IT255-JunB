import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/internal/operators';
import { HttpClient } from '@angular/common/http';
import { User } from '../modeli/user';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpCallService {

  linkUser: string;

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get("http://it255.glitch.me/users");
  }

  getOneByID(id: string): Observable<User> {
    this.linkUser = "http://it255.glitch.me/users/" + id;
    console.log(this.linkUser);
    return this.http.get(this.linkUser).pipe(map((data: any) => this._createUserFromObject(data)));
  }

  create() {

  }

  update(id: string) {

  }

  delete(id: string) {

  }

  private _createUserFromObject(item: any) {
    return new User(item.id, item.username, item.email, item.password, item.rola);
  }
}
