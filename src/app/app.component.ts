import { Component, OnChanges, ViewChild, ElementRef, ViewContainerRef, AfterViewInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

import { MarkedOptions, setOptions, parse } from 'marked';
import { MatCardModule } from '@angular/material/card';

import * as SD from 'sugar';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnChanges, AfterViewInit {

    @ViewChild('preview', { read: ViewContainerRef, static: true }) preview: ViewContainerRef;

    title = 'markdown-preview';
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

    constructor() {
        let opts: MarkedOptions;
        opts = Object.assign({
            gfm: true,
            breaks: true
        }, opts);
        setOptions(opts);
    }

    ngAfterViewInit() {
        // let view = this.tpl.createEmbeddedView(null);
    }



    previewText = this.parseMarkDownText(this.defaultText);

    form = new FormGroup({});
    model = { defaultText: this.defaultText };
    label = 'Enter Text Here';
    fields: FormlyFieldConfig[] = [{
        key: 'editor',
        id: 'editor',
        name: 'editor',
        type: 'textarea',
        templateOptions: {
            rows: 5,
            cols: 50,
            placeholder: this.defaultText,
            // onChange: console.log(this.form.value),
            // onChange: this.previewText = this.parseMarkDownText(this.form.get('editor').value),
            onChange: this.parseMarkDownText('*Markdown Called!'),
        }
    }];


    ngOnChanges() { }



    parseMarkDownText(input: string): string {
        console.log(`A Week from now will be ${new SD.Date().addDays(6).medium()}`);
        console.log('Method Fired');
        return parse(input);
    }
}
