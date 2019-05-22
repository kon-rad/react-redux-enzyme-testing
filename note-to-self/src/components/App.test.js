import React from 'react';
import { mount } from 'enzyme';
import App from './App';

describe('App', () => {
  let wrapper = mount(<App/>);

  it('renders the App title', () => {
    expect(wrapper.find('h1').text()).toEqual('Note to Self');
  });

  it('renders the clear button', () => {
    expect(wrapper.find('.btn').at(1).text()).toEqual('Clear Notes');
  });

  describe('when rendering the form', () => {
    it('creates a Form component', () => {
      expect(wrapper.find('Form')).toBeDefined();
    });

    it('renders a FormControl component', () => {
      expect(wrapper.find('FormControl')).toBeDefined();
    });

    it('renders a submit button', () => {
      expect(wrapper.find('.btn').at(0).text()).toEqual('Submit');
    });
  });

  describe('when creating a note', () => {
    let testNote = 'a sample test note';

    beforeEach(() => {
      wrapper.find('FormControl').simulate('change', {
        target: { value: testNote }
      });
    });

    it('updates the text in state', () => {
      expect(wrapper.state().text).toEqual(testNote);
    });

    describe('and submitting the new note', () => {
      beforeEach(() => {
        wrapper.find('.btn').at(0).simulate('click');
      });

      afterEach(() => {
        wrapper.find('.btn').at(1).simulate('click');
      });

      it('adds the new note to the state', () => {
        expect(wrapper.state().notes[0].text).toEqual(testNote);
      });

      describe('and remounting the component', () => {
        let wrapper2;
        beforeEach(() => {
          wrapper2 = mount(<App />);
        });

        it('reads the stored note cookies', () => {
          expect(wrapper2.state().notes).toEqual([{ text: testNote }]);
        });
      });

      describe('and clicking the clear button', () => {
        beforeEach(() => {
          wrapper.find('.btn').at(1).simulate('click');
        });

        it('clears the notes in state', () => {
          expect(wrapper.state().notes).toEqual([]);
        });
      });
    });
  });
});