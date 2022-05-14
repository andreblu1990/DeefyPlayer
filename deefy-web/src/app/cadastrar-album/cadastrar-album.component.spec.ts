import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarAlbumComponent } from './cadastrar-album.component';

describe('CadastrarAlbumComponent', () => {
  let component: CadastrarAlbumComponent;
  let fixture: ComponentFixture<CadastrarAlbumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarAlbumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
