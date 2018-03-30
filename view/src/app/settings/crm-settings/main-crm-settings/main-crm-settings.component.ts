import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-crm-settings',
  templateUrl: './main-crm-settings.component.html',
  styleUrls: ['./main-crm-settings.component.css']
})
export class MainCrmSettingsComponent implements OnInit {

  activeTab: any = 0;

  constructor() { }

  ngOnInit() {
  }

  handleChange(e) {
    this.activeTab = e.index;
  }

}
