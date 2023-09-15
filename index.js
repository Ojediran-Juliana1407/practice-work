console.log('hello world')

console.log("Assignment")

  console.log("Differences between var,let and const in Javascript")
    console.log('var')
var var1 = " variables declared with 'var' are function-scoped,which means they are only accessible within the function in which they are declared."
var var2 = "variables declared with'var' are hosted to the top of their containing function or global scope,which means they can be used before they are declared,but their initial value will be 'undefined' until they are assigned."
var var3= "for example:" 
var var4 ="var school =  'uniport'"
      console.log(var1)
      console.log(var2)
      console.log(var3)
      console.log(var4)

console.log('let')
  let let1="variables declared with 'let' are blocked-scoped,which means they are only accessible within the block(enclosed in curly braces) in which they are declared.This includes loops,if statements,and functions"
  let let2="variables declared with 'let'are also hoisted,but they are not initialized with 'undefined' like 'var'.Instead,they remain in the 'temporal deadzone'until they are declared,making it safer to catch usage errors"
 let let3="for example:"
 let let4="let age=30"
 let let5="let newAge=40"
  console.log(let1)
  console.log(let2)
  console.log(let3)
  console.log(let4)
  console.log(let5)


  console.log('const')
  const const1="like 'let',variables declared with'const' are blocked-scoped"
  const const2="variables declared with 'const' are assigned a constant value that cannot be reassigned after declaration.However,if the variable is an object or an array,the properties or elements of the oject or array can be modified"
 const const3="const name='Juliana'"
  console.log(const1)
console.log(const2)
console.log(const3)