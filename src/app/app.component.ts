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
    opts: MarkedOptions;
    form: FormGroup;
    fields: FormlyFieldConfig[];

    defaultText = `
  # H1 Header
  ## H2 Sub Header
  [My Link](http://www.sourcecodesamurai.com)

   - List Item

   __Bolded Text__
   \`\`\`
Code Block Example
\`\`\`

\`Inline Code Block Example\`
> This is blockquote line 1
> This is blockquote line 2
![Cara](https://green-party.s3-us-west-2.amazonaws.com/Cara+Logo+v4.png)
  `;

 previewText = this.parseMarkDownText(this.defaultText);

    ngOnInit() {
        this.form = new FormGroup({});
        this.fields = [{
            key: 'editor',
            id: 'editor',
            name: 'editor',
            type: 'textarea',
            defaultValue: this.defaultText,
            templateOptions: {
                rows: 5,
                cos: 50,
                keyup: (field, $event)=>{ 
                    this.previewText = this.parseMarkDownText(field.form.controls.editor.value);
                },
            }
        }];
    }

    parseMarkDownText(input: string): string {
        return parse(input, {gfm: true, breaks: true});
    }
}
