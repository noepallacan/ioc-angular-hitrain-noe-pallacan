import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TargetaEntrenamentComponent } from './targeta-entrenament.component';

describe('TargetaEntrenamentComponent', () => {
  let component: TargetaEntrenamentComponent;
  let fixture: ComponentFixture<TargetaEntrenamentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TargetaEntrenamentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TargetaEntrenamentComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
