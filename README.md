# Xello

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.3.

# To View Project
1. git clone repo
2. npm i  *(NOTE: you should have node 8 upwards)*
3. ng serve

# Project Description

A configurable tool tip that accepts 2 parameters.
```
<app-tooltip [state]="{show: true}"
             [text]="Text to be displayed">
</app-tooltip>
```
```state : Object```
Accepts an object literal and displays or hides if the property ```show``` is truthy or falsey.

```text : String```
Displays a string or a dummy text if string is empty.
