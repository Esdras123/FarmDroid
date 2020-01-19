import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LbdModule } from '../../lbd/lbd.module';

import { MatDialogModule } from '@angular/material/dialog';

import { AdminLayoutRoutes } from './admin-layout.routing';

import { HomeComponent } from '../../home/home.component';
import { UserComponent } from '../../user/user.component';
import { ParamsCultureComponent } from 'app/params-culture/params-culture.component';
import { HistoriqueComponent } from 'app/historique/historique.component';
import { GestionNoeudComponent } from 'app/gestion-noeud/gestion-noeud.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    LbdModule,
    MatDialogModule,
    FormsModule,
  ],
  declarations: [
    HomeComponent,
    UserComponent,
    ParamsCultureComponent,
    HistoriqueComponent,
    GestionNoeudComponent,
  ]
})

export class AdminLayoutModule {}
