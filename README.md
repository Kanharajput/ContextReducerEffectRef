### useEffect

useEffect is used to run when certain conditions matches. Normally it has two parameters, one define the code to be  
executed when certain event happens and another one is called as dependencies it defines what are the events which  
after which we have to re-run the useEffect hook. If nothing pass in the dependencies then it will only run at a time  
of initialise render.

#### When to useEffect
useEffect is used when some side effect happens. Now side effects means when something happens then what to do in  
response of that. For example if a http request send to server, some form data changes and gathered and after that check  
for their validation etc. Basically some action in response of some another action.

> What not to add as dependencies.
- DON'T need to add state updating functions 
- DON'T need to add "built-in" APIs or functions like fetch(), localStorage etc 
- DON'T need to add variables or functions you might've defined OUTSIDE of your components (e.g. if you create a new helper function in a separate file)

### It' not a good practise to detect each keystroke ? So what to do. => timer and clean up function
- We have to wait for some time after the input is passed to the user.(This problem is solved by setTimeout)
- Also we have to stop timers which are started after each key stroke only run the timer to fullest which is started  
    at last keyStoke.
- This problem is solved by clean up function. To properly clean up effects in useEffect, one can use the return 
    statement or a clean-up function. The clean-up function is called after the main effect function has been completed but before the component is unmounted or the effect is re-run   

### useReducers 
- When we have multiple states and multiple dependencies then we should use it.
- It is more complex than the useState but the outcome is same.
- In current app we handle enteredEmail and isEnteredEmailValid state.