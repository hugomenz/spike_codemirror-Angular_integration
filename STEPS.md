# Using CodeMirror with Angular

## Package installation

Since the last version of ngx-codemirror (6.0.0) only supports Angular 15.0.0-0, we could install the previous version of ngx-codemirror (5.1.1).

codemirror is a peer dependency and must also be installed

`npm install @ctrl/ngx-codemirror@5.1.1 codemirror@5`

## 1. Use

Import CodemirrorModule and FormsModule and bring in the codemirror files for parsing the language you wish to use.

In your NgModule:

```javascript
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';

  // add to imports:
  imports: [
    BrowserModule,
    FormsModule,
    CodemirrorModule,
    ...
  ]
```

In your main.ts or at the root of your application

```javascript
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/markdown/markdown";
```

Use the component in `app.component.html`

```javascript
  <ngx-codemirror
    #codemirror
    [options]="codeMirrorOptions"
    [(ngModel)]="obj"
    (ngModelChange)="setEditorContent($event)"
  >
  </ngx-codemirror>
```

An example of codeMirrorOptions

```javascript
codeMirrorOptions: any = {
  theme: "idea",
  mode: "application/ld+json",
  lineNumbers: true, // Whether to show line numbers to the left of the editor
  lineWrapping: true, // Whether CodeMirror should scroll or wrap for long lines.
  foldGutter: true,
  gutters: [
    // Should be an array of CSS class names
    "CodeMirror-linenumbers",
    "CodeMirror-foldgutter",
    "CodeMirror-lint-markers",
  ],
  autoCloseBrackets: true,
  matchBrackets: true, // causes matching brackets to be highlighted whenever the cursor is next to them
  lint: true, // Defines an interface component for showing linting warnings, with pluggable warning sources
  // see https://codemirror.net/3/addon/lint/json-lint.js
};
```

## Styles

<a href="https://codemirror.net/3/doc/manual.html#styling">Check the official documentation for more</a>

<a href="https://codemirror.net/examples/styling/">Example: Styling</a>

Import the base css file in `styles.(s)css`

```css
@import "~codemirror/lib/codemirror";
@import "~codemirror/theme/material";
```

**sizing** the codemirror container should be done using the class CodeMirror in `styles.(s)css`

For example, CodeMirror is the outer element of the editor. This should be used for the editor width, height, borders and positioning. Can also be used to set styles that should hold for everything inside the editor (such as font and font size), or to set a background.

```scss
.CodeMirror {
  // 80vh is just an example
  // you can use px, rem and so one.
  height: 80vh;
}
```
