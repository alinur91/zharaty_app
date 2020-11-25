import {createStore} from 'redux'


const incrementCount = ({incrementBy=1}={}) =>({type: 'INCREMENT',incrementBy})

const decrementCount = ({decrementBy=1}={})=>({type: 'DECREMENT',decrementBy})

const setCount = ({count=2000}) => ({type: 'SET',count})
const resetCount = () => ({type: 'RESET'})

const counterReducer = (state={count:0},action)=>{
 switch (action.type) {
  case "INCREMENT":
     return {count: state.count+action.incrementBy}
   break;

   case "DECREMENT":

     return {count: state.count-action.decrementBy}
   break;

     case "SET":

     return {count: action.count}
   break;

    case "RESET":
     return {count: 0}
   break;
 
  default:
   return state
   break;
 }
 // if(action.type === 'INCREMENT') return {count: state.count+1}
 // if(action.type === 'DECREMENT') return {count: state.count-1}
  // return state

}

const store = createStore(counterReducer)

//actions alllows us to change the store.Action is an object that gets send to the store
const unsubscribe=store.subscribe(()=>{
console.log(store.getState())
})

store.dispatch(incrementCount({}))
store.dispatch(incrementCount())
 

store.dispatch(decrementCount({
 type: 'DECREMENT',
 decrementBy: 10
}))

store.dispatch(decrementCount())
store.dispatch(decrementCount())

store.dispatch(decrementCount({
 type: 'DECREMENT',
 decrementBy: 10
}))


store.dispatch(setCount({count: 102}))
// store.dispatch(setCount())
store.dispatch(resetCount())


//Action generators - functions that return action objects