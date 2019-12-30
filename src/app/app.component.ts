import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'markdown-preview';
  defaultText = `
  *Default Text
  `;

  form = new FormGroup({});
  model = { defaultText: this.defaultText};
  fields: FormlyFieldConfig[] = [{
    key: 'preview',
    type: 'textarea',
    templateOptions: {
      placeholder: this.defaultText,
    }
  }];
}
