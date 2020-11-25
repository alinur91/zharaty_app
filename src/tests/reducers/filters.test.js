import filtersReducer from '../../reducers/filters'
import moment from 'moment'

// const state= {text:'',sortBy: 'date',startDate:moment().startOf('month'),endDate:moment().endOf('month')}

test('default filter values',()=>{
 
 expect(filtersReducer(undefined,{type: '@@NIT'})).toEqual({text:'',sortBy: 'date',startDate:moment().startOf('month'),endDate:moment().endOf('month')})
})

test('SET_TEXT_FILTER',()=>{
 const text='123'
 const state = filtersReducer(undefined,{type: 'SET_TEXT_FILTER',text})
 expect(state.text).toBe(text)
})

test('SORT_BY_AMOUNT',()=>{
 const state = filtersReducer(undefined,{type: 'SORT_BY_AMOUNT'})
 expect(state.sortBy).toBe('amount')
})

test('SORT_BY_DATE',()=>{
 const curState= {text: '',sortBy: 'amount',startDate:undefined,endDate:undefined}
 const action={type: 'SORT_BY_DATE'}
 const state = filtersReducer(state,action)
 expect(state.sortBy).toBe('date')
})

test('SET_START_DATE',()=>{
 const startDate=moment().add(6,'days').valueOf()
 const state = filtersReducer(undefined,{type: 'SET_START_DATE',startDate})
 expect(state.startDate).toBe(startDate)
})

test('SET_END_DATE',()=>{
 const endDate=moment().add(36,'days').valueOf()
 const state = filtersReducer(undefined,{type: 'SET_END_DATE',endDate})
 expect(state.endDate).toBe(endDate)
})