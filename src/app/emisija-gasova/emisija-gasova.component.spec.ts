import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmisijaGasovaComponent } from './emisija-gasova.component';

describe('EmisijaGasovaComponent', () => {
  let component: EmisijaGasovaComponent;
  let fixture: ComponentFixture<EmisijaGasovaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmisijaGasovaComponent]
    });
    fixture = TestBed.createComponent(EmisijaGasovaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
