import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-regis-success',
  templateUrl: './regis-success.component.html',
  styleUrls: ['./regis-success.component.scss']
})
export class RegisSuccessComponent implements OnInit {
  constructor(public router: Router) {}
  ngOnInit(): void {
    setTimeout(() => {
        this.router.navigate(['/checkregis']);
    }, 2000);
  }
}
