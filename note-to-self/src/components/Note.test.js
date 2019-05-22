import React from 'react';
import { mount } from 'enzyme';
import Note from './Note';

const props = { note: { text: 'sample note' } };

describe('Note', () => {
  let wrapper = mount(<Note {...props} />);
  it('renders the note test', () => {
    expect(wrapper.find('p').text()).toEqual(props.note.text);
  });
});