export default function search (payload) {
  return {
    type: 'SEARCH_TODO',
    payload,
  }
}
