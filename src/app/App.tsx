import './styles/index.scss';
import { Link } from 'react-router-dom';
import { classNames } from '../shared/lib/classNames/classNames';
import { useTheme } from './providers/ThemeProvider';
import AppRouter from './router/ui/AppRouter';

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', { hovered: true, selected: true }, [theme])}>
      <button onClick={toggleTheme}>Toggle</button>
      <Link to={'/'}>Главная</Link>
      <Link to={'/about'}>О сайте</Link>
      <AppRouter />
    </div>
  );
};

export default App;
