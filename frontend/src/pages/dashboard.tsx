import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { Plus } from 'lucide-react'
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

const barData = [
  { name: "40K", value: 100, status: "Achieved", achieved: "40K" },
  { name: "30K", value: 80, status: "24K/28K", achieved: "80%" },
  { name: "20K", value: 50, status: "10K", achieved: "10K" },
];

const months = ["Feb", "Mar", "Apr", "May", "Jun", "Jul"];

const Dashboard = () => {
  return (
    <>
      <div className=''>
        <div className='text-2xl font-semibold py-1'>Home</div>
        <div className='grid grid-cols-2 grid-row-5 gap-4 my-5'>
          <div className='flex gap-4'>
            <div className="flex flex-col bg-white rounded-lg p-4 row-span-2 shadow-md max-h-min w-[50%]">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-lg">Cards</h3>
                <button className="flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium text-white bg-gradient-to-r from-black to-gray-800 shadow-md hover:from-black hover:to-gray-700 transition-all duration-200 cursor-pointer">
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
                <p className="text-sm">Account Balance</p>
                <div className="text-2xl font-bold mt-2 mb-4">$ 22,000</div>

                <div className="flex mb-4">
                  <span className="text-2xl mr-2">**** **** ****</span>
                  <span className="">1234</span>
                </div>

                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-xs text-[#C7C4C6] mb-1">Expires</p>
                    <p className="text-sm text-white">12/22</p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-9 h-9 rounded-full bg-[#FF2D55] -mr-4 z-0" />
                    <div className="w-9 h-9 rounded-full bg-yellow-400 z-10" />
                  </div>
                </div>
              </div>
            </div>
            <div className='bg-white rounded-lg p-4 w-[50%] shadow-md'>

            </div>
          </div>
          <div className="bg-white rounded-lg p-4 row-span-5 h-[400px] overflow-y-scroll hide-scrollbar">
            <h3 className="text-lg font-semibold mb-4">Subscription History</h3>

            <table className="w-full text-sm text-left border-collapse">
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

          <div className='bg-white rounded-lg p-4 shadow-md row-span-5 h-[520px] overflow-y-scroll hide-scrollbar'>
            <h3 className="text-lg font-semibold mb-4">Transaction History</h3>
            <div className="">
              <table className="w-full text-sm text-left border-collapse">
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
          <div className="bg-white rounded-lg p-4 shadow-md row-span-2">
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="mb-6">
                <h2 className="text-lg font-semibold text-gray-800">Income Goal</h2>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-sm text-gray-500">Achieved Target</span>
                  <span className="text-sm text-gray-500">Last 6 month</span>
                </div>
              </div>

              {/* Chart Area */}
              <div className="flex-grow flex flex-col">
                <div className="flex-grow">
                  <ResponsiveContainer width="100%" height="80%">
                    <BarChart
                      layout="vertical"
                      data={barData}
                      margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
                      barCategoryGap={20}
                    >
                      <XAxis type="number" hide domain={[0, 100]} />
                      <YAxis
                        type="category"
                        dataKey="name"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fontSize: 14, fontWeight: 500 }}
                        width={40}
                      />
                      <Bar
                        dataKey="value"
                        radius={[0, 4, 4, 0]}
                        barSize={12}
                        background={{ fill: "#e5e7eb", radius: 4 }}
                      >
                        {barData.map((entry, index) => (
                          <Bar
                            key={`bar-${index}`}
                            dataKey="value"
                            fill={
                              index === 0
                                ? "#16a34a" // Green for 40K
                                : index === 1
                                  ? "#2563eb" // Blue for 30K
                                  : "#9ca3af" // Gray for 20K
                            }
                            radius={[0, 4, 4, 0]}
                          />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>

                {/* Status Labels */}
                <div className="flex flex-col space-y-4 mt-2">
                  {barData.map((item, index) => (
                    <div key={`status-${index}`} className="flex justify-between">
                      <span className="text-sm text-gray-500">{item.status}</span>
                      <span
                        className={`text-sm font-medium ${index === 0
                          ? "text-green-600"
                          : index === 1
                            ? "text-blue-600"
                            : "text-gray-600"
                          }`}
                      >
                        {item.achieved}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Month Labels */}
                <div className="flex justify-between pt-4 mt-auto">
                  {months.map((month) => (
                    <span key={month} className="text-xs text-gray-500">
                      {month}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard