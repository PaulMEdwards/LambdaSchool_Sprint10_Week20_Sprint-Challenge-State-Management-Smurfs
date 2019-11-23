import React from 'react';
// import ReactDOM from 'react-dom';
// import ReactTestUtils from 'react-dom/test-utils';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import App from './App';

it('Site renders without crashing', () => {
  render(<App />);
});

// test('App renders as HTML', () => {
//   const app = document.querySelector(".App");
//   console.log('app: ', app);
//   expect(app).toContainHTML();
// });

// test('Dark mode selector rendered properly', (done) => {
//   const container = render(<App />);
//   const d = container.getByTestId("darkMode");

//   expect(d).toBeInTheDocument();
//   expect(d).toBeVisible();
//   expect(d).toBeEnabled();

//   done();
// });

// test('Dark mode selector functional', (done) => {
//   const container = render(<App />);
//   const app = document.querySelector(".App");
//   const h = document.querySelector('header');
//   const d = container.getByTestId("darkMode");
//   const a = document.querySelectorAll('a');
//   const f = document.querySelector('footer');

//   expect(app).not.toHaveClass('dark-mode');
//   expect(h).not.toHaveClass('header-dark');
//   expect(f).not.toHaveClass('footer-dark');
//   a.forEach((e) => {
//     expect(e).not.toHaveClass('dark')
//   });

//   // expect(app).toHaveStyle('background-color: lightgray');
//   // expect(app).toHaveStyle('color: midnightblue');
  
//   fireEvent.click(d);

//   expect(app).toHaveClass('dark-mode');
//   expect(h).toHaveClass('header-dark');
//   expect(f).toHaveClass('footer-dark');
//   a.forEach((e) => {
//     expect(e).toHaveClass('dark')
//   });

//   // expect(app).toHaveStyle('background-color: black');
//   // expect(app).toHaveStyle('color: lightgray');
  
//   fireEvent.click(d);

//   expect(app).not.toHaveClass('dark-mode');
//   expect(h).not.toHaveClass('header-dark');
//   expect(f).not.toHaveClass('footer-dark');
//   a.forEach((e) => {
//     expect(e).not.toHaveClass('dark')
//   });

//   // expect(app).toHaveStyle('background-color: lightgray');
//   // expect(app).toHaveStyle('color: midnightblue');

//   done();
// });
