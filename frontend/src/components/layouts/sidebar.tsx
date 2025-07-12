import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  ArrowDownUp,
  FileText,
  Settings,
  LogOut,
  CreditCard,
  HandCoins,
  ChartLine,
  Wallet,
  CircleDollarSign,
} from 'lucide-react';

const navItems = [
  { path: '/', label: 'Dashboard', icon: LayoutDashboard },
  { path: '/transactions', label: 'Transactions', icon: ArrowDownUp },
  { path: '/subscriptions', label: 'Subscriptions', icon: CreditCard },
  { path: '/invoices', label: 'Invoices', icon: FileText },
  { path: '/loans', label: 'Loans', icon:  HandCoins},
  { path: '/reports', label: 'Reports', icon: ChartLine },
  { path: '/savings', label: 'Savings', icon: Wallet },
  { path: '/financial-advice', label: 'Financial Advice', icon: CircleDollarSign },
  { path: '/settings', label: 'Settings', icon: Settings },
];

const Sidebar = () => {
  return (
    <aside className="w-57 bg-white h-screen p-4 shadow hidden sm:block">
      {/* <h2 className="text-xl font-bold mb-6 text-center"></h2> */}
      <nav className="flex flex-col gap-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 rounded-md hover:bg-blue-100 ${
                  isActive ? 'bg-violet-200 text-violet-800 font-medium' : 'text-gray-700'
                }`
              }
            >
              <Icon className="w-5 h-5" />
              {item.label}
            </NavLink>
          );
        })}
      </nav>
      <button className="mt-10 flex items-center gap-2 text-red-500 hover:text-red-600 px-3 py-2">
        <LogOut className="w-5 h-5" />
        Logout
      </button>
    </aside>
  );
};

export default Sidebar;
