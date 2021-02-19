const rootReducer = function (state = [], action) {
  switch (action.type) {
    case "REMOVE":
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1),
      ];
    case "ADD":
      return [...state, action.post];
    case "LOAD":
      return action.post;
    default:
      return state;
  }
};

export default rootReducer;
