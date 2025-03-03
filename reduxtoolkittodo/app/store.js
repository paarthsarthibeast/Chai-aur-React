import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice';
export const store = configureStore({
    reducer: todoReducer
})

/*

1. React-Redux: Connecting Redux with React : 
React-Redux is the official binding library that connects React with Redux. It provides hooks like useSelector, useDispatch, and Provider that allow React components to interact with the Redux store.

Key Features of React-Redux:
a. useSelector: Allows React components to read specific slices of the Redux state.
b. useDispatch: Provides a way for components to dispatch actions to update the Redux state.
c. Provider: Connects the React component tree to the Redux store, ensuring that all components can access the store.
d. React-Redux focuses on providing a seamless way to integrate React and Redux together, handling optimizations like preventing unnecessary re-renders of components when state changes.

*/


/*

Redux toolkit ki notes
1. Create Store - single source of truth
it has configureStore
introduce reducer

2. Create Slice(functions) method(createSlice)
Slice has name, initialState, reducers :{key: function}
Access of two things (State, action)
state = state value in the store
action = action.payload 
export individual functionality 
export main source export

3. Add Todo - Give values to State i.e Dispatch Courier  = use method useDispatch()
dispatch(addTodo())

4. Take Values - useSelector((state) =>state.todos) state ka access chaiye
variable me values lelo ek baar aagaie uske baad pure JS concept hai 

*/