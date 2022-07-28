export function todo(payload) {
  return {
    type: "ADD_TODO",
    payload,
  };
}

export function search(payload) {
  return {
    type: "SEARCH_LIST",
    payload,
  };
}

export function filter(payload){
    return {
        type: "FILTER_LIST",
        payload,
    }
}
