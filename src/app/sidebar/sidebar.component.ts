import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string; 
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Tableau de bord',  icon:'pe-7s-user', class: '' },
    { path: '/parametres', title: 'Paramétrage de la Culture',  icon:'pe-7s-note2', class: '' },
    { path: '/gestion', title: 'Gestion des noeuds',  icon:'pe-7s-note2', class: '' },
    { path: '/historique', title: 'Historique',  icon:'pe-7s-note2', class: '' },
    { path: '/user', title: 'Profil Utilisateur',  icon:'pe-7s-user', class: '' },
    
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
