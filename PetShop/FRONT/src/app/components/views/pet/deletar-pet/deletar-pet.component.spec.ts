import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletarPetComponent } from './deletar-pet.component';

describe('DeletarPetComponent', () => {
  let component: DeletarPetComponent;
  let fixture: ComponentFixture<DeletarPetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletarPetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletarPetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
