import { TestBed } from '@angular/core/testing';
import { SERVICE_PROVIDERS } from '@config/service-providers/service-provider.config';
import { GetNicknameUseCase } from '@core/nickname/use-cases/get-nickname.use-case';
import { SetNicknameUseCase } from '@core/nickname/use-cases/set-nickname.use-case';

import { SessionService } from './session.service';

describe('SessionService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      SERVICE_PROVIDERS,
      GetNicknameUseCase,
      SetNicknameUseCase,
    ]
  }));

  it('should be created', () => {
    const service: SessionService = TestBed.get(SessionService);
    expect(service).toBeTruthy();
  });

  it('setNickname should store nickname in session', () => {
    const service: SessionService = TestBed.get(SessionService);

    service.setNickname('nickname-testian').subscribe(result => {
      expect(result).toBeTruthy();
    });
  });

  it('setNickname shouldn\'t store nickname in session', () => {
    const service: SessionService = TestBed.get(SessionService);

    service.setNickname('nick-error').subscribe(result => {
      expect(result).toBeFalsy();
    });
  });
});
