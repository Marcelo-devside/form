import React from 'react';

import './styled/Header.css'
import './styled/Form.css'
import './styled/Forms.css'

import './App.css';
import HandleHeader from './components/Header'
// import Former from './components/Form'
import MyForm from './components/Form'


function App() {
  return (
    <>
    <HandleHeader/>
    <MyForm/>
      {/* <Former/> */}
    </>
  )
}

export default App;
