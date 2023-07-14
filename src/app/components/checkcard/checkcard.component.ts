import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiImplementsFunctionCheckService } from '../functions/implement-function';
import { CheckCardService } from 'src/app/services/checkcard.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-checkcard',
  templateUrl: './checkcard.component.html',
  styleUrls: ['./checkcard.component.scss'],
})
export class CheckcardComponent implements OnInit {
  public idcard: string = '';
  public txt: string = '';
  public txt2: string = '';
  public checkinput: boolean = false;
  public validateinput: boolean = true;
  public user: any = '';

  constructor(
    private router: Router,
    private fn: ApiImplementsFunctionCheckService,
    private apicheckCard: CheckCardService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.user = this.route.snapshot.paramMap.get('user');
    sessionStorage.setItem('user', this.user );
    console.log(this.user);
  }

  checkInp(): void {
    if (this.idcard.length > 12) {
      this.checkinput = true;
      /* if (this.validateinput) {
        this.apicheckCard.getCheck('1111111111111').subscribe(res => {
          console.log(res);
        });
      } */
      this.apicheckCard.getCheck(this.idcard).subscribe((res: any) => {
        console.log(res['success']);
        if (res['success'] && res['message'] == '1') {
          sessionStorage.setItem('idcard', this.idcard);
          sessionStorage.setItem('fname', res['fname']);
          sessionStorage.setItem('lname', res['lname']);
          sessionStorage.setItem('major', res['major']);
          sessionStorage.setItem('majorno', res['majorno']);
          sessionStorage.setItem('prename', res['prename_no']);
          if (res['rec'][0]) {
            sessionStorage.setItem('rec', JSON.stringify(res['rec'][0]));
            this.router.navigate(['addregis']);
          } else {
            //sessionStorage.setItem('idcard',this.idcard);
            sessionStorage.setItem('rec', '');
          }
        } else if (res['success'] && res['message'] == '2') {
          sessionStorage.setItem('idcard', this.idcard); 
          if (res['rec'][0]) {
            sessionStorage.setItem('rec', JSON.stringify(res['rec'][0]));
            this.router.navigate(['addregis']);
          } else {
            //sessionStorage.setItem('idcard',this.idcard);
            sessionStorage.setItem('rec', '');
          }
          this.router.navigate(['addregis']);
        } else {
          alert('Error');
        }
      });

      // sessionStorage.setItem('idcard','11111111');
    } else {
      this.checkinput = true;
    }
  }

  onCheckInp() {
    if (this.idcard) {
      this.validateinput = this.fn.validNationalID(this.idcard);
      this.checkinput = false;
    } else {
      this.validateinput = false;
    }
  }

  clearInp(): void {
    this.idcard = '';
  }

  doBeforeClose(): void {
    // Clear localStorage
    window.self.close();
  }
}
