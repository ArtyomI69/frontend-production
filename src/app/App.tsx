import './styles/index.scss';
import { classNames } from '../shared/lib/classNames/classNames';
import { useTheme } from './providers/ThemeProvider';
import AppRouter from './router/ui/AppRouter';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { Suspense } from 'react';

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', { hovered: true, selected: true }, [theme])}>
      <Suspense fallback={''}>
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};

export default App;