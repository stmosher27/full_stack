import { RECEIVE_SEARCH_RESULTS, CREATE_SEARCH, CLEAR_SEARCH } from '../actions/search_actions';
import merge from 'lodash/merge';

const _searchResults = [];

const SearchesReducer = ( state = _searchResults, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SEARCH_RESULTS:
      return action.results.searchResults;
    case CLEAR_SEARCH:
      return _searchResults;
    default:
      return state;
  }
};

export default SearchesReducer;
