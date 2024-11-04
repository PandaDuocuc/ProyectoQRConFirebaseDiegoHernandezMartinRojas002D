import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModeloQrPage } from './modelo-qr.page';

describe('ModeloQrPage', () => {
  let component: ModeloQrPage;
  let fixture: ComponentFixture<ModeloQrPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeloQrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
