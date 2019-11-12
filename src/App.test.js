import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//This comment is for cool dudes -Joseph Maisevich

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

//Yo what's up boys 