// import logo from './logo.svg';
import React, {useReducer} from 'react';
import { Component } from 'react';
import './App.css';
import ClassCounter from './components/ClassCounter';
import ClassCounterOne from './components/ClassCounterOne';
import ClassMouse from './components/ClassMouse';
import ComponentC from './components/ComponentC';
import CounterOne from './components/CounterOne';
import CounterTwo from './components/CounterTwo';
import CounterThree from './components/CounterThree';
import DataFetching from './components/DataFetching';
import HookCounter from './components/HookCounter';
import HookCounterFour from './components/HookCounterFour';
import HookCounterOne from './components/HookCounterOne';
import HookCounterThree from './components/HookCounterThree';
import HookCounterTwo from './components/HookCounterTwo';
import HookMouse from './components/HookMouse';
import IntervalClassCounter from './components/IntervalClassCounter';
import IntervalHookCounter from './components/IntervalHookCounter';
import MouseContainer from './components/MouseContainer';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import CompA from './components/CompA';
import CompB from './components/CompB';
import CompC from './components/CompC';
import DataFetchingOne from './components/DataFetchingOne';
import DataFetchingTwo from './components/DataFetchingTwo';
import ParentComponent from './components/ParentComponent';

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

export const CountContext = React.createContext()

// const initialState = 0
// const reducer = (state, action) => {
//     switch(action) {
//         case 'increment':
//             return state + 1
//         case 'decrement':
//             return state - 1
//         case 'reset':
//             return initialState
//         default:
//             return state
//     }
// }

function App() {
  // const [count, dispatch] = useReducer(reducer, initialState)

  return (
    // <CountContext.Provider value ={{ countState: count, countDispatch: dispatch}}>
      <div className="App">
        <ParentComponent />
        {/* <DataFetchingTwo /> */}
        {/* <DataFetchingOne /> */}
        {/* <CompA />
        <CompB />
        <CompC /> */}
        {/* <CounterThree />   */}
        {/* <CounterTwo /> */}
        {/* <CounterOne /> */}
        {/* <UserContext.Provider value={'Simon'}>
          <ChannelContext.Provider value={'codevolution'}>
            <ComponentC />
          </ChannelContext.Provider>
        </UserContext.Provider> */}
        {/* <DataFetching /> */}
        {/* <IntervalHookCounter /> */}
        {/* <IntervalClassCounter /> */}
        {/* <MouseContainer /> */}
        {/* <HookMouse /> */}
        {/* <ClassMouse /> */}
        {/* <HookCounterOne /> */}
        {/* <ClassCounterOne /> */}
        {/* <HookCounterFour /> */}
        {/* <HookCounterThree /> */}
        {/* <HookCounterTwo /> */}
        {/* <HookCounter /> */}
        {/* <ClassCounter /> */}
        {/* <PostForm /> */}
        {/* <PostList /> */}
      </div>
    // </CountContext.Provider>
  );
}

export default App;
