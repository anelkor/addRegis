import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: "root",
})
export class GetApiService {
  constructor(private http: HttpClient) {}
  jsonURL =  'assets/raw_database.json'
  getFee() {
    return this.http.get(`https://uat.ru.ac.th/thaimed/api/fee.jsp?pid=1`);
  }
  checkRegisStatus(val: string) {
    return this.http.get(`https://uat.ru.ac.th/thaimed/api/checkregis.jsp?idcard=${val}`);
  }
  getUniversity() {
    return this.http.get(`https://uat.ru.ac.th/thaimed/api/getUniversity.jsp?pid=1`);
  }

  getZipcode(): Observable<any> {
    return this.http.get<any>(this.jsonURL)
      .pipe(
        map((response: any) => {
          return response;
        }),
        catchError((err) => throwError(err))
      );
  }
}
