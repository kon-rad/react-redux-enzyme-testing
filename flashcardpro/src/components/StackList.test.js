import React from 'react';
import { shallow } from 'enzyme';
import { StackList } from 'components/StackList';
import { stacks } from 'data/fixtures';

const props = { stacks };

describe('StackList', () => {
  const stackList = shallow(<StackList {...props} />);

  it('renders the correct number of links', () => {
    expect(stackList.find('Link').length).toEqual(stacks.length);
  });

  it('renders the title in the Link of the stack', () => {
    expect(stackList.find('Link h4').text()).toEqual(stacks[0].title);
  });
});