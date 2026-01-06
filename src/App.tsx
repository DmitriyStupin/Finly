import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.scss';
import './styles';
import { routes } from './shared/config/routes.ts';
import Sidebar from './components/Sidebar';
import HomePage from './pages/HomePage';
import TransactionsPage from './pages/TransactionsPage';
import AboutPage from './pages/AboutPage';
import AccountsPage from './pages/AccountsPage';
import CategoriesPage from './pages/CategoriesPage';
import SettingsPage from './pages/SettingsPage';
import StatisticsPage from './pages/StatisticsPage';
import { TransactionsProvider } from './context/TransactionsContext.tsx';
import { CategoriesProvider } from './context/CategoriesContext.tsx';

function App() {
  return (
    <CategoriesProvider>
      <TransactionsProvider>
        <Router>
          <div className={'app'}>
            <Sidebar />
            <div className="app__content">
              <Routes>
                <Route path={routes.home} element={<HomePage />} />
                <Route
                  path={routes.transactions}
                  element={<TransactionsPage />}
                />
                <Route path={routes.about} element={<AboutPage />} />
                <Route path={routes.accounts} element={<AccountsPage />} />
                <Route path={routes.categories} element={<CategoriesPage />} />
                <Route path={routes.settings} element={<SettingsPage />} />
                <Route path={routes.statistics} element={<StatisticsPage />} />
              </Routes>
            </div>
          </div>
        </Router>
      </TransactionsProvider>
    </CategoriesProvider>
  );
}

export default App;
