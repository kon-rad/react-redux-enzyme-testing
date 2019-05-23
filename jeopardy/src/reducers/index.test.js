import rootReducer from 'reducers';
import * as actions from 'actions';
import { categories, category } from 'data/fixtures';

describe('reducers', () => {

  it('returns initial state', () => {
    expect(rootReducer({}, {})).toEqual({ category: [], categories: [] });
  });

  it('sets categories', () => {
    expect(rootReducer({}, { type: actions.SET_CATEGORIES, categories })).toEqual({ category: [], categories });
  });

  it('picks a category', () => {
    expect(rootReducer({}, { type: actions.PICK_CATEGORY, category })).toEqual({ category, categories: [] });
  });
});

