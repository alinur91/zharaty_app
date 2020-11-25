const expensesReducerDefaultState=[]

const expensesReducer = (state=expensesReducerDefaultState,action)=>{
 switch (action.type) {
  case 'ADD_EXPENSE':
    return [...state,action.expense]
   break;

     case 'REMOVE_EXPENSE':
      return state.filter(({id})=> id !== action.id)
   break;

     case 'EDIT_EXPENSE':
       return state.map((expense)=> expense.id === action.id?{...expense,...action.updates}:expense)
      //  const needsToEdit = state.find(({id})=>id===action.id)
      //  return [...state,{...needsToEdit,...action.updates}]
   
   break;

  default:
   return state
   break;
 }
}

export default expensesReducer