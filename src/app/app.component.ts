import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

import { MarkedOptions, setOptions, parse } from 'marked';
import { MatCardModule } from '@angular/material/card';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {


    title = 'markdown-preview';
    opts:MarkedOptions;
    form: FormGroup;
    fields: FormlyFieldConfig[];

    defaultText = `
  # H1 Header
  ## H2 Sub Header
  [My Link](http://www.sourcecodesamurai.com)

   - List Item

   *Bolded Text*
   \`\`\`
Code Block Example
\`\`\`

\`Inline Code Block Example\`
  `;

    constructor() { }

   ngOnInit() {
       this.form = new FormGroup({});
        model = {};
    label = 'Enter Text Here';
    this.fields = [{
        key: 'editor',
        id: 'editor',
        name: 'editor',
        type: 'textarea',
        templateOptions: {
            rows: 5,
            cols: 50,
            placeholder: '',
            onChange: console.log('Value Changed'),
            // onChange: this.previewText = this.parseMarkDownText(this.form.get('editor').value),
            // onChange: this.parseMarkDownText('*Markdown Called!'),
        }
    }];
       this.opts = Object.assign({
            gfm: true,
            breaks:true
       }, this.opts);
   }


    previewText = this.parseMarkDownText(this.defaultText);

    parseMarkDownText(input: string): string {
        console.log('Method Fired');
        return parse(input);
    }
}
