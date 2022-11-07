const CHECK_STATUS = 'bookstore/categories/CHECK_STATUS';

const catInitState = [];

const catReducer = (state = catInitState, action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under construction';

    default:
      return state;
  }
};

export const catStatus = () => ({ type: CHECK_STATUS });

export default catReducer;
