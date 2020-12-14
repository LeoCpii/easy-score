import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppModule } from 'src/app/app.module';
import { SkeletonLoadingComponent } from './skeleton-loading.component';

describe('SkeletonLoadingComponent', () => {
  let component: SkeletonLoadingComponent;
  let fixture: ComponentFixture<SkeletonLoadingComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [AppModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkeletonLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
