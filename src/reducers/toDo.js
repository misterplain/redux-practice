const initialState = {
  data: [],
};

export default function todo(state = initialState, action) {
  switch (action.type) {
    case "ADD_TODO": {
      let newState = { ...state };
      newState.data = [action.payload, ...newState.data];
      return newState;
    }
    case "SET_COMMENTS": {
      let newState = { ...state };
      newState.data = action.payload.data;
      return newState;
    }
    case "SEARCH_LIST": {
      console.log("dispatch search item");
      let newState = { ...state };
      let data = [...newState.data];
      data = data.filter((item) => {
        if (
          item.title
            ?.toLowerCase()
            .includes(action.payload.searchItem?.toLowerCase())
        ) {
          console.log("ok");
          return item;
        }
      });
      newState.data = data;
      return newState;
    }
    case "FILTER_LIST": {
        
    }
    default: {
      return state;
    }
  }
}

// data= data.filter((item) =>{
//     if (item.title?.toLowerCase() === action.payload.searchItem?.toLowerCase()){
//       console.log("ok")
//       return item;
//     }
//   });
