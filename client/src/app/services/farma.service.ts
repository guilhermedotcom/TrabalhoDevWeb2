import { Farmacia } from "../models/Farmacia";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class FarmaService {

  baseURL = 'http://localhost:1234';
  
  constructor(private http: HttpClient) {}

  list(): Observable<Farmacia[]> {
    return this.http.get<Farmacia[]>(this.baseURL);
  }
  create(farma: Farmacia): Observable<Farmacia>{
    return this.http.post<Farmacia>(this.baseURL, farma);
  }
}
