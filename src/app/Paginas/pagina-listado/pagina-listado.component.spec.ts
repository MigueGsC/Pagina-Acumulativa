import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaListadoComponent } from './pagina-listado.component';

describe('PaginaListadoComponent', () => {
  let component: PaginaListadoComponent;
  let fixture: ComponentFixture<PaginaListadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaListadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
