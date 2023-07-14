import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-selectform',
  templateUrl: './selectform.component.html',
  styleUrls: ['./selectform.component.scss']
})
export class SelectformComponent implements OnInit {

  public uid: string = '';
  public majorno: string = '';
  constructor(
    private router: Router,) {

  }

  ngOnInit() {
    this.uid = atob(String(sessionStorage.getItem('uid')));
    // console.log(this.uid);
  }

  selected(): void {
    if (this.uid) {
      if (this.majorno == '02' || this.majorno == '03') {
        sessionStorage.setItem('majorno', this.majorno);
        this.router.navigate(['form02']);
      }else if (this.majorno == '01') {
        sessionStorage.setItem('majorno', this.majorno);
        this.router.navigate(['form01']);
      }

    }
  }

  cancle(): void {
    sessionStorage.removeItem('uid');
    this.router.navigate(['/checkregis']);
  }
}
