import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree
} from '@angular/router';

import { SessionService } from '../services/session/session.service';

@Injectable({
  providedIn: 'root'
})
export class HasNicknameGuard implements CanActivate {

  constructor(private router: Router, private sessionService: SessionService) {
  }

  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean | UrlTree> {
    const hasNickname = await this.sessionService.getNickname();

    console.log(hasNickname);

    if (hasNickname) {
      return true;
    }

    this.router.navigate(['home']);

    return false;
  }
}
