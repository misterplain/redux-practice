export function todo(payload) {
  return {
    type: "ADD_TODO",
    payload,
  };
}

export function search(payload) {
  return {
    type: "SEARCH_TODO",
    payload,
  };
}
