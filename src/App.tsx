import './App.scss';
import './styles';
import Sidebar from './components/Sidebar';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TransactionsPage from './pages/TransactionsPage';

function App() {
  return (
    <Router>
      <div className={'app'}>
        <Sidebar />
        <div className="app__content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/transactions" element={<TransactionsPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
