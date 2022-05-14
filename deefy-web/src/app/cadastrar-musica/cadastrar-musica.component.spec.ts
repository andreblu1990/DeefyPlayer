import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarMusicaComponent } from './cadastrar-musica.component';

describe('CadastrarMusicaComponent', () => {
  let component: CadastrarMusicaComponent;
  let fixture: ComponentFixture<CadastrarMusicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarMusicaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarMusicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
