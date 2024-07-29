"use client";
import React, { useEffect, lazy, Suspense } from "react";
import { useAppDispatch, useAppSelector } from "../hook/hook";
import { addToCart, getProducts } from "../redux/slice";
import Link from "next/link";
import { FaCartShopping } from "react-icons/fa6";
// import ProductComp from "./productComp";

export default function Products() {
  const cartSlice = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  const ProductComp = lazy(() => import("./productComp"));
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
                <FaCartShopping className=" h-10 w-6 text-black" />{" "}
                <p className=" text-black mt-1">:{cartSlice.cart.length}</p>
              </div>
            </Link>
          </div>
        </div>
      </nav>
      <Suspense fallback={<p className=" flex justify-center text-5xl">Loading.................</p>}>
        <ProductComp />
      </Suspense>
    </div>
  );
}
