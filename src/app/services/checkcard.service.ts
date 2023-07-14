import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class CheckCardService {
  constructor(private http: HttpClient) {}

  getCheck(val: string) {
    return this.http.get(`https://drc.ru.ac.th/thaimed/api/check_row_std.jsp?idcard=${val}`);
  }
  getCourse(val: string) {
    return this.http.get(`https://drc.ru.ac.th/thaimed/api/course.jsp`);
  }
 
  saveData(idcard: string,fname: string,lname: string,coursenum: any,user:any,majorno:any,prenameno:any) {
    return this.http.get(`https://drc.ru.ac.th/thaimed/api/saverep.jsp?idcard=${idcard}&fname=${fname}&lname=${lname}&coursenum=${coursenum}&username=${user}&major=${majorno}&prenameno=${prenameno}`);
  }

  saveRegisData(arr1: any,arr2: any,arr3:any,arrYear2:any,arr4:any,univId:any,univYear:any) {

    return this.http.get(`https://uat.ru.ac.th/thaimed/api/save_address.jsp?idcard=${arr1[0]}&majorno=${arr1[1]}&PRE_NAME=${arr1[6]}&FIRST_NAME_TH=${arr1[7]}&LAST_NAME_TH=${arr1[8]}&FIRST_NAME_EN=${arr1[9]}&LAST_NAME_EN=${arr1[10]}&NATIONARY=${arr1[11]}&DATE_OF_BIRTH=${arr1[12]}&CITIZEN=${arr1[13]}&PASSPORT_NO=${arr1[14]}&ACCESSIBILITY=${arr1[15]}&ADDRESS=${arr1[16]}&BUILDING=${arr1[17]}&MOO=${arr1[18]}&ALLEY=${arr1[19]}&STREET=${arr1[20]}&DISTRICT=${arr1[21]}&STATE=${arr1[22]}&PROVINCE=${arr1[23]}&ZIPCODE=${arr1[24]}&HOME_TELEPHONE=${arr1[25]}&MOBILE_NO=${arr1[26]}&E_MAIL=${arr1[27]}&LINE_ID=${arr1[28]}&total=${arr1[31]}&year=${arr2}&year2=${arrYear2}&course=${arr3}&fee=${arr4}&univ=${univId}&univYear=${univYear}`);
  }

  // saveAuthorityData(arr1: any,arr2: any,arr3:any,arrYear2:any) {

  //   return this.http.get(`https://uat.ru.ac.th/thaimed/api/save_authority.jsp?idcard=${arr1[0]}&year=${arr2}&year2=${arrYear2}&course=${arr3}&majorno=${arr1[1]}&fname=${arr1[7]}&lname=${arr1[8]}`);
  // }

}
