const INITIAL_STORE = {
  list: [],
  loading: true,
  errors: {},
  count: 0,
  smile: true,
};

export default (store = INITIAL_STORE, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...store,
        count: action.payload,
      };
    default:
      return store;
  }
};
