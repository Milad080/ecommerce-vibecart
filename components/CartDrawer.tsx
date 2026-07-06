"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { X, Minus, Plus } from "lucide-react";
import Link from "next/link";
import { useAtom, useStore } from "jotai";
import { cartMenuMenuState } from "./store";
const CartDrawer = () => {
  interface cartItem {
    id: string;
    name: string;
    price: number;
    quantity: number;
    image: string;
  }
  const [cartItems, setCartItems] = useState<cartItem[]>([
    {
      id: "1",
      name: "High-End Fragrance Collection for Males",
      price: 1615,
      quantity: 4,
      image: "images/products-main/perfume-1.jpg",
    },
    {
      id: "2",
      name: "High-End Fragrance Collection for Males",
      price: 2115,
      quantity: 4,
      image: "images/products-main/perfume-3.jpg",
    },
  ]);
  const [cartMenuOpen, setCartMenuOpen] = useAtom(cartMenuMenuState, {
    store: useStore(),
  });
  const handleOnClickCartMenu = () => {
    setCartMenuOpen(true);
    console.log(`clicked on cartMenu ${cartMenuOpen}`);
  };

  const removeItem = (id: string) => {
    setCartItems(cartItems.filter((item) => item.id != id));
  };
  const UpdateQuantity = (id: string, newQuantity: number) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, newQuantity) } : item,
      ),
    );
  };
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  return (
    <div className="relative">
      <Sheet open={cartMenuOpen} onOpenChange={setCartMenuOpen}>
        <SheetTrigger
          className="mt-2"
          render={
            <Button
              variant="ghost"
              size="icon"
              className="relative"
              onClick={() => handleOnClickCartMenu()}
            >
              <ShoppingBag size={24} />
              <span className="absolute top-0 left-0 inline-flex items-center justify-center px-1 py-0.5 text-[11px] font-bold leading-none text-white bg-black rounded-full">
                {cartItems.length}
              </span>
            </Button>
          }
        ></SheetTrigger>
        <SheetContent className="w-[90%] max-w-[450px] sm:max-w-[540px]">
          <SheetHeader>
            <SheetTitle className="subHeading">CART</SheetTitle>
          </SheetHeader>
          <div className="mt-4 space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center space-x-4 border-b-2 pb-3"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 sm:w-20 sm:h-20 object-cover"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-xs sm:text-sm tracking-wide">
                    {item.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 mt-1 ">
                    Buy More Save More
                  </p>
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center">
                      <button
                        className="p-1"
                        onClick={() =>
                          UpdateQuantity(item.id, item.quantity - 1)
                        }
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="mx-2">{item.quantity}</span>
                      <button
                        className="p-1"
                        onClick={() =>
                          UpdateQuantity(item.id, item.quantity + 1)
                        }
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="font-semibold text-xs sm:text-base">
                      ${item.price.toFixed(2)}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="absolute bottom-0 w-full mt-6 p-4 bg-white shadow-lg">
            <p className="text-sm text-gray-500">
              Tax included. Shipping calculated at checkout
            </p>
            <Link href="/checkout">
              <Button className="w-full mt-4 bg-black text-white hover:bg-gray-800">
                CHECKOUT - ${total.toFixed(2)}
              </Button>
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default CartDrawer;
