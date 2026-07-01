"use client";

import { Grid, Home, Menu, ShoppingBag, User } from "lucide-react";
import Link from "next/link";
import { useStore, useAtom } from "jotai";
import {
  hamburgerMenuState,
  cartMenuMenuState,
  accountMenuState,
} from "./store";
const MobileBottomBar = () => {
  const [hamMenuOpen, setHamMenuOpen] = useAtom(hamburgerMenuState, {
    store: useStore(),
  });
  const [accMenuOpen, setAccMenuOpen] = useAtom(accountMenuState, {
    store: useStore(),
  });
  const [cartMenuOpen, setCartMenuOpen] = useAtom(cartMenuMenuState, {
    store: useStore(),
  });
  const handleOnClickHamburgerMenu = () => {
    setHamMenuOpen(true);
    console.log(`clicked on hamMenu ${hamMenuOpen}`);
  };
  const handleOnClickCartMenu = () => {
    setCartMenuOpen(true);
    console.log(`clicked on cartMenu ${cartMenuOpen}`);
  };
  const handleOnClickAccMenu = () => {
    setAccMenuOpen(true);
    console.log(`clicked on accMenu ${accMenuOpen}`);
  };
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 md:hidden">
      <div className="flex justify-around items-center h-16">
        <Link
          href="/"
          className="flex flex-col items-center text-gray-600 hover:text-black"
        >
          <Home className="size-6" />
          <span className="text-xs mt-1 para">Home</span>
        </Link>
        <Link
          href="#"
          onClick={() => handleOnClickHamburgerMenu()}
          className="flex flex-col items-center text-gray-600 hover:text-black"
        >
          <Menu className="size-6" />
          <span className="text-xs mt-1 para">Menu</span>
        </Link>
        <Link
          href="/shop"
          className="flex flex-col items-center text-gray-600 hover:text-black"
        >
          <Grid className="size-6" />
          <span className="text-xs mt-1 para">Shop</span>
        </Link>
        <Link
          href="#"
          onClick={() => handleOnClickCartMenu()}
          className="flex flex-col items-center text-gray-600 hover:text-black"
        >
          <ShoppingBag className="size-6" />
          <span className="text-xs mt-1 para">Cart</span>
        </Link>
        <Link
          href="#"
          onClick={() => handleOnClickAccMenu()}
          className="flex flex-col items-center text-gray-600 hover:text-black"
        >
          <User className="size-6" />
          <span className="text-xs mt-1 para">Account</span>
        </Link>
      </div>
    </nav>
  );
};

export default MobileBottomBar;
