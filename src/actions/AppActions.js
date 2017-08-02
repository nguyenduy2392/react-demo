// @flow

import ActionTypes from '../constants/ActionTypes';
// import WebAPIUtils from '../utils/WebAPIUtils';

/**
 * App actions
 *
 * @type {Object}
 */
const AppActions = {
  /**
   * App initialize action
   *
   * @return {Object}
   */
  initialize(): Object {
    return {
      type: ActionTypes.INITIALIZE,
    };
  },

  /**
   * Placeholder action (example)
   *
   * @param  {number} inc increment value
   *
   * @return {Object}
   */
  placeholder(inc: number): Object {
    return {
      type: ActionTypes.PLACEHOLDER,
      inc,
    };
  },

  /**
   * Example of async action
   *
   * @param  {number} inc increment value
   *
   * @return {Function}
   */
  placeholderAsync(inc: number): Object {
    return {
      type: ActionTypes.PLACEHOLDER_ASYNC,
      inc,
    };
  },
};

export default AppActions;
