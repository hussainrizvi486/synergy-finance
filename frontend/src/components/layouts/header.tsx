import { Bell, ChevronDown, Moon, Plus, Search } from "lucide-react";
import profilePic from "../../assets/profile-pic.png";
import Logo from "../../assets/synergyalgo-logo.webp"

const Header = () => {
  return (
    <nav className="flex items-center justify-between px-2 md:px-8 py-2 bg-white shadow-md border-b border-gray-200">
      <div className="flex items-center gap-12">
        <img src={Logo} alt="logo" className="w-30 md:w-40"/>
        <div className="relative w-auto md:w-[550px]">
          <input
            type="text"
            placeholder="Type to Search .."
            className="w-full rounded-lg py-1.5 md:py-2 px-4 pl-4 bg-gray-100 text-gray-600 placeholder-gray-400 outline-none text-sm"
          />
          <Search className="absolute top-1/2 right-5 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
        </div>
      </div>
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-4">
          <Plus className=" text-gray-500 cursor-pointer h-5 w-5" />
          <span className="text-gray-300">|</span>
          <Bell className=" text-gray-500 cursor-pointer h-5 w-5" />
          <span className="text-gray-300">|</span>
          <Moon className=" text-gray-500 cursor-pointer h-5 w-5" />
        </div>
        <div className="flex items-center gap-2 cursor-pointer">
          <img src={profilePic} alt="Profile" className="w-8 h-8 rounded-full" />
          <div className="text-sm hidden md:block">
            <p className="font-semibold text-gray-800">Checking</p>
            <p className="text-gray-500 text-xs">Admin</p>
          </div>
          <ChevronDown className="text-gray-500 hidden md:block" />
        </div>
      </div>
    </nav>
  );
};

export default Header;