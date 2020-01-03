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
  title = 'markdown-preview';
  defaultText = `
  # H1 Header
  ## H2 Sub Header
  [My Link](http://www.sourcecodesamurai.com)
  \`inline code (I think)\`
  \`\`\`
   Attempt at a Code Block
   \`\`\`

   - List Item

   **Bolded Text**
  `;

previewText = this.parseMarkDownText(this.defaultText);

constructor() {
  let opts: MarkedOptions ;
  opts = Object.assign ({
    gfm: true,
    breaks: true
  }, opts);
  setOptions(opts);
}

ngOnChanges() {}



parseMarkDownText(input: string): string {
  return parse(this.defaultText);
}

  form = new FormGroup({});
  model = { defaultText: this.defaultText } ;
  label = this.defaultText ;
  fields: FormlyFieldConfig[] = [{
    key: 'editor',
    type: 'textarea',
    id: 'editor',
    templateOptions: {
      placeholder: this.defaultText,
   //   appearance: 'fill'
    }
  }];
}
