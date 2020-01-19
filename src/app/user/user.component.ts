import { Component, OnInit } from '@angular/core';
import { Administrateur } from 'app/models/administrateur';
import { AdminLayoutComponent } from 'app/layouts/admin-layout/admin-layout.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: Administrateur;
  constructor() {
    this.user = AdminLayoutComponent.userCourant;
   }

  ngOnInit() {
  }

}
