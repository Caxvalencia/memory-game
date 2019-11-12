import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SessionService } from '@shared/services/session.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {

  public homeForm: FormGroup;

  private unsubscribe$ = new Subject<void>();

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private sessionService: SessionService
  ) {
    this.homeForm = this.formBuilder.group({
      nickname: [
        '',
        [
          Validators.required,
          Validators.maxLength(20)
        ]
      ],
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  onSubmit(data: any) {
    this.sessionService.setNickname(data.nickname)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(response => {
        if (response) {
          this.router.navigate(['admin']);
        }
      });
  }

  get nickname() {
    return this.homeForm.get('nickname');
  }
}
