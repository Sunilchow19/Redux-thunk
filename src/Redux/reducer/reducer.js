let initialSate = {
  arr: [],
};

function reducer(state = initialSate, action) {
  switch (action.type) {
    case "pro":
      return {
        ...state,
        arr: action.payload,
      };
    default:
      return state;
  }
}

export default reducer;
