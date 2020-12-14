import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppModule } from 'src/app/app.module';
import { SVGComponent } from './svg.component';

describe('SVGComponent', () => {
  let component: SVGComponent;
  let fixture: ComponentFixture<SVGComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [AppModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SVGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
