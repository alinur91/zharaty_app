import {addExpense,removeExpense,editExpense} from '../../actions/expenses'

test('removeExpense', ()=>{
 expect(removeExpense({id:'123'})).toEqual({type: 'REMOVE_EXPENSE',
 id: '123'})
})

test('editExpense', ()=>{
 expect(editExpense('321',{note:'New note value'})).toEqual({
  type: 'EDIT_EXPENSE',
    id: '321',
    updates:{note:'New note value'}
})
})

test('addExpense', ()=>{
 expect(addExpense({createdAt: 123,description: 'kiz sigy',note:'New note value',amount: 12})).toEqual({
  type: 'ADD_EXPENSE',
    expense:{createdAt: 123,id: expect.any(String),description: 'kiz sigy',note:'New note value',amount: 12}
})
})

test('addExpense default', ()=>{
 expect(addExpense()).toEqual({
  type: 'ADD_EXPENSE',
    expense:{id: expect.any(String),description:'',note:'',amount:0,createdAt:0}
})
})