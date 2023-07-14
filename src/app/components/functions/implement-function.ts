import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class ApiImplementsFunctionCheckService {
  constructor(private http: HttpClient) {}

  // function check input ditizen card id
  public validNationalID = (id: any): boolean => {
    if (id.length != 13) {
      // console.log('f1');
      return false;
    } else {
      // STEP 1 - get only first 12 digits
      for (var i = 0, sum = 0; i < 12; i++) {
        // STEP 2 - multiply each digit with each index (reverse)
        // STEP 3 - sum multiply value together
        sum += parseInt(id.charAt(i)) * (13 - i);
      }
      // STEP 4 - mod sum with 11
      let mod = sum % 11;
      // STEP 5 - subtract 11 with mod, then mod 10 to get unit
      let check = (11 - mod) % 10;
      // STEP 6 - if check is match the digit 13th is correct
      if (check == parseInt(id.charAt(12))) {
        //console.log('t');
        return true;
      } else {
        //console.log('f2');
        return false;
      }
    }
  };


  CalculateYear() {
    let num = new Date().getFullYear();
    if (num) {
      return true;
    } else {
      return false;
    }
  }

  FormatDate(val: string) {
    let _DATE,
      tmpDate = "";
    const date = new Date(val);
    const dd = String(date.getDate()).padStart(2, "0");
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const yyyy = date.getFullYear() + 543;
    //console.log('date =- ', tmpDate);
    return (_DATE = tmpDate = dd + "/" + mm + "/" + yyyy);
    // console.log(tmpDate)
  }
  private history: string[] = [];
  back(): void {
    this.history.pop();
    if (this.history.length > 0) {
      // this.location.back()
    } else {
      //this.router.navigateByUrl('/')
    }
  }

 
}
