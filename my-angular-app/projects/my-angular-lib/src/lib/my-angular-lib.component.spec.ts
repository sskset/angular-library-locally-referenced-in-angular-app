import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAngularLibComponent } from './my-angular-lib.component';

describe('MyAngularLibComponent', () => {
  let component: MyAngularLibComponent;
  let fixture: ComponentFixture<MyAngularLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyAngularLibComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyAngularLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
