import {createStore,combineReducers} from 'redux'
import uuid from 'uuid'

//ADD_EXPENSE
const addExpense = ({description='',note='',amount=0,createdAt=0}={})=>({
 type: 'ADD_EXPENSE',
 expense: {
   id: uuid(),
   description,
   note,
   amount,
   createdAt
 }
})

//REMOVE_EXPENSE
const removeExpense = ({id}={})=>({
 type: 'REMOVE_EXPENSE',
 id
})

//EDIT_EXPENSE
const editExpense = (id,updates) => ({
  type: 'EDIT_EXPENSE',
    id,
    updates
})
//SET_TEXT_FILTER
const setTextFilter = (text='') => ({
  type: 'SET_TEXT_FILTER',
  text
})
//SORT_BY_AMOUNT
const sortByAmount = ()=>({
  type: 'SORT_BY_AMOUNT'
})

//SORT_BY_DATE
const sortByDate = ()=>({
  type: 'SORT_BY_DATE'
})

//SET_START_DATE
const setStartDate = (startDate)=>({
    type: 'SET_START_DATE',
    startDate
})

//SET_END_DATE
const setEndDate = (endDate)=>({
    type: 'SET_END_DATE',
    endDate
})




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


const filtersReducerDefaultState={text:'',sortBy: 'date',startDate:undefined,endDate:undefined}

const filtersReducer = (state=filtersReducerDefaultState,action)=>{
 switch (action.type) {
   case 'SET_TEXT_FILTER':
    return {...state,text: action.text}
    break;

     case 'SORT_BY_AMOUNT':
      return {...state,sortBy: 'amount'}
   break;

     case 'SORT_BY_DATE':
      return {...state,sortBy: 'date'}
   
    break;

  case 'SET_START_DATE':
      return {...state,startDate: action.startDate}
   
    break;
    case 'SET_END_DATE':
      return {...state,endDate: action.endDate}
   
    break;

    
  default:
   return state
   break;
 }
}

const getVisibleExpenses = (expenses,{text,sortBy,startDate,endDate})=>{
  return expenses.filter((expense)=> {
    const startDateMatch = typeof startDate !== 'number' || expense.createdAt >=startDate
    const endDateMatch = typeof endDate !== 'number' || expense.createdAt <=endDate
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase())

    return startDateMatch &&  endDateMatch && textMatch
  }).sort((a,b)=>{
    if(sortBy === 'date'){
      return b.createdAt - a.createdAt
    }else if(sortBy === 'amount'){
      return b.amount > a.amount?1:-1

    }
  })
}

const store = createStore(combineReducers({
 expenses: expensesReducer,
filters: filtersReducer
}))

store.subscribe(()=>{
  const state = store.getState()
  const visibleExpenses = getVisibleExpenses(state.expenses,state.filters)
  console.log(visibleExpenses)
})

const expenseOne= store.dispatch(addExpense({description: 'shomyly',amount: 100,createdAt: -1000}))
// console.log(expenseOne)
const expenseTwo= store.dispatch(addExpense({description: 'shower',amount: 1000,createdAt: -2000}))
const expenseThree= store.dispatch(addExpense({description: 'shomyl bro',amount: 200,createdAt: 45000}))
const expenseFour= store.dispatch(addExpense({description: 'shower baby',amount: 500,createdAt: 800000}))

// store.dispatch(removeExpense({id: expenseTwo.expense.id}))

// store.dispatch(editExpense(expenseOne.expense.id,{description:'shower baby',amount: 200}))

// store.dispatch(setTextFilter('BRO'))
// store.dispatch(setTextFilter())

store.dispatch(sortByAmount())
// store.dispatch(sortByDate())
store.dispatch(setStartDate())
store.dispatch(setEndDate())




const demoState = {
  expenses: [{
   id: '123',
   description: 'asd',
   note: 'gibberish',
   amount: 1200,
   createdAt: 0
  }],
 filters: {
    text: 'rent',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
 }
}


