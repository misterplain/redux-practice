const initialState = {
    data: [],
}


export default function todo(state=initialState, action){
    switch (action.type) {
        case 'ADD_TODO':{
            let newState = {...state};
            newState.data = [action.payload, ...newState.data];
            return newState;
        }
        case 'SET_COMMENTS':{
            let newState = {...state};
            newState.data = action.payload.data
            return newState;
        }
        case 'SEARCH_LIST':{
            console.log('dispatch search item')
            let newState = {...state};
            newState.data.filter(item => item.title === action.payload);
            return newState;
        }
        default:{
            return state;
        }
        
    }
}
