import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentralAcoesComponent } from './central-acoes.component';

describe('CentralAcoesComponent', () => {
  let component: CentralAcoesComponent;
  let fixture: ComponentFixture<CentralAcoesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CentralAcoesComponent]
    });
    fixture = TestBed.createComponent(CentralAcoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
