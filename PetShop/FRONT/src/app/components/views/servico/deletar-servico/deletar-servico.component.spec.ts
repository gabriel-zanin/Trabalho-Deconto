import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletarServicoComponent } from './deletar-servico.component';

describe('DeletarServicoComponent', () => {
  let component: DeletarServicoComponent;
  let fixture: ComponentFixture<DeletarServicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletarServicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletarServicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
