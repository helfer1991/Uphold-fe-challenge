# Frontend Challenge

## Usage

```
cd uphold-challenge
```

install packages:

```bash
yarn install
```

Run the app:

```bash
yarn start
```

Run unit tests:

```bash
yarn test
```

## Run E2E tests

First run the app

```bash
yarn start
```

Then Cypress with

```bash
yarn e2e
```

## Summary

Most of the criterias were met for this challenge

- E2E testing was implemented with Cypress.
- Caching and state management with Redux Toolkit (initially employed React-Query, but opted for Redux Toolkit as it's more widely used);
- Unit tested the components with jest and React Testing Library, although partially due to time constraints. Main functionality tested through Cypress;
- CORS is handled with http-proxy-middleware;
- Pagination handled with infinite loading (supportedCurrencies);
- Supported Currencies are being loaded dynamically with a direct call to the Uphold API (no sdk method);
- Loading state only appears for currencies that are not cached already;
- Responsive design;
- Styled-Components for CSS, as that's the tool I'm mostly used to work with. Although I recognized that when it comes to performance CSS-In-JS is not as good as pure CSS, I like its syntax and it's fine for small projects;
- Employed memoization of functions and values, along with the creation of custom hooks for data fetching, or for abstracting functionality;
- Used the library React-Icons for icons (up and down arrow);
- Husky, prettier and eslint configured to check linting issues;
- Due to time constraints I chose not to address the formatted value of the input number (xx,yyy.zz), although I think it would be something simple to do.
