import {Injectable} from '@angular/core';
import { FarmService } from './farm.service';

@Injectable()
export class NoeudMaitreService extends FarmService {
  suffix = "noeudmaitre";
}

