import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcoesProtoComponent } from './acoes-proto.component';

describe('AcoesProtoComponent', () => {
  let component: AcoesProtoComponent;
  let fixture: ComponentFixture<AcoesProtoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AcoesProtoComponent]
    });
    fixture = TestBed.createComponent(AcoesProtoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
