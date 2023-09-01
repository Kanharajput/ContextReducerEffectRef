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

### useEffect
- It can also work useReducer props. If we want to run useEffect only at particular instance of useReducer changes, then 
    we can achieve it.
- If isValid values changes then only useEffect we run again. If the password was valid and some characters are added more which
    are not changing validity and there's no need to set the formValidity again and again as it remains the same.
    -   ```const{isValid: isEmailValid} = emailState;``` object destructuring, isEmailValid is an alias.

### React cotext api 
- It is used to pass the props directly to a component which is not the parent or child.
- Basically we create a new component and store the data in needed format inside it, to access the data, wrap the components 
    which need this data using this component.
- We can also pass a pointer to let the context getting component to execute a fucntion which is inside parent component

- There are two ways to access the data.
    - One is using consumer
    - Another way is using useContext. Pass the context component as a arguement and it will return a variable using which 
        we can access the stored value.

- When to use context and when to use props? 
    - The answer is when there are multiple components through which a props is passing and they are not using it they are just passing
        in this situation we should use context to directly send to a particular component which need it.
    - When a direct child needs a data then always use props.

    #### We can create our own provider for a context which let the context behave like component.
        - If the context name is AuthContext then custome provider should name AuthContextProvider.
        - React automatically consider AuthContextProvider as a provider of AuthContext.
        - We will access all the data items from AuthContext but all the behind scene work is done inside the AuthContextProvider.
        - AuthContextProvider is used to wrap the component which needs AuthContext data.

    #### When not to use context
        - Only use when we have to manage the state of whole app.(Many components depends on one particular state).
        - Not used when have short props chain.
        - When frequently state changes then it's performance drops. Frequently means within seconds.
        - Don't use when want to reusable component.(props are used to create reusable component)

    