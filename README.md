# SpacexProgram

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## CI Build and Deployment

`spacex-program-ci.yml` is created under .github/workflows for CI suite.

1. CI checks include isntalling package.json , running test cases and checking for Lint Errors.

2. Once the CI suite is passed, deployment process gets triggered automatically in Heroku. It is configured in such a way if it   fails deployment doesn't gets triggered.

## Responsive Behaviour

Pure CSS is used to develop the responsive application.

1. Screen size until 699px is considered as Mobile View (Full-Screen View one card per row).

2. Screen size from 700px to 1024px is considered as Tablet View (Two cards per row).

3. Screen size greater than 1025px is considered as Desktop View (Four cards per row).

## Application Behaviour

1. For images, links that are in the API response are not accessible. So, is the reason I have placed an image by myself (sample one referring to Google).

2. Filters are group of radio buttons (Year as a Group, Landing as a Group, Launching as a Grouup). Only one can be selected in a single group. As the API is accepting only single value for each group I have made them as Radio buttons.