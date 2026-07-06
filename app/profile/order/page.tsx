"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { XCircle } from "lucide-react";
import { FaLink } from "react-icons/fa";
import Link from "next/link";
const orders = [
  {
    id: "66ed5ec9d316594990e71a19",
    products: ["/images/products-main/perfume-1.jpg"],
    paymentMethod: "COD",
    total: "$ 2400",
    paid: false,
  },
  {
    id: "66ec30c7671caca80b89518e",
    products: ["/images/products-main/perfume-2.jpg"],
    paymentMethod: "COD",
    total: "$ 5600",
    paid: false,
  },
  {
    id: "66dbb70be5922373191adf66",
    products: ["/images/products-main/perfume-3.jpg"],
    paymentMethod: "COD",
    total: "$ 1280",
    paid: false,
  },
  {
    id: "66cab025fa11686711ff2fc8",
    products: ["/images/products-main/perfume-4.jpg"],
    paymentMethod: "RazorPay",
    total: "$ 750",
    paid: false,
  },
];
const ordersPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className=" heading text-center mb-6">MY ORDERS</h1>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-4">
          <TabsTrigger value="all">All Orders</TabsTrigger>
          <TabsTrigger value="paid">Paid Order</TabsTrigger>
          <TabsTrigger value="unpaid">Unpaid Order</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="overflow-x-auto no-scrollbar">
          <Table>
            <TableHeader>
              <TableRow className=" text-black">
                <TableHead className="w-[250px] ">Order Id</TableHead>
                <TableHead>Products</TableHead>
                <TableHead>Payment Method</TableHead>
                <TableHead>Total</TableHead>
                <TableHead>Paid</TableHead>
                <TableHead>View</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell className="font-medium underline text-blue-500">
                    <Link href="/order">{order.id}</Link>
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      {order.products.map((product, i) => (
                        <img
                          key={i}
                          src={product}
                          alt={`product ${i + 1}`}
                          className="rounded-full bg-gray-200 w-16 h-16"
                        />
                      ))}
                    </div>
                  </TableCell>
                  <TableCell>{order.paymentMethod}</TableCell>
                  <TableCell>{order.total}</TableCell>
                  <TableCell>
                    {order.paid ? (
                      <span className="text-green-500">🗸</span>
                    ) : (
                      <XCircle className="text-red-500 size-5" />
                    )}
                  </TableCell>
                  <TableCell>
                    <Link href="/order">
                      <button className="text-blue-500 hover:text-blue-700 cursor-pointer">
                        <FaLink size={24} color="black" />
                      </button>
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ordersPage;
