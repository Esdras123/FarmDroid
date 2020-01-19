import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routing';
import { NavbarModule } from './shared/navbar/navbar.module';
import { SidebarModule } from './sidebar/sidebar.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

import { UserStoreService } from './services/user-store.service';
import { AuthGuardService } from './services/auth-guard.service';
import { BdlocaleService } from './services/bdlocale.service';
import { ParametrageService } from './services/parametrage.service';

import {ReactiveFormsModule} from '@angular/forms';

import { ActionService } from './services/action.service';
import { AdministrateurService } from './services/administrateur.service';
import { CapteurService } from './services/capteur.service';
import { CultureService } from './services/culture.service';

import { DonneeService } from './services/donnee.service';
import { EffecteurActionService } from './services/effecteur-action.service';
import { EffecteurService } from './services/effecteur.service';
import { EvenementService } from './services/evenement.service';
import { NoeudCollecteurService } from './services/noeud-collecteur.service';
import { NoeudMaitreService } from './services/noeud-maitre.service';
import { TypeService } from './services/type.service';

import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material';
import { ParamsCultureComponent } from './params-culture/params-culture.component';
import { GestionNoeudComponent } from './gestion-noeud/gestion-noeud.component';
import { HistoriqueComponent } from './historique/historique.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    NavbarModule,
    SidebarModule,
    AppRoutingModule,
    ReactiveFormsModule, // Preferables aux template driven forms
    BrowserAnimationsModule,
    HttpClientModule,
    MatDialogModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatSortModule,
    MatTableModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatSelectModule,
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    LoginComponent,
  ],
  providers: [
    UserStoreService,
    AuthGuardService,
    BdlocaleService,
    ActionService,
    AdministrateurService,
    CapteurService,
    CultureService,
    DonneeService,
    EffecteurActionService,
    EffecteurService,
    EvenementService,
    NoeudCollecteurService,
    NoeudMaitreService,
    TypeService,
    ParametrageService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
