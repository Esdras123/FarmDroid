import {Injectable} from '@angular/core';
import { FarmService } from './farm.service';

@Injectable()
export class TypeService extends FarmService {
  suffix = "type";
}

