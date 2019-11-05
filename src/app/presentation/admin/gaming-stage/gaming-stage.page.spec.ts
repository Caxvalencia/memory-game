import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamingStagePage } from './gaming-stage.page';

describe('GamingStagePage', () => {
  let component: GamingStagePage;
  let fixture: ComponentFixture<GamingStagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamingStagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
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
