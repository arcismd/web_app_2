import React from "react";
import { Layout } from './components/Navbar/Layout'
import { Routes, Route } from 'react-router-dom'
import { MainPage } from './pages/MainPage/MainPage'

import './styles/app.scss'

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path='/' element={ <MainPage /> } />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
