const expenseReducer = (state = [], action) => {
   switch (action.type) {
      case 'SET_EXPENSES':
         return action.payload;
      default:
         return state;
   }
};

// user will be on the redux state at:
// state.user
export default expenseReducer;
