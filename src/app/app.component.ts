import { Component } from '@angular/core';
import { FormArray } from './interfaces/form-array.interface';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  formArray = FORM_ARRAY;
}

export const FORM_ARRAY: FormArray[] = [
  {
    "field": "name",
    "label": "Name",
    "type": "text",
    "hidden": "false",
    "mandatory": true
  },
  {
    "field": "email",
    "label": "Email",
    "type": "text",
    "hidden": "false",
    "mandatory": true
  },
  {
    "field": "confirm",
    "label": "Checkbox with confirmation",
    "type": "check",
    "hidden": "false",
  },
  {
    "field": "hiddenField",
    "label": "",
    "type": "text",
    "hidden": "true",
    "mandatory": false
  }
]
