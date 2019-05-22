import rootReducer from 'reducers';
import * as actions from 'actions';
import { stack, stacks } from 'data/fixtures';

describe('rootReducer', () => {
  it('returns the initial state', () => {
    expect(rootReducer({}, {})).toEqual({ stack: {}, stacks: [] });
  });

  it('sets the main stack', () => {
    expect(rootReducer({}, { type: actions.SET_STACK, stack })).toEqual({ stacks: [], stack });
  });

  it('loads stacks', () => {
    expect(rootReducer({}, { type: actions.LOAD_STACKS, stacks })).toEqual({ stacks, stack: {} });
  });

  it('adds a stack', () => {
    expect(rootReducer({}, { type: actions.ADD_STACK, stack })).toEqual({ stack: {}, stacks: [stack] });
  })
});

