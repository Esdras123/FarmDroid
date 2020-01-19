import {Injectable} from '@angular/core';
import { FarmService } from './farm.service';

@Injectable()
export class NoeudCollecteurService extends FarmService {
  suffix = "noeudcollecteur";
}

