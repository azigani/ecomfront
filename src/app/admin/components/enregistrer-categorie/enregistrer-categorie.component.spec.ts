import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnregistrerCategorieComponent } from './enregistrer-categorie.component';

describe('EnregistrerCategorieComponent', () => {
  let component: EnregistrerCategorieComponent;
  let fixture: ComponentFixture<EnregistrerCategorieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnregistrerCategorieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnregistrerCategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
