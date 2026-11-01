import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EtiquetaEntrenamentComponent } from './etiqueta-entrenament.component';

describe('EtiquetaEntrenamentComponent', () => {
  let component: EtiquetaEntrenamentComponent;
  let fixture: ComponentFixture<EtiquetaEntrenamentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EtiquetaEntrenamentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EtiquetaEntrenamentComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
