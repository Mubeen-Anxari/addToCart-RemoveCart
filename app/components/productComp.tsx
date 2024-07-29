"use client";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hook/hook";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import { addToCart, getProducts } from "../redux/slice";
import Link from "next/link";
import { FaCartShopping } from "react-icons/fa6";

export default function ProductComp() {
  const cartSlice = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <div>
      
      <div className=" pt-4 bg-cyan-900 py-10 grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-5">
        {cartSlice?.products?.map((item) => {
          return (
            <div>
              <Card className="py-4 flex gap-2 justify-center items-center bg-white h-full lg:h-[550px]  rounded-lg  w-[450px]">
                <CardBody className="overflow-visible py-2">
                  <Image
                    alt="Card background"
                    className="object-cover bg-transparent rounded-xl"
                    src={item.image}
                    width={300}
                    height={300}
                  />
                </CardBody>
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                  <p className="text-tiny uppercase font-bold">{item.title}</p>
                  <small className="text-default-500">
                    {item.description.slice(0, 250)}
                  </small>
                  <h4 className="font-bold text-large">${item.price}</h4>
                  <div className="flex  justify-center">
                    <button
                      onClick={() => {
                        dispatch(addToCart(item));
                      }}
                      className=" bg-purple-600  cursor-pointer text-white p-2 rounded-lg"
                    >
                      Add to cart
                    </button>
                  </div>
                </CardHeader>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
}
