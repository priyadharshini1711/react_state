import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ClockFunction from './ClockFunction';
import Clock from './Clock';
import ClockState from './ClockState';
import ClockLifeCycle from './ClockLifeCycle';
import EventHandling from './EventHandling'
import Toggle from './Toggle';
import {List,ListRender, NumberList, NumberListKey} from './List'
import Todo from './Todo'
import NumberListWithKeys from './ListItem';
import Blog from './Blog';
import NameForm from './Form';
import EssayForm from './EssayForm';
import FlavorForm from './FlavorForm';
import Reservation from './Reservation';
import Calculator from './Calculator'
import TemperatureConversion from './TemperatureConversion'


function tick() {
  const element = (
    <div>
      <h1>clock</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );

  const numbers = [1, 2, 3, 4, 5];

  const todoList = [
    {
      'id':1,
      'value': 'write'
    },
    {
      'id':2,
      'value': 'read'
    },
    {
      'id':3,
      'value': 'eat'
    }
  ];

  const posts = [
    {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
    {id: 2, title: 'Installation', content: 'You can install React from npm.'}
  ];

  ReactDOM.render(
    // element,

    // <ClockFunction date={new Date()} />,

    // <Clock date={new Date()} />,

    // <ClockState />,

    // <ClockLifeCycle />,

    // <EventHandling />,

    // <Toggle />,

    // <div>

    // <List />,

    // <ListRender />,

    // <NumberList numbers={numbers} />,

    // <NumberListKey numbers={numbers} />,
    // </div>
    
    // <Todo todo={todoList}/>,


    // <NumberListWithKeys numbers={numbers} />,

    // <Blog posts={posts} />,

    // <NameForm />,

    // <EssayForm />,

    // <FlavorForm />,

    // <Reservation />,

    // <Calculator />,

    <TemperatureConversion />,

    document.getElementById('root')
  );
}

// setInterval(tick, 1000);

tick()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
