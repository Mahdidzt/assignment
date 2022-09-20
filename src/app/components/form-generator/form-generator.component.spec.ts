import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FORM_ARRAY } from 'src/app/app.component';

import { FormGeneratorComponent } from './form-generator.component';

describe('FormGeneratorComponent', () => {
  let component: FormGeneratorComponent;
  let fixture: ComponentFixture<FormGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormGeneratorComponent, NoopAnimationsModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormGeneratorComponent);
    component = fixture.componentInstance;
    component.formArray = FORM_ARRAY;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form invalid when empty', () => {
    expect(component.formGroup.valid).toBeFalsy();
  });

  it('should the size of formArray equal the size of formGroup', () => {
    expect(component.formArray.length).toEqual(Object.keys(component.formGroup.controls).length);
  })


  it('should render input elements', () => {
    const compiled = fixture.debugElement.nativeElement;
    const nameInput = compiled.querySelector('input[id="name"]');
    const emailInput = compiled.querySelector('input[id="email"]');
    const confirmInput = fixture.debugElement.query(By.css('#confirm'));

    expect(nameInput).toBeTruthy();
    expect(emailInput).toBeTruthy();
    expect(confirmInput).toBeTruthy();
  });

  it('should test form validity', () => {
    const form = component.formGroup;
    expect(form.valid).toBeFalsy();

    const nameInput = form.controls['name'];
    const emailInput = form.controls['email'];
    nameInput.setValue('Mahdi Rezazadeh');
    emailInput.setValue('m@gmail.com');

    expect(form.valid).toBeTruthy();
  })

  it('should test input errors', () => {
    const nameInput = component.formGroup.controls['name'];
    expect(nameInput?.hasError('required')).toBeTruthy();

    nameInput.setValue('Mahdi Rezazadeh');
    expect(nameInput.errors).toBeNull();
  });

  it('should hidden field not show', () => {
    const compiled = fixture.debugElement.nativeElement;
    const hiddenField = compiled.querySelector('input[id="hiddenField"]');
    expect(hiddenField).toBeTruthy();
    expect(hiddenField.hasAttribute('hidden')).toBeTruthy();
  })

  it('should markAllAsTouched when form invalid on submit button click', () => {
    const compiled = fixture.debugElement.nativeElement;
    const submitButton = compiled.querySelector('button[type="submit"]');
    submitButton.click();
    expect(component.formGroup.touched).toBeTruthy();
  })



});
