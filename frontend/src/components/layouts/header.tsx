import { Bell, ChevronDown, Moon, Plus, Search } from "lucide-react";
import profilePic from "../../assets/profile-pic.png";
import Logo from "../../assets/synergyalgo-logo.webp";
import { useState, useRef, useEffect } from "react";

const Header = () => {
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const searchInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        searchInputRef.current &&
        !searchInputRef.current.contains(e.target as Node)
      ) {
        setShowMobileSearch(false);
      }
    };

    if (showMobileSearch) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showMobileSearch]);

  return (
    <nav className="relative flex items-center justify-between gap-2 px-2 md:px-8 py-2 bg-white shadow-md border-b border-gray-200">
      <div className="flex items-center gap-4 md:gap-12">
        <img src={Logo} alt="logo" className="w-30 md:w-40 object-contain" />

        <div className="hidden sm:block relative w-[250px] md:w-[400px]">
          <input
            type="text"
            placeholder="Type to Search .."
            className="w-full rounded-lg py-1.5 md:py-2 px-4 bg-gray-100 text-gray-600 placeholder-gray-400 outline-none text-sm"
          />
          <Search className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
        </div>
      </div>

      <div className="hidden sm:flex items-center gap-4 md:gap-6 ml-auto">
        <div className="flex items-center gap-3 md:gap-4">
          <Plus className="text-gray-500 cursor-pointer h-5 w-5" />
          <span className="text-gray-300">|</span>
          <Bell className="text-gray-500 cursor-pointer h-5 w-5" />
          <span className="text-gray-300">|</span>
          <Moon className="text-gray-500 cursor-pointer h-5 w-5" />
        </div>

        <div className="flex items-center gap-2 cursor-pointer">
          <img src={profilePic} alt="Profile" className="w-8 h-8 rounded-full" />
          <div className="hidden md:block text-sm">
            <p className="font-semibold text-gray-800">Checking</p>
            <div className="flex items-center gap-1">
              <p className="text-gray-500 text-xs">Admin</p>
              <ChevronDown className="text-gray-500 h-4 w-4" />
            </div>
          </div>
        </div>
      </div>

      <div className="sm:hidden flex items-center gap-2 ml-auto">
        {!showMobileSearch ? (
          <Search
            className="text-gray-500 cursor-pointer h-4 w-4"
            onClick={() => setShowMobileSearch(true)}
          />
        ) : (
          <div className="flex justify-between items-center gap-1 border border-gray-300 rounded-lg px-1 text-xs outline-none transition-all duration-300">
            <input
              ref={searchInputRef}
              type="text"
              placeholder="Search..."
              className="w-1/2 py-1.5 px-1 text-xs outline-none "
              autoFocus
            />
            <Search className="h-4 w-4 py-[1px] text-gray-500 cursor-pointer"/>
          </div>
        )}
        <span className="text-gray-300">|</span>
        <img
          src={profilePic}
          alt="Profile"
          className="w-8 h-8 rounded-full object-cover"
        />
      </div>
    </nav>
  );
};

export default Header;
