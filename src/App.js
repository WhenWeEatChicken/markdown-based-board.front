import React from 'react';
import logo from './logo.svg';
import './App.css';

// 리액트 라우터 돔
import { Route, Link } from 'react-router-dom';

// 글로벌 스타일 by styled-components
import { createGlobalStyle } from 'styled-components';

// Route 지정되는 View 파일
import IndexView from './components/Views/IndexView';
import PostView from './components/Views/PostView';

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Route path="/" component={IndexView} exact />
      <Route path="/post/create" component={PostView} />
    </>
  );
} 

export default App;
