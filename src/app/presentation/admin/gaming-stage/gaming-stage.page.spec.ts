import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SERVICE_PROVIDERS } from '@config/service-providers/service-provider.config';
import { GetCardListUseCase } from '@core/cards/use-cases/get-card-list.use-case';
import { GetNicknameUseCase } from '@core/nickname/use-cases/get-nickname.use-case';
import { SetNicknameUseCase } from '@core/nickname/use-cases/set-nickname.use-case';

import { GamingStagePage } from './gaming-stage.page';

describe('GamingStagePage', () => {
  let component: GamingStagePage;
  let fixture: ComponentFixture<GamingStagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GamingStagePage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        SERVICE_PROVIDERS,
        GetNicknameUseCase,
        SetNicknameUseCase,
        GetCardListUseCase,
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamingStagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
