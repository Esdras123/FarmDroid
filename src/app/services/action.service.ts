import {Injectable} from '@angular/core';
import { FarmService } from './farm.service';

@Injectable()
export class ActionService extends FarmService {
  suffix = "action";
}

