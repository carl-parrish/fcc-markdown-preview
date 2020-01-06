import { Component, OnChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

import { MarkedOptions, setOptions, parse } from 'marked';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnChanges {

constructor() {
  let opts: MarkedOptions ;
  opts = Object.assign ({
    gfm: true,
    breaks: true
  }, opts);
  setOptions(opts);
}
  title = 'markdown-preview';
  defaultText = `
  # H1 Header
  ## H2 Sub Header
  [My Link](http://www.sourcecodesamurai.com)

   - List Item

   *Bolded Text*
   \`\`\`Code Example \`\`\`
  `;

previewText = this.parseMarkDownText(this.defaultText);

  form = new FormGroup({});
  model = { defaultText: this.defaultText } ;
  label = 'Enter Text Here' ;
  fields: FormlyFieldConfig[] = [{
    key: 'editor',
    id: 'editor',
    name: 'editor',
    type: 'textarea',
    templateOptions: {
      placeholder: this.defaultText,
      onChange: 'this.previewText = this.parseMarkDownText(this.form.get("editor").value);',
   //   appearance: 'fill'
    }
  }];


ngOnChanges() {}



parseMarkDownText(input: string): string {
  console.log('Method Fired');
  return parse(input);
}
}
