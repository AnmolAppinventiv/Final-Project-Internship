'use client'
import { useState } from "react";
import Link from "next/link";
import MenuIcon from '@mui/icons-material/Menu';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <div className="bg-slate-300 flex justify-between items-center p-1">
        <img src="https://ecomposer.app/images/logo-text.png" alt="Logo" className="w-[18%] md:w-[12%] " />
        <div className="hidden md:flex pt-1 gap-4 pr-12 text-xl font-bold text-[#3735A1]">
          <Link href="/leadGeneration" className="hover:text-slate-300 hover:bg-[#3735A1] rounded-full p-2 transition ease-in duration-200">Lead Generation</Link>
          <Link href="/" className="hover:text-slate-300 hover:bg-[#3735A1] rounded-full p-2 transition ease-in duration-200">Contact Us</Link>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-[#3735A1]">
            {isMenuOpen ? <MenuIcon className="text-xl" /> : <MenuIcon className="text-xl" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="bg-slate-300 md:hidden flex flex-col items-center py-2">
          <Link href="/leadGeneration" className="hover:text-slate-300 hover:bg-[#3735A1] rounded-full p-2 text-xl font-bold transition ease-in duration-200">Lead Generation</Link>
          <Link href="/" className="hover:text-slate-300 hover:bg-[#3735A1] rounded-full p-2 text-xl font-bold transition ease-in duration-200">Contact Us</Link>
        </div>
      )}
    </>
  );
}
