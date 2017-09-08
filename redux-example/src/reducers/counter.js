import * as types from '../actions/ActionTypes';

const initalState = {
  number: 0,
  dummy: 'dummy',
  dumbObject: {
    d: 0,
    u: 1,
    m: 2,
    b: 3
  }
};

export default function counter(state = initalState, action) {
  // if (typeof state == 'undefined') {
  //   return initalState;
  // }

  switch (action.type) {
    case types.INCREMENT:
        return { ...state, number: state.number + 1, dumbObject: { ...state.dumbObject, u: 10}};
      break;
    case types.DECREMENT:
        return { ...state, number: state.number - 1};
      break;
    default:
      return state;
  }
}
