import { Injectable } from '@angular/core';
import { LANGUAGE_CONFIG } from '@config/lang.config';

@Injectable()
export class AppConfig {
  readonly LANG = LANGUAGE_CONFIG;
}
