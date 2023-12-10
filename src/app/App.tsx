import './styles/index.scss';
import { classNames } from '../shared/lib/classNames/classNames';
import { useTheme } from './providers/ThemeProvider';
import AppRouter from './router/ui/AppRouter';
import { Navbar } from 'widgets/Navbar';

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', { hovered: true, selected: true }, [theme])}>
      <Navbar />
      <AppRouter />
    </div>
  );
};

export default App;
