import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

/*test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});*/

it("the App is rendered successfully", () => {
  const div = document.createElement("div")
  ReactDOM.render(<App/>, div)
})
