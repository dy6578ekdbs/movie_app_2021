import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


// <App /> 이건 html이 아님, component임! react는 컴포넌트와 함께 동작한다. 
// 컴포넌트 : html을 반환하는 함수
// 리액트는 컴포넌트를 사용해 html처럼 작성하려는 경우에 필요함. js와 html사이의 이러한 조합을 jsx라 부른다. 

// react application은 한 번에 하나의 컴포넌트만 rendering할 수 있다.
ReactDOM.render( //이 안에는 컴포넌트 한개만 넣을 수 있다. 
  <React.StrictMode>
    <App /> 
  </React.StrictMode>,
  document.getElementById('root')
);
