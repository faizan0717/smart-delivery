import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RunCodeService {

  private apiUrl = 'http://127.0.0.1:5000/api'; // Change this to your Flask API URL
  // private apiUrl = 'https://hackershive.pythonanywhere.com/api'; // Change this to your Flask API URL

  constructor(private http: HttpClient) { }

  executeUserCode(userCode: string): Observable<any> {
    const payload = { user_code: userCode };
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post<any>(this.apiUrl, payload, { headers: headers });
  }
}
