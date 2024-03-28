import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncluirPublicacaoComponent } from './incluir-publicacao.component';

describe('IncluirPublicacaoComponent', () => {
  let component: IncluirPublicacaoComponent;
  let fixture: ComponentFixture<IncluirPublicacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IncluirPublicacaoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IncluirPublicacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
