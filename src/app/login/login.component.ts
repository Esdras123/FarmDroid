import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) { }
username: string;
password: string;
  ngOnInit() {
  }
  login() : void {
    /** bon fandiste voici ce que j ai pu faire concernant l authentification pour les données a envoyer je ne comprends pas bien de quoi il est question
     * et je pense que s il y a des données a envoyer c est le gerant du backend qui est censé réecrire cette methode afin qu'elle leur convienne sinon 
     * j ai juste fait une authentification locale comme tu peux le voir
     */
    if(this.username == 'admin' && this.password == 'admin'){
     this.router.navigate(["enregistreur/user"]);
    }else {
      alert("Invalid credentials");
    }
  }
}