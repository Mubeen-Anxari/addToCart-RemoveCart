"use client";
import { useAppDispatch, useAppSelector } from "../hook/hook";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import { removeCart } from "../redux/slice";
export default function CartComp() {
  const cartSlice = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  return (
    <div>
      <div className=" pt-4 bg-cyan-900 grid py-10 grid-cols-1 gap-6 lg:grid-cols-3">
        {cartSlice?.cart?.map((item:any) => {
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
                  <button
                    onClick={() => {
                      dispatch(removeCart(item.id));
                    }}
                    className=" bg-purple-600 cursor-pointer text-white p-2 rounded-lg"
                  >
                    Remove cart
                  </button>
                </CardHeader>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
}
