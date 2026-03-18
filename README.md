# demo-react-testing-library

This project demonstrates testing a React app with React Testing Library.
The app itself lives in `src/App.jsx`, and the tests live in `src/App.test.jsx`.

## Running the App

In the project directory, you can run:

### `npm start`

Starts the Vite development server.
By default, the app is available at `http://localhost:5173`.

### `npm run build`

Builds the app for production into the `dist` directory.

### `npm run preview`

Serves the production build locally for previewing.

## Running the Tests

### `npm run test`

Runs the React Testing Library test suite with Vitest.

The tests in `src/App.test.jsx` verify:

- the React logo is rendered
- the counter heading starts at `Count: 0`
- the `+1` and `-1` buttons are visible
- clicking `+1` updates the heading to `Count: 1`

These tests use React Testing Library helpers such as `render`, `screen`, and `fireEvent` to interact with the app the way a user would.

## Learn More

- [Vite Documentation](https://vite.dev/guide/)
- [React Documentation](https://react.dev/)
- [React Testing Library Documentation](https://testing-library.com/docs/react-testing-library/intro/)
- [Vitest Documentation](https://vitest.dev/guide/)
