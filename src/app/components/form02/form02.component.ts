import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiImplementsFunctionCheckService } from '../functions/implement-function';
import { GetApiService } from 'src/app/services/getApi.service';
import { CheckCardService } from 'src/app/services/checkcard.service';

@Component({
  selector: 'app-form02',
  templateUrl: './form02.component.html',
  styleUrls: ['./form02.component.scss']
})
export class Form02Component implements OnInit {

  public arr: string[] = [];
  //----------------------------------------------------
  public uid: string = '';
  public majorno: string = '';

  public EDU_STATUS: string = '';
  public EDU_FROM: string = '';
  public EDU_YEAR: string = '';
  public EDU_ARR: any

  public MED: string = '';
  public MAS: string = '';
  public PHA: string = '';
  public MID: string = '';
  public arryear = [2562, 2563, 2564, 2565, 2566];
  public EDU_ARR_YEAR: number[] = [];

  public MED_YEAR2: string = '';
  public MAS_YEAR2: string = '';
  public PHA_YEAR2: string = '';
  public MID_YEAR2: string = '';

  public MED_YEAR: string = '';
  public MAS_YEAR: string = '';
  public PHA_YEAR: string = '';
  public MID_YEAR: string = '';
  

  //----------------- profile ----------------------
  public PRE_NAME: string = '';
  public FIRST_NAME_TH: string = '';
  public LAST_NAME_TH: string = '';
  public FIRST_NAME_EN: string = '';
  public LAST_NAME_EN: string = '';
  public NATIONARY: string = '';
  public DATE_OF_BIRTH: string = '';
  public _DATE_OF_BIRTH: string = '';
  public CITIZEN: string = '';
  public PASSPORT_NO: string = '';
  public ACCESSIBILITY: string = '';

  //--------- Address --------------------------
  public ADDRESS: string = '';
  public BUILDING: string = '';
  public MOO: string = '';
  public ALLEY: string = '';
  public STREET: string = '';
  public DISTRICT: string = '';
  public STATE: string = '';
  public PROVINCE: string = '';
  public ZIPCODE: string = '';
  public HOME_TELEPHONE: string = '';
  public MOBILE_NO: string = '';
  public E_MAIL: string = '';
  public LINE_ID: string = '';
  public arrdata:any=[] ;
  public dataAddress:any=[] ;
  public PROVINCE_CODE: string = '';

  //--- fee --------------------------------------
  public fee2: any;
  public fee1: any;
  public chkbox: string = '';
  public AMOUNT: string = '';
  public TOTAL_AMOUNT: string = '';
  public AMOUNT_COURSE: number = 0;
  public arrAMOUNT: string[] = [];
  //----------------------------------------------

  constructor(private router: Router,
    private apiImplementFn: ApiImplementsFunctionCheckService,
    private apiGet: GetApiService,
    private apiSave: CheckCardService
  ) { }
  ngOnInit(): void {
    this.getStorage();
    this.getFee();
    this.calYear();
  }

  getStorage() {
    this.uid = atob(String(sessionStorage.getItem('uid')));
    this.majorno = (String(sessionStorage.getItem('majorno')));
    this.CITIZEN = this.uid;
    // console.log(this.uid);
  }
  

  onCheckInp(val: string) {
    //  console.log('ll =', this.arr.length);
    if (this.arr.length > 0) {
      const index = this.arr.indexOf(val);
      if (index !== -1) {
        this.arr.splice(index, 1);
      } else {
        this.arr.push(val);
      }
    } else {
      this.arr.push(val);
    }
    // val = '';
    // console.log('arr =', this.arr);
  }

  async getFee() {
    this.apiGet.getFee().subscribe((res: any) => {
      if (res.success) {
        this.fee1 = res.results;
        this.fee2 = res.results2;

      } else {
        alert('err load fee.');
      }
      //console.log(this.fee1);
    });
    this.apiGet.getUniversity().subscribe((res: any) => {
      if (res.success) {
        this.EDU_ARR = res.results;

      } else {
        alert('err load data university.');
      }
      //console.log(this.EDU_ARR);
    });

    this.apiGet.getZipcode().subscribe((data)=>{ 
      this.arrdata = data
      console.log(data)
    });
  }

   async onChangeEvent(ev: any) {
    let _key = ev.target.value;

    // console.log(_key);

    if (_key.length > 3) {
      let res = await this.arrdata.filter((zip: any) => {
        return (
          zip.amphoe.indexOf(_key) > -1 ||
          zip.province.indexOf(_key) > -1 ||
          zip.district.indexOf(_key) > -1 ||
          zip.zipcode.toString().indexOf(_key) > -1
        );
      });
      this.dataAddress = res;


      // this.txt1=this.dataAddress;
      console.log(this.dataAddress);
    } else {
      return this.dataAddress = [];
    }
    return this.dataAddress;

  }

  addAddress(data: any, idx: number) {
    
      this.PROVINCE = data.province;
      this.PROVINCE_CODE = data.province_code;
      this.STATE = data.amphoe;
      // this.STATE_CODE = data.amphoe_code;
      this.ZIPCODE = data.zipcode;
      this.DISTRICT = data.district;
      // this.DISTRICT_CODE = data.district_code;

      //this.amphoe = data.amphoe;
      // console.log(this.thaiEduProvince.amphoe);

      this.dataAddress = [];
      
  }


  calFee() {
    this.fee1.forEach((e: any) => {
      if (e.MAJOR_NO == this.majorno) {
        this.AMOUNT = e.AMOUNT;
        //console.log(e.AMOUNT);
      }
    });

    let tmp;
    this.fee2.forEach((e: any) => {
      if (e.MAJOR_NO == this.majorno) {
        tmp = e.AMOUNT;
        //console.log(e.AMOUNT);
      }
    });

    this.arrAMOUNT.push(String(this.AMOUNT));
    for (let i = 0; i < this.arr.length; i++) {
      this.arrAMOUNT.push(String(tmp));
    }

    this.AMOUNT_COURSE = this.arr.length * Number(tmp);
    this.TOTAL_AMOUNT = String(Number(this.AMOUNT_COURSE) + Number(this.AMOUNT));

  }

  checkSelect() {
    console.log('med =', this.DATE_OF_BIRTH);
  }

  cancle(): void {
    sessionStorage.removeItem('uid');
    sessionStorage.removeItem('mejorno');
    this.router.navigate(['/checkregis']);
  }

  calYear() {
    const date = new Date();
    const yyyy = date.getFullYear() + 543;
    let year = 2500;
    for (let i = year; i < yyyy; i++) {
      year = year + 1;
      this.EDU_ARR_YEAR.push(year);
    }
  }

  onSelectDate() {
    this.DATE_OF_BIRTH = this.apiImplementFn.FormatDate(this._DATE_OF_BIRTH);

    //this.dateOfBirth.setValue(yyyy + '-' + mm + '-' + dd);
    console.log(this.DATE_OF_BIRTH);
  }

  onSelectCourseYear(){
    // let tempArrYear = [];
    
  }

  todoSave() {
    this.calFee();

    let tmpArrCourse:any=[];
    this.arr.filter(item=>{
      if(item =="MED"){
        tmpArrCourse.push({
        "name":item,
        "year": this.MED_YEAR,
        "year2": this.MED_YEAR2
      })
      }if(item =="MAS"){
        tmpArrCourse.push({
        "name":item,
        "year": this.MAS_YEAR,
        "year2": this.MAS_YEAR2
      })
      }if(item =="PHA"){
        tmpArrCourse.push({
        "name":item,
        "year": this.PHA_YEAR,
        "year2": this.PHA_YEAR2
      })
      }if(item =="MID"){
        tmpArrCourse.push({
        "name":item,
        "year": this.MID_YEAR,
        "year2": this.MID_YEAR2
      })
      }
    })

    let cYear:any=[];
    let cName:any=[];
    let cYear2:any=[];

    for (let i = 0; i < tmpArrCourse.length; i++) {
      cYear.push(tmpArrCourse[i].year)
      cName.push(tmpArrCourse[i].name)
      cYear2.push(tmpArrCourse[i].year2)
    }

    console.log(this.EDU_FROM , this.EDU_YEAR) // -- เกบเงินทั้งหมดลง array จะใช้ก้อเปิด
    let tmpArr = [
      this.CITIZEN, //1
      this.majorno, //2
      this.MED_YEAR, //3
      this.MAS_YEAR, //4
      this.PHA_YEAR, //5
      this.MID_YEAR, //6

      this.PRE_NAME, //7
      this.FIRST_NAME_TH, //8
      this.LAST_NAME_TH, //9
      this.FIRST_NAME_EN, //10
      this.LAST_NAME_EN, //11
      this.NATIONARY, //12 
      this.DATE_OF_BIRTH, //13 
      this.CITIZEN, //14
      this.PASSPORT_NO, //15 
      this.ACCESSIBILITY, //16

      this.ADDRESS, //14
      this.BUILDING, //18
      this.MOO, //19 
      this.ALLEY, //20
      this.STREET, //21
      this.DISTRICT, //22
      this.STATE, //23
      this.PROVINCE_CODE, //24
      this.ZIPCODE, //25
      this.HOME_TELEPHONE, //26
      this.MOBILE_NO, //27
      this.E_MAIL, //28
      this.LINE_ID, //29

      this.AMOUNT, //30
      this.AMOUNT_COURSE, //31
      this.TOTAL_AMOUNT, //32
    ];
    


    

      this.apiSave.saveRegisData(tmpArr, cYear,cName,cYear2,this.arrAMOUNT,this.EDU_FROM,this.EDU_YEAR).subscribe((res: any) => {
       if (res.success) {
          this.router.navigate(['/regis-success']);
       } else {
         alert("Register Error.")
       }
     });

    this.arrAMOUNT =[]
  }
  clearStorage() {
    sessionStorage.removeItem('uid');
    sessionStorage.removeItem('mejorno');
  }
}


// this.apiSave.saveAuthorityData(tmpArr, cYear,cName,cYear2).subscribe((res2: any) => {
//   if (res2.success) {
//     this.router.navigate(['/regis-success']);
//   } else {
//     alert("Register Error.")
//   }
// });