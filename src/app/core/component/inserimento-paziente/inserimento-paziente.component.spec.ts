import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InserimentoPazienteComponent } from './inserimento-paziente.component';

describe('InserimentoPazienteComponent', () => {
  let component: InserimentoPazienteComponent;
  let fixture: ComponentFixture<InserimentoPazienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InserimentoPazienteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InserimentoPazienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
