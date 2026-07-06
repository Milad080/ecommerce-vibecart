import NextLink from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const OrderPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-6 md:py-10">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="rounded-lg bg-white shadow-lg">
          <div className="p-6 lg:p-10">
            {/* Back */}
            <div className="mb-8 flex items-center gap-2 text-sm font-medium text-gray-600">
              <Link href="/">
                <button className="flex items-center cursor-pointer">
                  <ArrowLeft className="h-5 w-5" />
                  <span>Home</span>
                </button>
              </Link>
            </div>

            {/* Header */}
            <div className="mb-10 text-center">
              <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">
                THANK YOU Fatimah
              </h1>
              <p className="mt-2 text-gray-500">Order ID: VC-451678</p>
            </div>

            {/* Order Summary */}
            <div className="mb-8 grid grid-cols-1 overflow-hidden rounded-xl border sm:grid-cols-2 lg:grid-cols-5">
              {[
                ["Order Number", "VC-451678"],
                ["Date", "Nov 26, 2026"],
                ["Email", "fatimah.zizi@test.com"],
                ["Total", "$404.00"],
                ["Payment", "Cash on delivery (COD)"],
              ].map(([title, value]) => (
                <div
                  key={title}
                  className="border-b p-5 last:border-b-0 sm:border-r sm:last:border-r-0 lg:border-b-0"
                >
                  <p className="mb-1 text-sm font-semibold text-gray-500">
                    {title}
                  </p>
                  <p className="break-words font-medium">{value}</p>
                </div>
              ))}
            </div>

            {/* Main Content */}
            <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
              {/* Left */}
              <div className="space-y-6">
                {/* Confirmation */}
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-green-600" />

                  <div>
                    <h2 className="text-2xl font-semibold">
                      Your Order Is Confirmed
                    </h2>

                    <p className="mt-1 text-gray-600">
                      Your order will be delivered within 2–3 business days to
                      the address below.
                    </p>
                  </div>
                </div>

                {/* Address */}
                <div className="rounded-xl bg-green-50 p-5">
                  <div className="mb-3 flex flex-col gap-1 sm:flex-row sm:justify-between">
                    <span className="font-semibold">Fatimah</span>
                    <span className="text-gray-600">09123456789</span>
                  </div>

                  <p className="leading-7 text-gray-600">
                    450 Maldon Rd
                    <br />
                    Anchorage, Alabama
                    <br />
                    ZipCode: 99504
                    <br />
                    United States
                  </p>
                </div>

                {/* Product */}
                <div className="rounded-xl border p-5">
                  <div className="mb-5 flex items-center justify-between">
                    <span className="font-semibold">2 Items</span>
                    <span className="font-semibold">$820</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="flex flex-col gap-4 sm:flex-row">
                      <img
                        src="images/products-main/perfume-1.jpg"
                        alt="Product"
                        className="h-28 w-28 rounded-lg object-cover"
                      />

                      <div className="flex-1">
                        <h3 className="font-semibold">
                          High-end fragrance collection for males
                        </h3>

                        <p className="mt-1 text-sm text-gray-500">
                          300 ml • Qty 1
                        </p>

                        <div className="mt-3 flex flex-wrap items-center gap-2">
                          <span className="font-semibold">$320</span>

                          <span className="text-sm text-gray-400 line-through">
                            $368
                          </span>

                          <span className="text-sm font-medium text-green-600">
                            29% OFF
                          </span>
                        </div>
                      </div>
                    </div>
                    {/* product 2 */}
                    <div className="flex flex-col gap-4 sm:flex-row">
                      <img
                        src="images/products-main/perfume-3.jpg"
                        alt="Product"
                        className="h-28 w-28 rounded-lg object-cover"
                      />

                      <div className="flex-1">
                        <h3 className="font-semibold">
                          High-end fragrance collection for males
                        </h3>

                        <p className="mt-1 text-sm text-gray-500">
                          300 ml • Qty 1
                        </p>

                        <div className="mt-3 flex flex-wrap items-center gap-2">
                          <span className="font-semibold">$520</span>

                          <span className="text-sm text-gray-400 line-through">
                            $770
                          </span>

                          <span className="text-sm font-medium text-green-600">
                            19% OFF
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right */}
              <aside>
                <div className="sticky top-6 rounded-xl border border-green-200 bg-green-50 p-6">
                  <h2 className="mb-5 text-xl font-semibold">Bill Details</h2>

                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Total MRP</span>
                      <span>$468</span>
                    </div>

                    <div className="flex justify-between text-green-600">
                      <span>Total Discount</span>
                      <span>−$134</span>
                    </div>

                    <div className="flex justify-between">
                      <span>Shipping</span>
                      <span>$50</span>
                    </div>

                    <div className="flex justify-between">
                      <span>COD Charges</span>
                      <span>$20</span>
                    </div>

                    <div className="flex justify-between border-t pt-4 text-lg font-semibold">
                      <span>Subtotal</span>
                      <span>$404</span>
                    </div>
                  </div>

                  <NextLink href="/shop" className="mt-6 block">
                    <Button className="w-full">Continue Shopping</Button>
                  </NextLink>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
