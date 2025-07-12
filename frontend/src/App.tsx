import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layouts';
import Transactions  from './pages/transactions';
import Dashboard from './pages/dashboard';
import Subscriptions from './pages/subscriptions';
import Invoices from './pages/invoices';
import Loans from './pages/loans';
import Reports from './pages/reports';
import Savings from './pages/savings';
import Financial_Advice from './pages/financial_advice/financial_advice';
import Settings from './pages/setting';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/subscriptions" element={<Subscriptions />} />
            <Route path="/invoices" element={<Invoices />} />
            <Route path="/loans" element={<Loans />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/savings" element={<Savings />} />
            <Route path="/financial-advice" element={<Financial_Advice />} />
            <Route path="/settings" element={<Settings />} />
          </Route>
        </Routes>
      </Router>

    </>
  )
}

export default App
