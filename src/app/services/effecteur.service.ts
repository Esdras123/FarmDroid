import {Injectable} from '@angular/core';
import { FarmService } from './farm.service';

@Injectable()
export class EffecteurService extends FarmService {
  suffix = "effecteur";
}

