import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppModule } from 'src/app/app.module';
import { AlertComponent } from './alert.component';
import { AlertService } from './alert.service';

describe('AlertComponent', () => {
  let component: AlertComponent;
  let fixture: ComponentFixture<AlertComponent>;
  let service: AlertService;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [AppModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertComponent);
    service = new AlertService();
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('show alert', () => {
    const alertComponent = new AlertComponent(service);
    alertComponent.ngOnInit()
    const message = 'Mensagem de teste';
    service.show(message);
    expect(alertComponent.message).toEqual(message);
  });
});
