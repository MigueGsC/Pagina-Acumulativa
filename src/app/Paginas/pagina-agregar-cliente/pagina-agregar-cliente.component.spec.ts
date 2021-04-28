import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaAgregarClienteComponent } from './pagina-agregar-cliente.component';

describe('PaginaAgregarClienteComponent', () => {
  let component: PaginaAgregarClienteComponent;
  let fixture: ComponentFixture<PaginaAgregarClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaAgregarClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaAgregarClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
