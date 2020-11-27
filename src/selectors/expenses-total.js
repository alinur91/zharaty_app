

export default expenses=>expenses.length !==0? expenses.map(({amount})=> amount).reduce((sum,value)=>sum+value):0



