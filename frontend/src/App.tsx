import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Layout from './components/layouts';

import Settings from './pages/setting';

const HomePage = React.lazy(() => import("./features/main/pages/dashboard/index.tsx"))
const Transactions = React.lazy(() => import("./features/main/pages/transactions/index.tsx"))
const Subscriptions = React.lazy(() => import("./features/main/pages/subscriptions/index.tsx"))
const Invoices = React.lazy(() => import("./features/main/pages/invoices/index.tsx"))
const Loans = React.lazy(() => import("./features/main/pages/loans/index.tsx"))
const Reports = React.lazy(() => import("./features/main/pages/reports/index.tsx"))
const Savings = React.lazy(() => import("./features/main/pages/savings/index.tsx"))
const Financial_Advice = React.lazy(() => import("./features/main/pages/financial_advice/index.tsx"))

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
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
