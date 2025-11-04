import React from 'react';
import { Button } from './Button';

describe('<Button />', () => {
  it('renders and responds to click', () => {
    cy.mount(<Button label="Click me" onClick={() => alert('Clicked!')} />);
    cy.contains('Click me').click();
  });
});
export default function Button() {
  return <button>Click me</button>;
}
