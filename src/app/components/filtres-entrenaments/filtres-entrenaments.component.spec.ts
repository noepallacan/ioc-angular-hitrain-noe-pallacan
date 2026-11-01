import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FiltresEntrenamentsComponent } from './filtres-entrenaments.component';

describe('FiltresEntrenamentsComponent', () => {
  let component: FiltresEntrenamentsComponent;
  let fixture: ComponentFixture<FiltresEntrenamentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiltresEntrenamentsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FiltresEntrenamentsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
