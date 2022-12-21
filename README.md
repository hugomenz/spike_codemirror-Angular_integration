# Using CodeMirror with Angular

CodeMirror is a code editor component for the web. It can be used in websites to implement a text input field with support for many editing features, and has a rich programming interface to allow further extension.

It can be easily integrated into an Angular application using **ngx-codemirror**. It's an angular component wrapper for CodeMirror. In these steps, we will go through the steps needed to use CodeMirror with Angular.

## Package installation

We need to install the `@ctrl/ngx-codemirror` package. This package provides an Angular component that wraps around the CodeMirror editor. Additionally, we also need to install the codemirror package, which is a peer dependency of `@ctrl/ngx-codemirror`

We can install both packages using the following command:
`npm install @ctrl/ngx-codemirror codemirror`

Note that the latest version of @ctrl/ngx-codemirror (6.0.0) only supports Angular 15.0.0-0. If you are using a different version of Angular, you can install the previous version of @ctrl/ngx-codemirror (5.1.1) instead.
`npm install @ctrl/ngx-codemirror@5.1.1 codemirror@5`

## Use

To use the CodeMirror component in our Angular application, we need to first import the CodemirrorModule and FormsModule in our NgModule. We also need to bring in the necessary codemirror files for parsing the language that we want to use.

In our NgModule:

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

In the main entry point of our application (e.g. `main.ts`), we can import the necessary language files for CodeMirror.

```javascript
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/markdown/markdown";
```

Then, we can use the `ngx-codemirror` component in our template (e.g. `app.component.html`):

```javascript
  <ngx-codemirror
    #codemirror
    [options]="codeMirrorOptions"
    [(ngModel)]="obj"
    (ngModelChange)="setEditorContent($event)"
  >
  </ngx-codemirror>
```

Here, `codeMirrorOptions` is an object that contains the configuration options for the CodeMirror editor. Some possible options include `theme`, `mode`, `lineNumbers`, `lineWrapping`, `foldGutter`, `gutters`, `autoCloseBrackets`, `matchBrackets`, and `lint`.

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

> For further information, please refer to the official _[documentation](https://codemirror.net/3/doc/manual.html#styling)_.

> For styling examples, please see the following _[styling examples](https://codemirror.net/examples/styling/)_.

To style the CodeMirror editor, we can import the necessary base CSS files in our stylesheet (e.g. `styles.scss`):

```css
@import "~codemirror/lib/codemirror";
@import "~codemirror/theme/material";
```

We can also use the `.CodeMirror` class in our stylesheet to size the CodeMirror container. For example:

```scss
.CodeMirror {
  // 80vh is just an example
  // you can use px, rem and so one.
  height: 80vh;
}
```

CodeMirror is the outer element of the editor. This should be used for the editor width, height, borders and positioning. Can also be used to set styles that should hold for everything inside the editor (such as font and font size), or to set a background.

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

> Why did the JavaScript developer wear glasses?
> Because he couldn't C#! 🤓
