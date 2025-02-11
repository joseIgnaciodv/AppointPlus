import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface UserRegistered {
  name: string;
  lastName: string;
  email: string;
}

@Injectable({
  providedIn: 'root',
})
export class WaitlistService {
  baseApi: string = 'https://joseignaciodv1.pythonanywhere.com/';

  constructor(private http: HttpClient) {}

  getRegisteredUser(email: string): Observable<UserRegistered> {
    let url = this.baseApi + 'get_waitlist_user/' + email;
    return this.http.get<UserRegistered>(url);
  }

  addUserWaitlist(name: string, lastName: string, email: string) {
    let url = this.baseApi + 'add_user_waitlist';
    let body = { name: name, lastName: lastName, email: email };
    return this.http.post(url, body, { responseType: 'text' });
  }

  sendThankYouEmail(name: string, language: string, email: string) {
    let url = this.baseApi + 'send_thank_you_email';
    let body = { name: name, language: language, email: email };
    return this.http.post(url, body, { responseType: 'text' });
  }
}
