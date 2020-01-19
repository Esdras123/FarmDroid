import { Routes } from '@angular/router';

import { HomeComponent } from '../../home/home.component';
import { UserComponent } from '../../user/user.component';
import { HistoriqueComponent } from '../../historique/historique.component';
import { ParamsCultureComponent } from '../../params-culture/params-culture.component';
import { GestionNoeudComponent } from '../../gestion-noeud/gestion-noeud.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: HomeComponent },
    { path: 'user',           component: UserComponent },
    { path: 'historique',           component: HistoriqueComponent },
    { path: 'parametres',           component: ParamsCultureComponent },
    { path: 'gestion',           component: GestionNoeudComponent },
    
];
