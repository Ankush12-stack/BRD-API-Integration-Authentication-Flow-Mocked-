# BRDAPIIntegrationAuthenticationFlowMocked
BRD – API Integration & Authentication (Angular)\

1. Overview
This project is an Angular-based frontend application that demonstrates API integration, authentication flow, route protection, and error handling using mocked and public APIs, as per the assignment instructions.
The application simulates a real-world login flow with token storage, protected routes, and dashboard data fetching.

2. Business Objective
To simulate a real-world frontend application that:
Authenticates users via API or mocked logic
Stores authentication tokens
Protects routes based on authentication state
Handles API loading and error scenarios gracefully

3. Technology Stack
Category	Technology
Framework	Angular 15
Language	TypeScript
HTTP Client	Angular HttpClient
Routing	Angular Router
State	LocalStorage
APIs Used	FakeStore API, JSONPlaceholder
Tooling	Angular CLI
4. Functional Scope

4.1 Login
Username & Password input
Authentication via FakeStore API
Token stored in localStorage
Loader displayed during API call
Error message displayed on failure
Retry option available

4.2 Route Protection
Dashboard route protected using AuthGuard
Unauthorized users redirected to Login page
Direct URL access blocked without authentication

4.3 Dashboard
Accessible only after successful login
Fetches user data from JSONPlaceholder
Displays loader until data loads
Logout button available

4.4 Logout
Clears token from localStorage
Redirects user to Login screen

5. Non-Functional Requirements
5.1 Clear Separation of Concerns

Components → UI & interaction
Services → Business logic & API calls
Guards → Route protection
Routing Module → Navigation rules

5.2 Predictable State Flow
Authentication state based on token presence
Explicit loading and errorMessage flags
Deterministic login → dashboard → logout flow

5.3 User-Friendly Messages
“Logging in…” loader
Clear error messages
Retry option for failed API calls

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.11.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
