import {Injectable} from '@angular/core';
import { FarmService } from './farm.service';

@Injectable()
export class EvenementService extends FarmService {
  suffix = "evenement";
}

