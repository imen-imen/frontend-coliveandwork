import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

export interface ColivingCity {
  id: number;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class CityService {

  private apiUrl = 'http://127.0.0.1:8000/api/coliving_cities';

  constructor(private http: HttpClient) {}

  getCities(): Observable<ColivingCity[]> {
    return this.http.get<any>(this.apiUrl).pipe(
      map(res => res['member'] ?? [])
    );
  }
}
