import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, FormGroup } from '@angular/forms';
import { AppModule } from 'src/app/app.module';
import { FormLogComponent } from './form-log.component';

describe('FormLogComponent', () => {
  let component: FormLogComponent;
  let fixture: ComponentFixture<FormLogComponent>;

  const form = new FormGroup({
    text: new FormControl('')
  })

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [AppModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormLogComponent);
    component = fixture.componentInstance;
    component.form = form;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
