import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TargetaEntrenamentComponent } from './targeta-entrenament.component';
import type { Entrenament } from '../../models/entrenament.model';

describe('TargetaEntrenamentComponent', () => {
  let component: TargetaEntrenamentComponent;
  let fixture: ComponentFixture<TargetaEntrenamentComponent>;
  // Entrenament de prova per al component
  const entrenamentProva: Entrenament = {
    id: 'ent-001',
    nom: 'Tècnica al sac',
    descripcio: 'Combinacions de boxa i desplaçaments laterals',
    categoria: 'Boxa',
    data: '2026-10-25',
    duradaMinuts: 60,
    destacat: true,
    ubicacio: null,
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TargetaEntrenamentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TargetaEntrenamentComponent);
    component = fixture.componentInstance;

    fixture.componentRef.setInput('entrenament', entrenamentProva);

    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
