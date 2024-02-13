export const initialState = {
    user: null,
    playlist: [],
    item: null,
    playing: false,
    token: null,
  };
  
  const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
      case 'SET_USER':
        return {
          ...state,
          user: action.user,
        };
      case "SET_TOKEN":
        return {
          ...state,
          token: action.token,
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  