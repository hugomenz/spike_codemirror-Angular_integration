import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  codeMirrorOptions: any = {
    theme: 'idea',
    mode: 'application/ld+json',
    lineNumbers: true, // Whether to show line numbers to the left of the editor
    lineWrapping: true, // Whether CodeMirror should scroll or wrap for long lines.
    foldGutter: true,
    gutters: [
      // Should be an array of CSS class names
      'CodeMirror-linenumbers',
      'CodeMirror-foldgutter',
      'CodeMirror-lint-markers',
    ],
    autoCloseBrackets: true,
    matchBrackets: true, // causes matching brackets to be highlighted whenever the cursor is next to them
    lint: true, // Defines an interface component for showing linting warnings, with pluggable warning sources
    // see https://codemirror.net/3/addon/lint/json-lint.js
  };

  obj: any;

  ngOnInit() {
    // Example using a specific JSON structure when the component is mounted

    /*     this.obj= JSON.stringify({
      "$schema": "http://json-schema.org/draft-07/schema#",
      "type": "object",
      "title": "Object",
      "additionalProperties": false,
      "properties": {
        "string": {
          "type": "string",
          "title": "String"
        }
      }
    }, null, ' '); */

    // For this example we will use just an empty string.
    this.obj = '';
  }
  setEditorContent(event: any) {
    //console.log(event, typeof event);
    console.log(this.obj);
  }
}
