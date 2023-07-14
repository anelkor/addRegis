import { animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CheckCardService } from 'src/app/services/checkcard.service';

export interface data  {
  name: string
}

@Component({
  selector: 'app-add-page',
  templateUrl: './add-page.component.html',
  styleUrls: ['./add-page.component.scss'],
})
export class AddPageComponent implements OnInit {
  public idcard: string = '';
  public prename:string='';
  public fname: string = '';
  public lname: string = '';
  public message: string = '';
  public majorno: string = '';
  public major: string = '';
  public rec: any;
  public user:any='';
  public btnCheck: boolean = false;


  //---------------------
  public MED: boolean = false;
  public MAS: boolean = false;
  public PHA: boolean = false;
  public MID: boolean = false;

  public dMED: boolean = false;
  public dMAS: boolean = false;
  public dPHA: boolean = false;
  public dMID: boolean = false;

  public arr:string[] = [];;
  public isDisSelect: boolean = false;
  //---------------------
  public  course_num :any=[];
  public  coursetmp :any=[];
  //public arrCourse:string[]=[{'course_num':["MED","MAS","PHA","MID"]}];
  public arrtmp: string[] = [];
  public errorstr="";
  public isCheckInput = false;
  tmprec: any

  //---------------------

  constructor(
    private _formBuilder: FormBuilder,
    private router: Router,
    private apiSave: CheckCardService
  ) {}

  ngOnInit(): void {
    console.log("int");
    this.getStorage();
   // this.getCourseApi();
  }
  
  ngOnDestroy(){
    this.clearStorage();
  }

  clearStorage(){
    sessionStorage.removeItem('idcard');
    sessionStorage.removeItem('fname');
    sessionStorage.removeItem('lname');
    sessionStorage.removeItem('majorno');
    sessionStorage.removeItem('major');
    sessionStorage.removeItem('rec');
    sessionStorage.removeItem('prename');
  }

  getCourseApi(){
    console.log('getapi')
    this.apiSave.getCourse(this.idcard).subscribe((res: any) => {
      this.course_num = res.rec;
      console.log(res)
    });
  }

  getStorage() {
    this.idcard = String(sessionStorage.getItem('idcard'));
    this.fname = String(sessionStorage.getItem('fname'));
    this.lname = String(sessionStorage.getItem('lname'));
    this.prename = String(sessionStorage.getItem('prename'));
    this.majorno = String(sessionStorage.getItem('majorno'));
    this.major = String(sessionStorage.getItem('major'));
    this.user = String(sessionStorage.getItem('user'));
    this.tmprec = String(sessionStorage.getItem('rec'))
    this.rec = Object.keys(this.tmprec).length == 0 ? '' : JSON.parse(String(sessionStorage.getItem('rec')));

    if (this.fname == 'null') {
      this.fname = '';
    }else if(this.fname != 'null'){
      this.isCheckInput = true
    }
    if (this.lname == 'null') {
      //console.log(this.lname);
      this.lname = '';
    }
    console.log(this.majorno);
    if (this.majorno != 'null' && this.major != 'null') {
      console.log(this.majorno.length);
      this.isDisSelect = true;
    }

    // if (this.majorno.length > 0) {
    //   this.isDisSelect = true;
    // }
    
    if (this.rec) {
      this.rec['coursenum'].filter((e: any) => {
        if (e == 'MED') {
          this.MED = true;
          this.dMED = true;
        } else if (e == 'MID') {
          this.MID = true;
          this.dMID = true;
        } else if (e == 'PHA') {
          this.PHA = true;
          this.dPHA = true;
        } else if (e == 'MAS') {
          this.MAS = true;
          this.dMAS = true;
        }
      });
    }

    if (this.MAS && this.MED && this.MID && this.PHA) {
      this.btnCheck = true;
    }

    console.log(this.MED + ' ' + this.MID);

    //console.log(this.rec);
  }

  onSelectMajor(val: string) {
    console.log('= ', val);
  }


  addCourse(data: any){
     
        if(sessionStorage.getItem("todoCourse") === null){
  
          this.coursetmp.push({
            "c_name":data.c_name,
            "c_no":data.c_no,
            
          });
      
          sessionStorage.setItem("todoCourse",JSON.stringify(this.coursetmp));
          }else{
            let a:any;
            let b;
            let c: any[]
            a = sessionStorage.getItem("todoCourse");
            c = JSON.parse(a);
            console.log(a)
            b = c.filter(item=>item.c_name ===data.c_name).length;
          
              if(b==0){
                this.coursetmp.push({
                  "c_name":data.c_name,
                  "c_no":data.c_no,
                  
                });
                sessionStorage.setItem("todoCourse",JSON.stringify(this.coursetmp));         
                //console.log("todoCourse:"+ this.todo.length)
                //console.log(this.todo)
                this.errorstr = 'คุณได้เพิ่มวิชา '+ data.COURSENO;
          }else{
            this.errorstr = 'คุณได้เลือกรหัสวิชานี้แล้ว กรูณาเลือกวิชาใหม่';
        }

      }
  console.log(this.coursetmp)
  }

  deleteCourse(index:any){
    this.coursetmp.splice(index,1);
    sessionStorage.setItem("todoCourse",JSON.stringify(this.coursetmp));
    var tempC =  JSON.parse(String(sessionStorage.getItem("todoCourse")));

  }

  onCheckInp(val: string) {
    let arr3;
    console.log('ll =', this.arr.length);
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
    console.log('arr =', this.arr);
  }

  cmpArr() {

    const result: string[] = [];
    this.arr.forEach((item) => {
      if (!result.includes(item)) {
        result.push(item);
      }
    })

    for (const item of result) {
      console.log('of =', item);
      this.arrtmp.push(item);
    }




    console.log('arr =', this.arrtmp);
  }

  // onCheckInp(e:any,val: string) {
  //   console.log(e.checked)
  //   if(e.checked == true){
  //     this.arr.push(val)
  //     console.log(this.arr)
  //   }else{
  //     console.log("else")
  //      this.arr.filter(item=>{  
 
  //         if(item  === val){
  //           console.log(item+"="+ val );
  //           this.arr=[]
  //           this.arr.push(val)
  //           console.log(this.arr);
  //         }
      
  //     })
  //   }



  // //   console.log(e.checked);
  // //   console.log('= ', val);
  // //   if(e.checked == true){
  // //     if (Object.keys(this.arr).length > 1) {
  // //       this.arr.forEach((e: any) => {
  // //         if (e.name !== val) {
  // //           this.arr.push( val );
  // //           console.log('add =', e.name);
  // //         }else if (e.value == val) {
  // //           this.arr.splice(this.arr.findIndex(e => e.name === val),1);
  // //         }
  // //       });
  
  // //       // console.log('dd =', index);
  // //     } else  {
  // //       this.arr.push( val );
  // //       console.log('add 0=', this.arr);
  // //     }
  // //   }else{

  // //     this.arr = this.arr.filter(item=>{  
  // //       console.log(item.name+"="+ val );
  // //         if(item.name  === val){}
          
  // //     })

  // // // for (let i = 0; i < this.arr.length; i++) {
  // // //     for (let j = 0; j < tmp.length; j++) {
  // // //       if (this.arr[j] == val) {
  // // //         this.arr.splice(j, 1);
  // // //         console.log('dedl =', this.arr[j]);
  // // //       } else if (this.arr[i] != val) {
  // // //         this.arr.push(val);
  // // //         console.log('add =', this.arr[j]);
  // // //       }
  // // //     }
  // // //   } 
  // //   console.log('arr =', this.arr);
  // //   }
   

  // }

  todoSave(): void {

    //  console.log(this.prename);
    
    const result: string[] = [];
    this.arr.forEach((item:any) => {
        if (!result.includes(item)) {
            result.push(item);
        }
    })

    for (const item of result) {
      console.log('of =', item);
      this.arrtmp.push(item);
    }

    if (this.arrtmp.length > 0) {
      this.apiSave
        .saveData(this.idcard, this.fname, this.lname, this.arrtmp,this.user,this.majorno,this.prename)
        .subscribe((data :any) => {
          console.log(data.success);
          if(data.success == "true"){
            this.router.navigate(['/status']);
          }else{
            alert("บันทึกข้อมูลไม่สำเร็จ")
          }
        });
    } else {
    }

  }


  getback(): void {
    this.router.navigate(['/checkcard/'+this.user]);
  }
}
