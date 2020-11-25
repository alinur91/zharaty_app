const add = (a,b)=> a+b
const generateGreeting = (name='anonomous') => `Hello ${name}!`

test('should add 2 num', ()=>{
 const result= add(2,11)
 expect(result).toBe(13)
})

test('generateGreeting', ()=>{
 const result= generateGreeting('mike')
 expect(result).toBe('Hello mike!')
})

test('generateGreeting default', ()=>{
 const result= generateGreeting()
 expect(result).toBe(`Hello anonomous!`)
})