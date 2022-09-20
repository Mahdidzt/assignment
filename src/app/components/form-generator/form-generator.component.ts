import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { FormArray } from 'src/app/interfaces/form-array.interface';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';




@Component({
  selector: 'app-form-generator',
  standalone: true,
  imports: [ CommonModule, ReactiveFormsModule, MatInputModule, MatCheckboxModule],
  templateUrl: './form-generator.component.html',
  styleUrls: ['./form-generator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormGeneratorComponent implements OnInit {
  @Input() formArray: FormArray[];

  formGroup: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.generateFormGroup();
  }


  generateFormGroup() {
    let group: { [key: string]: FormControl<string | null> } = {}
    this.formArray.forEach((formArrayItem) => {
      group[formArrayItem.field] = new FormControl(null, formArrayItem.mandatory ? [Validators.required] : []);
    })
    this.formGroup = new FormGroup(group);
  }

  get f() {
    return this.formGroup.controls;
  }

  onSubmit() {
    if (this.formGroup.invalid) {
      this.formGroup.markAllAsTouched();
      return;

    }
    console.log('Form submitted !!!!!!!!!!');
    console.log(this.formGroup.value);

  }

}
