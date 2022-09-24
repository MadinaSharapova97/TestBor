import React from "react"
import GlobalStyle from "./assets/style/global";
import { BrowserRouter } from 'react-router-dom'

import Router from './router/Router'

function App() {

  return (
    <BrowserRouter>
     <GlobalStyle/>
     <Router/>
    </BrowserRouter>

  );
}

export default App;
