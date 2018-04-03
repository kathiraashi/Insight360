import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  ActiveHeader: any = '';

  constructor(private router: Router) {
    this.ActiveHeader = this.router.url;
  }

  ngOnInit() {
  }

  LogOut() {
    localStorage.removeItem('Insight360');
    this.router.navigate(['/']);
  }

}
