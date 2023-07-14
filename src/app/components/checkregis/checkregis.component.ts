import { Component } from '@angular/core';
import { ApiImplementsFunctionCheckService } from '../functions/implement-function';
import { Router } from '@angular/router';
import { CheckCardService } from 'src/app/services/checkcard.service';
import { GetApiService } from 'src/app/services/getApi.service';

@Component({
  selector: 'app-checkregis',
  templateUrl: './checkregis.component.html',
  styleUrls: ['./checkregis.component.scss']
})
export class CheckregisComponent {
  public idcard: string = '';
  public txt: string = '';
  public txt2: string = '';
  public checkinput: boolean = false;
  public validateinput: boolean = true;
  public txtwarn: string ='';
  constructor(
    private router: Router,
    private fn: ApiImplementsFunctionCheckService,
    private apicheckCard: CheckCardService,
    private apiGet: GetApiService,
  ) {}

  ngOnInit(): void {}



  async checkInp() {
    if (this.idcard.length > 12) {
      this.checkinput = true;
      this.validateinput = this.fn.validNationalID(this.idcard);
      if (this.validateinput) {
          this.apiGet.checkRegisStatus(this.idcard).subscribe((data: any) => {
          if (data.success) {
            if (data.results) {
              sessionStorage.setItem('uid', btoa(this.idcard));
              this.router.navigate(['/select']);
            } else {
                this.txtwarn = 'เลขบัตรประจำตัวประชาชน '+ this.idcard +' นี้ ได้ทำการสมัครแล้ว กรุณาตรวจสอบสถานะการสมัคร'
            }
          } else {
              alert('ทำรายการไม่สำเร็จ')
          }
        });
      }

    } else {
      this.checkinput = true;
    }
  }

  onCheckInp() {
    if (this.idcard) {
      this.validateinput = this.fn.validNationalID(this.idcard);
      this.checkinput = false;
    } else {
      this.validateinput = true;
      this.checkinput = false;
    }
  }

  clearInp(): void {
    this.idcard = '';
    this.validateinput = true;
    this.checkinput = false;
  }

}
