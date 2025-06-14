import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserNameComponent } from './user-name.component';

describe('UserNameComponent', () => {
  let component: UserNameComponent;
  let fixture: ComponentFixture<UserNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserNameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
