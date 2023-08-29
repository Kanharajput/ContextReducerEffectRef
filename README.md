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