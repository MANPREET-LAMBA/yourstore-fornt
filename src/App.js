import logo from './logo.svg';
import './App.css';
import Page_route from './Page_route';
import { createContext, useState } from 'react';

export const UseContext = createContext();

function App() {
  const [islogin,isloginhandler]= useState();
  return (
   <UseContext.Provider value={{islogin, isloginhandler}}>
    <Page_route/>
   </UseContext.Provider>
  );
}

export default App;
