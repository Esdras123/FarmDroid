import {Injectable} from '@angular/core';
import { FarmService } from './farm.service';

@Injectable()
export class DonneeService extends FarmService {
  suffix = "donnee";
}

