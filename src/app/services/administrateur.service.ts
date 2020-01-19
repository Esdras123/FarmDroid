import {Injectable} from '@angular/core';
import { FarmService } from './farm.service';

@Injectable()
export class AdministrateurService extends FarmService {
  suffix = "administration";
}

