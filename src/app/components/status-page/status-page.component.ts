import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-status-page',
  templateUrl: './status-page.component.html',
  styleUrls: ['./status-page.component.scss'],
})

export class StatusPageComponent implements OnInit {
  public user="";
  constructor(public router: Router) {}
  ngOnInit(): void {
    this.user = String(sessionStorage.getItem('user'));
    setTimeout(() => {
        this.router.navigate(['/checkcard/'+this.user]);
    }, 3000);
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
}
