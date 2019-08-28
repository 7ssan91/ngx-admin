import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Icountry } from '../pages/tables/country-table/country';

@Injectable({
  providedIn: "root"
})
export class CountryService {
private _url='https://raw.githubusercontent.com/lutangar/cities.json/master/cities.json';
  constructor(private http: HttpClient) {}
  getCountry():Observable<Icountry[]>{
    return this.http.get<Icountry[]>(this._url)
  }
  add(addNew):Observable<Icountry[]>{
    return this.http.post<Icountry[]>(this._url,JSON.stringify(addNew))
  }
}
