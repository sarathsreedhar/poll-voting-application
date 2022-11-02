# Poll Voting Application

## Single page application to poll vote

It is a client side single page application to list different questions and vote for different choices

## Features

- List all question in the poll
- Display question page with list of choices
- List different choices for voting and collect votes
- notify user if the application is offline
- implemented e2e testing to ensure the code quality

## Tech

Poll Voting Application uses a number of open source projects to work properly:

- [React](https://reactjs.org/) - JavaScript library for building user interfaces
- [Redux-Toolkit](https://redux-toolkit.js.org/) - JavaScript library used for state management
- [ESLint](https://eslint.org/) - ESLint is a static code analysis tool for identifying problematic patterns found in JavaScript code
- [Babel](https://babeljs.io/) - Babel is a tool that helps you write code in the latest version of JavaScript
- [Prettier](https://prettier.io/) - Prettier is an opinionated code formatter which ensures one unified code format.
- [husky](https://typicode.github.io/husky/) - Modern native git hooks made easy
- [Cypress](https://www.cypress.io/) - JavaScript End to End Testing Framework

## Installation

Install the dependencies and devDependencies and start the dev server.

```sh
cd army-troops-generator
npm i
npm start
```

For e2e testing run:

```
npm run test
```

For running e2e in Browser :

```
 npx cypress open

```

For production environments...

```sh
npm run build
```

## Development

Want to contribute? Great!

Poll Voting Application uses React for fast developing.
