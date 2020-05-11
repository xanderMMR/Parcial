import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocioListComponent } from './socio-list.component';

describe('SocioListComponent', () => {
  let component: SocioListComponent;
  let fixture: ComponentFixture<SocioListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocioListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocioListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
