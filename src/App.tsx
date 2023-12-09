import { Route, Routes } from 'react-router';
import './index.scss';
import { Link } from 'react-router-dom';
import { AbutPageAsync } from './components/pages/AbuotPage/AbuotPage.async';
import { MainPageAsync } from './components/pages/MainPage/MainPageAsync.async';
import { Suspense } from 'react';

const App = () => {
  return (
    <div className="app">
      <Link to={'/'}>Главная</Link>
      <Link to={'/about'}>О сайте</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={'/about'} element={<AbutPageAsync />} />
          <Route path={'/'} element={<MainPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;