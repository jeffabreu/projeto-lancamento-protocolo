import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioProtocoloComponent } from './formulario-protocolo.component';

describe('FormularioProtocoloComponent', () => {
  let component: FormularioProtocoloComponent;
  let fixture: ComponentFixture<FormularioProtocoloComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioProtocoloComponent]
    });
    fixture = TestBed.createComponent(FormularioProtocoloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
