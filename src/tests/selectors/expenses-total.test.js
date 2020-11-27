import selectExpensesTotal from '../../selectors/expenses-total'
import expenses from '../fixtures/expenses'


test('should return 0 if no expenses',()=>{
 const result = selectExpensesTotal([])
 expect(result).toBe(0)
})

test('should add up a single ex',()=>{
 const result = selectExpensesTotal([expenses[0]])
 expect(result).toBe(166)
})

test('should add up a multiple expenses',()=>{
 const result = selectExpensesTotal(expenses)
 expect(result).toBe(11100078)
})