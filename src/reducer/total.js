const initialState = {
  total: 0,
};

const totalReducer = (state = initialState, action) => {
  switch (action.type) {
    case "inc":
      return {
        ...state,
        count: state.count + 1,
      };
  }
};
