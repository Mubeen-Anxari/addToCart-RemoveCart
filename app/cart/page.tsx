"use client";
import {  useAppSelector } from "../hook/hook";
import Link from "next/link";
import { FaCartShopping } from "react-icons/fa6";
// import CartComp from "../components/cartComp";
import { lazy,Suspense } from "react";

export default function Cart() {
  const cartSlice = useAppSelector((state) => state.cart);
const CartComp=lazy(()=>import ("../components/cartComp"))
  return (
    <div>
      <nav className="bg-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-purple-900 text-lg font-bold">
            <Link href="/">Add to Cart</Link>
          </div>
          <div className="space-x-4">
            <Link
              className="text-white font-bold hover:text-white"
              href="/cart"
            >
              <div className=" flex ">
                <FaCartShopping className=" h-10 w-6 text-black" />:
                {cartSlice.cart.length}
              </div>
            </Link>
          </div>
        </div>
      </nav>
      <Suspense fallback={<p className=" text-5xl flex justify-center">Loading.............</p>}>
      <CartComp/>

      </Suspense>
    </div>
  );
}
