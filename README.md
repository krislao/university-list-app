# University List App

This web application shows a list of universities from all over the world using
[HipoLabs' University Domains & Names API](https://github.com/Hipo/university-domains-list).

## Features

- Shows a list of universities
- Search a university by name

## Tech

This application uses a number of open source projects to work properly:

- [ReactJS] - a declarative JavaScript library for building user interfaces
- [Create React App] - a tool to set up a modern web app by running one command
- [TypeScript] - typing JavaScript at any scale
- [Bulma] - a free, open source framework that provides ready-to-use frontend components to build
  responsive web interfaces
- [Axios] - a promise-based HTTP client for the browser and node.js
- [CSS Modules] - scoping all class names and animation names locally
- [React World Flags] - easy to use SVG flags of the world for React
- [ESLint] - static code analyzer to quickly find problems
- [TypeScript-ESLint] - a tool that enables ESLint to support TypeScript
- [Prettier] - an opinionated code formatter
- [lint-staged] - run linters against staged git files
- [husky] - Git hooks made easy

[reactjs]: https://reactjs.org/
[create react app]: https://create-react-app.dev/
[typescript]: https://www.typescriptlang.org/
[bulma]: https://bulma.io/
[axios]: https://github.com/axios/axios
[css modules]: https://github.com/css-modules/css-modules
[react world flags]: https://github.com/smucode/react-world-flags
[eslint]: https://eslint.org/
[typescript-eslint]: https://github.com/typescript-eslint/typescript-eslint
[prettier]: https://prettier.io/
[lint-staged]: https://github.com/okonet/lint-staged
[husky]: https://github.com/typicode/husky

## Installation

Install the dependencies and devDependencies and start the server.

```sh
$ git clone https://github.com/krislao/university-list-app.git
$ cd university-list-app
$ yarn
$ yarn start
```

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn format`

Formats the files based on Prettier's configuration

### `yarn lint`

Lints the files using TypeScript-ESLint
