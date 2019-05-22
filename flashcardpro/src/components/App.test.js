import React from 'react';
import { mount, shallow } from 'enzyme';
import App from 'components/App';

describe('App', () => {
  const app = shallow(<App />);

  it('renders `Flashcard Pro` title', () => {
    expect(app.find('h2').text()).toEqual('Flashcard Pro')
  });

  it('renders the StackList', () => {
    expect(app.find('Connect(StackList)')).toBeDefined();
  });

  it('renders a Link to create new Stacks', () => {
    expect(app.find('Link h4').text()).toEqual('Create a New Stack')
  });
});