import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LlistaEntrenamentsComponent } from './llista-entrenaments.component';

describe('LlistaEntrenamentsComponent', () => {
  let component: LlistaEntrenamentsComponent;
  let fixture: ComponentFixture<LlistaEntrenamentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LlistaEntrenamentsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LlistaEntrenamentsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
