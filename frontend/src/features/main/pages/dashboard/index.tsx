import { Plus, ArrowDown, ArrowUp, ChevronDown } from 'lucide-react'
import React from 'react'

const subscriptions = [
  {
    id: 1,
    name: 'Netflix',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg',
    amount: '$15.99',
    date: '2025-07-01',
    status: 'Active',
  },
  {
    id: 2,
    name: 'Spotify',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg',
    amount: '$9.99',
    date: '2025-06-15',
    status: 'Active',
  },
  {
    id: 3,
    name: 'Adobe',
    icon: 'https://img.icons8.com/?size=512&id=118571&format=png',
    amount: '$29.99',
    date: '2025-06-01',
    status: 'Expired',
  },
  {
    id: 4,
    name: 'YouTube Premium',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg',
    amount: '$11.99',
    date: '2025-05-20',
    status: 'Active',
  },
  {
    id: 4,
    name: 'YouTube Premium',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg',
    amount: '$11.99',
    date: '2025-05-20',
    status: 'Active',
  },
  {
    id: 4,
    name: 'YouTube Premium',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg',
    amount: '$11.99',
    date: '2025-05-20',
    status: 'Active',
  },
  {
    id: 4,
    name: 'YouTube Premium',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg',
    amount: '$11.99',
    date: '2025-05-20',
    status: 'Active',
  },
];

const transactions = [
  { id: 1, name: "Salary", type: "Credit", amount: "$5,000", date: "2025-07-10", status: "Success" },
  { id: 2, name: "Grocery Store", type: "Debit", amount: "-$120", date: "2025-07-09", status: "Success" },
  { id: 3, name: "Electric Bill", type: "Debit", amount: "-$85", date: "2025-07-08", status: "Failed" },
  { id: 4, name: "Freelance", type: "Credit", amount: "$300", date: "2025-07-06", status: "Success" },
  { id: 4, name: "Freelance", type: "Credit", amount: "$300", date: "2025-07-06", status: "Success" },
  { id: 4, name: "Freelance", type: "Credit", amount: "$300", date: "2025-07-06", status: "Success" },
  { id: 4, name: "Freelance", type: "Credit", amount: "$300", date: "2025-07-06", status: "Success" },
  { id: 4, name: "Freelance", type: "Credit", amount: "$300", date: "2025-07-06", status: "Success" },
  { id: 4, name: "Freelance", type: "Credit", amount: "$300", date: "2025-07-06", status: "Success" }
];

type FinancialCard = {
  title: string;
  amount: string;
  change: {
    value: string;
    percentage: string;
    positive: boolean;
  };
};

const cards: FinancialCard[] = [
  {
    title: "Total Income",
    amount: "1,45,790.00",
    change: {
      value: "16.5%",
      percentage: "16.5%",
      positive: true
    }
  },
  {
    title: "Total Expense",
    amount: "65,340.00",
    change: {
      value: "4.78%",
      percentage: "4.78%",
      positive: false
    }
  }
];

const Index = () => {
  return (
    <>
      <div>
        <div className='text-xl md:text-2xl font-semibold py-1'>Home</div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 my-5'>
          <div className='flex sm:flex-row flex-col gap-4'>
            <div className="flex flex-col-reverse md:flex-col gap-2 bg-white rounded-lg p-4 row-span-2 shadow-md max-h-min flex-1/2 h-full">
              <div className="flex items-center justify-between gap-4 md:mb-4">
                <h3 className="font-semibold hidden md:block md:text-lg">Cards</h3>
                <button className="flex items-center justify-center md:justify-normal gap-2 w-full md:w-max py-1.5 px-2 md:px-4 md:py-2 rounded-md text-sm font-medium text-white bg-gradient-to-r from-black to-gray-800 shadow-md hover:from-black hover:to-gray-700 transition-all duration-200 cursor-pointer">
                  <Plus className="w-4 h-4" />
                  Add new card
                </button>
              </div>

              <div
                className="flex flex-col flex-1 rounded-xl p-4 shadow-lg shadow-green-300/20 text-white"
                style={{
                  background: `linear-gradient(135deg, #121212 15%, #00b076 90%, #2bd47f 100%)`,
                }}
              >
                <p className="text-xs md:text-sm">Balance</p>
                <div className="text-xl md:text-2xl font-bold mt-2 mb-4">$ 22,000</div>

                <div className="flex gap-2 mb-4">
                  <span className="text-sm md:text-xl">**** **** ****</span>
                  <span className="text-xs md:text-sm">1234</span>
                </div>

                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-xs text-[#C7C4C6] mb-1">Expires</p>
                    <p className="text-xs md:text-sm text-white">12/22</p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-6 h-6 md:w-9 md:h-9 rounded-full bg-[#FF2D55] -mr-2 md:-mr-4 z-0" />
                    <div className="w-6 h-6 md:w-9 md:h-9 rounded-full bg-yellow-400 z-10" />
                  </div>
                </div>
              </div>

               <div className='block md:hidden'>
                <h3 className='text-lg font-semibold'>Cards</h3>
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 md:max-w-[40%] h-[280px] shadow-md">
              <div className="flex justify-between mb-4 md:mb-6 mt-2">
                <h3 className='text-xs md:text-sm font-medium text-gray-500'>Money Flow</h3>
                <span className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-500 flex items-center gap-1 h-min">
                  July <ChevronDown className='h-3 w-3' />
                </span>
              </div>
              <div className="flex gap-2 overflow-x-scroll hide-scrollbar h-[190px]">
                {cards.map((card, index) => (
                  <div key={index} className="p-4 border border-gray-300 rounded-lg min-w-[180px]">
                    <h3 className="text-sm font-medium text-gray-500 mb-1">{card.title}</h3>
                    <div className='flex flex-col gap-1'>
                      <p className="text-lg font-semibold mb-2">$ {card.amount}</p>
                      <div className={`flex items-center text-xs md:text-sm ${card.change.positive ? 'text-green-500' : 'text-red-500'}`}>
                        {card.change.positive ? (
                          <ArrowUp className="h-4 w-4 mr-1" />
                        ) : (
                          <ArrowDown className="h-4 w-4 mr-1" />
                        )}
                        <span>{card.change.value}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg p-4 row-span-2 h-80 md:h-[400px] overflow-y-scroll hide-scrollbar">
            <h3 className="text-lg font-semibold mb-4">Subscription History</h3>

            <table className="min-w-[600px] w-full text-sm text-left border-collapse">
              <thead className="text-gray-600">
                <tr className=' border-b border-gray-200'>
                  <th className="p-2">Service</th>
                  <th className="p-2">Amount</th>
                  <th className="p-2">Date</th>
                  <th className="p-2">Status</th>
                </tr>
              </thead>
              <tbody>
                {subscriptions.map((sub) => (
                  <tr
                    key={sub.id}
                    className="bg-transparent last:border-none border-b border-gray-300"
                  >
                    <td className="p-3 font-medium text-gray-800">
                      <div className="flex items-center gap-3">
                        <img
                          src={sub.icon}
                          alt={sub.name}
                          className="w-6 h-6 object-contain rounded-md"
                        />
                        <span>{sub.name}</span>
                      </div>
                    </td>
                    <td className="p-3 text-emerald-600 font-semibold">{sub.amount}</td>
                    <td className="p-3 text-gray-600">{sub.date}</td>
                    <td className="p-3">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium border 
              ${sub.status === 'Active'
                            ? 'bg-green-50 text-green-700 border-green-200'
                            : 'bg-red-50 text-red-600 border-red-200'
                          }`}
                      >
                        {sub.status === 'Active' ? 'Success' : 'Failed'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className='bg-white rounded-lg p-4 shadow-md row-span-5 h-[480px] md:h-[475px] overflow-y-scroll hide-scrollbar'>
            <h3 className="text-lg font-semibold mb-4">Transaction History</h3>
            <div className="">
              <table className="min-w-[600px] w-full text-sm text-left border-collapse">
                <thead className="text-gray-600">
                  <tr className="border-b border-gray-200">
                    <th className="p-3">Name</th>
                    <th className="p-3">Type</th>
                    <th className="p-3">Amount</th>
                    <th className="p-3">Date</th>
                    <th className="p-3">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.map((tx) => (
                    <tr key={tx.id} className="border-b border-gray-100 last:border-none">
                      <td className="p-3 font-medium text-gray-800">{tx.name}</td>
                      <td className="p-3">
                        <span className={`text-xs font-semibold px-2 py-1 rounded-full 
                ${tx.type === 'Credit' ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'}`}>
                          {tx.type}
                        </span>
                      </td>
                      <td className="p-3 text-gray-900 font-semibold">{tx.amount}</td>
                      <td className="p-3 text-gray-500">{tx.date}</td>
                      <td className="p-3">
                        <span className={`text-xs font-medium px-2 py-1 rounded-full border
                ${tx.status === 'Success' ? 'bg-green-100 text-green-700 border-green-200' : 'bg-red-100 text-red-600 border-red-200'}`}>
                          {tx.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </div>
          <div className="bg-white rounded-lg p-4 shadow-md row-span-5 h-[360px] md:h-[355px]">


          </div>
        </div>
      </div>
    </>
  )
}

export default Index