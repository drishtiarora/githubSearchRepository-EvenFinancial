# GithubRepoSearch

1. How to run the application
   1) Install the dependencies
        run `npm install`

   2) Run the application on any port number, port number-4200
       run `ng serve --port 4200`.

   3) Open the browser and search for:
      `localhost:4200` 

2. About the Application
   It is a Github Search Repository application which performs search functionality on the basis of data requested by the user. The user fills out a form which takes the following fields:
   a) Text- an input field
   b) Stars- an input field which only takes digits, range(10..30), >=number
   c) License- is a dropdown
   d) Forked- a checkbox 

   Based on the requested data, it creates a url, passes the form value in the url on url creation and fetches the Search Results and displays on the UI.



This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
