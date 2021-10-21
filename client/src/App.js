import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import MyPage from './pages/mypage'


function App() {
  return (
  <BrowserRouter>
    <Route exact path="/mypage">
      <MyPage />
    </Route>
  </BrowserRouter>
  );
}

export default App;
