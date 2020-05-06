const INITIAL_STATE = {
  list: [],
  loading: true,
  errors: {},
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "pushtolist":
      return {
        list: [...state.list, action.payload],
      };
    default:
      return state;
  }
};
