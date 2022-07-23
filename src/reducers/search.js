const initialState = {
  data: [],
};

export default function search(state = initialState, action) {
  switch (action.type) {
    case "SEARCH_TODO": {
      console.log("search to do reducer accessed", action.payload);
      let newState = { ...state };
        newState.data = action.payload;
        return newState;
    }

    default: {
      return state;
    }
  }
}
