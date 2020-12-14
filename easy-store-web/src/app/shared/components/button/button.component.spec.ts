import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppModule } from 'src/app/app.module';
import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [AppModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change button name', () => {
    // Novo estado do componente
    component.label = 'Novo Nome';

    // Utilizado para atualizar o componente de acordo com o padrão estabelecido
    fixture.detectChanges();

    const label = fixture.componentInstance.label;

    expect(label).toEqual('Novo Nome');
  });

  it('should change button theme', () => {
    // Novo estado do componente
    component.theme = 'outline';

    // Utilizado para atualizar o componente de acordo com o padrão estabelecido
    fixture.detectChanges();

    // Recupera a instancia do componente com os estados atualizados
    const instace = fixture.componentInstance;

    expect(instace.theme).toEqual('outline');
  });

  it('should be disabled', () => {
    // Novo estado do componente
    component.disabled = true;

    // Utilizado para atualizar o componente de acordo com o padrão estabelecido
    fixture.detectChanges();

    // Recupera a instancia do componente com os estados atualizados
    const instace = fixture.componentInstance;

    expect(instace.disabled).toBeTrue();
  });

  it('should be loading state', () => {
    // Novo estado do componente
    component.isLoading = true;

    // Utilizado para atualizar o componente de acordo com o padrão estabelecido
    fixture.detectChanges();

    // Recupera a instancia do componente com os estados atualizados
    const instace = fixture.componentInstance;

    expect(instace.isLoading).toBeTrue();
  });

  it('should change loading label', () => {
    // Novo estado do componente
    component.labelLoading = 'Carregando...';
    component.isLoading = true;

    // Utilizado para atualizar o componente de acordo com o padrão estabelecido
    fixture.detectChanges();

    // Recupera a instancia do componente com os estados atualizados
    const instace = fixture.componentInstance;

    expect(instace.labelLoading).toEqual('Carregando...');
  });

  it('should be get correct loading theme (light)', () => {
    // Novo estado do componente
    component.theme = 'primary';

    // Utilizado para atualizar o componente de acordo com o padrão estabelecido
    fixture.detectChanges();

    // Recupera a instancia do componente com os estados atualizados
    const instace = fixture.componentInstance;

    expect(instace.loadingTheme).toEqual('light');
  });

  it('should be get correct loading theme (primary)', () => {
    // Novo estado do componente
    component.theme = 'outline';

    // Utilizado para atualizar o componente de acordo com o padrão estabelecido
    fixture.detectChanges();

    // Recupera a instancia do componente com os estados atualizados
    const instace = fixture.componentInstance;

    expect(instace.loadingTheme).toEqual('primary');
  });
});
