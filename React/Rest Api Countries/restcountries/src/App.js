import { Route, Routes } from 'react-router-dom'

import { useState } from 'react';

import Header from './components/Header';
import Main from './components/Main';

import { HomePage } from './pages/HomePage'
import { Detail } from "./pages/Detail";
import { NotFound } from "./pages/NotFound";

function App() {
  const [countries, setCountries] = useState([])

  const [search, setSearch] = useState('')
  const [region, setRegion] = useState('')

  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route path='/' element={<HomePage countries={countries} setCountries={setCountries} search={search} setSearch={setSearch} region={region} setRegion={setRegion} />} />
          <Route path='/country/:name' element={<Detail />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Main>
    </>
  );
}

export default App;
