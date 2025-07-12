import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  ArrowDownUp,
  FileText,
  Settings,
  CreditCard,
  HandCoins,
  ChartLine,
  Wallet,
  CircleDollarSign,
  Menu,
  X
} from 'lucide-react';
import { useState } from 'react';

const navItems = [
  { path: '/', label: 'Dashboard', icon: LayoutDashboard },
  { path: '/transactions', label: 'Transactions', icon: ArrowDownUp },
  { path: '/subscriptions', label: 'Subscriptions', icon: CreditCard },
  { path: '/invoices', label: 'Invoices', icon: FileText },
  { path: '/loans', label: 'Loans', icon: HandCoins },
  { path: '/reports', label: 'Reports', icon: ChartLine },
  { path: '/savings', label: 'Savings', icon: Wallet },
  { path: '/financial-advice', label: 'Financial Advice', icon: CircleDollarSign },
  { path: '/settings', label: 'Settings', icon: Settings },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="mt-[4.25rem] ml-auto bg-white p-2 rounded-md"
        >
          <Menu className="w-6 h-6 text-gray-700" />
        </button>
      )}

      <aside
        className={`fixed top-0 left-0 ${isOpen ? 'h-screen' : 'h-[93vh]'} bg-white shadow-lg p-4 z-50 w-64 flex flex-col justify-between transition-transform duration-300
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="flex justify-end">
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-md hover:bg-gray-200"
          >
            <X className="w-5 h-5 text-gray-700" />
          </button>
        </div>

        <div className="flex-1 overflow-hidden">
          <nav className="flex flex-col gap-2 mt-6">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-3 py-2 rounded-md hover:bg-blue-100 transition 
                    ${isActive ? 'bg-violet-200 text-violet-800 font-medium' : 'text-gray-700'}`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  <Icon className="w-5 h-5" />
                  {item.label}
                </NavLink>
              );
            })}
          </nav>
        </div>
      </aside>

      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/25 bg-opacity-40 z-40"
        />
      )}
    </>
  );
};

export default Sidebar;
