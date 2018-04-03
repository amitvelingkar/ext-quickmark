import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { teams } from './teams.reducer';
import { sections } from './sections.reducer';

const rootReducer = combineReducers({
  authentication,
  teams,
  sections,
});

export default rootReducer;