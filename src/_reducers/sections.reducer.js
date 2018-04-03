import { sectionConstants } from '../_constants';

export function sections(state = {}, action) {
  switch (action.type) {
    case sectionConstants.GETALL_REQUEST:
      return {
        loading: true
      };
    case sectionConstants.GETALL_SUCCESS:
      return {
        items: action.sections
      };
    case sectionConstants.GETALL_FAILURE:
      return { 
        error: action.error
      };
    default:
      return state
  }
}