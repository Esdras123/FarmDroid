import {Injectable} from '@angular/core';
import { FarmService } from './farm.service';

@Injectable()
export class CultureService extends FarmService {
  suffix = "culture";
}

