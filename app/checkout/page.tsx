"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  CheckIcon,
  CreditCardIcon,
  MapPinIcon,
  TicketIcon,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

type Steps = {
  title: string;
  icon: React.ReactNode;
};
const steps: Steps[] = [
  { title: "Delivery Address", icon: <MapPinIcon className="size-5" /> },
  { title: "Apply Coupon", icon: <TicketIcon className="size-5" /> },
  { title: "Choose Payment", icon: <CreditCardIcon className="size-5" /> },
];
type OrderItems = {
  name: string;
  size: string;
  quantity: number;
  price: number;
  image: string;
};
const orderItems: OrderItems[] = [
  {
    name: "High-End Fragrance Collection for Males",
    size: "300ml",
    quantity: 1,
    price: 999.0,
    image: "images/products-main/perfume-1.jpg",
  },
  {
    name: "High-End Fragrance Collection for Females",
    size: "200ml",
    quantity: 1,
    price: 799.0,
    image: "images/products-main/perfume-3.jpg",
  },
];
const CheckoutPage = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [couponCode, setCouponCode] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const subtotal = orderItems.reduce((sum, item) => sum + item.price, 0);
  const discount = 600;
  const total = subtotal - discount;
  const handleNext = () => {
    if (currentStep < steps.length - 1) {
    }
    setCurrentStep(currentStep + 1);
  };
  const handlePrevious = () => {
    if (currentStep < steps.length - 1) {
    }
    setCurrentStep(currentStep - 1);
  };
  return (
    <div className="container mx-auto max-w-7xl px-6 sm:px-12 rounded-lg py-5 bg-gray-100">
      <h1 className="heading mb-4 text-center mr-8 max-[500px]:mr-0 mt-4 md:mt-6 md:mb-5">
        CHECKOUT
      </h1>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-2/3">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-start">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center w-full sm:w-auto">
                <div
                  className={`rounded-full p-2 ${
                    index <= currentStep
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground"
                  }`}
                >
                  {index < currentStep ? (
                    <CheckIcon className="size-5" />
                  ) : (
                    step.icon
                  )}
                </div>

                <div className="ml-3 flex-1 sm:flex-none sm:mr-8">
                  <p
                    className={`text-sm font-medium ${
                      index <= currentStep
                        ? "text-primary"
                        : "text-secondary-foreground"
                    }`}
                  >
                    {step.title}
                  </p>
                </div>

                {index < steps.length - 1 && (
                  <div className="hidden sm:block h-0.5 w-8 bg-border mx-4"></div>
                )}
              </div>
            ))}
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="subHeading">
                {steps[currentStep].title}
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-6">
              {currentStep === 0 && (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="First Name" />
                    </div>

                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Last Name" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="phoneNumber">Phone Number</Label>
                    <Input id="phoneNumber" placeholder="Phone Number" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="zipCode">Zip Code / Postal Code</Label>
                      <Input
                        id="zipCode"
                        placeholder="Zip Code / Postal Code"
                      />
                    </div>

                    <div>
                      <Label htmlFor="city">City</Label>
                      <Input id="city" placeholder="City" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="state">State</Label>
                      <Input id="state" placeholder="State" />
                    </div>

                    <div>
                      <Label htmlFor="country">Country</Label>
                      <Input
                        id="country"
                        placeholder="Country"
                        defaultValue="Iran"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="address1">Address 1</Label>
                    <Input id="address1" placeholder="Address 1" />
                  </div>

                  <div>
                    <Label htmlFor="address2">Address 2</Label>
                    <Input id="address2" placeholder="Address 2" />
                  </div>

                  <Button className="w-full h-9" onClick={handleNext}>
                    Save Address
                  </Button>
                </div>
              )}

              {currentStep === 1 && (
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="couponCode">Enter Coupon Code</Label>

                    <Input
                      id="couponCode"
                      placeholder="Enter coupon code"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                    />
                  </div>

                  <Button className="w-full" onClick={handleNext}>
                    Apply Coupon
                  </Button>
                </div>
              )}

              {currentStep === 2 && (
                <div className="space-y-4">
                  <RadioGroup
                    value={paymentMethod}
                    onValueChange={setPaymentMethod}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="cod" id="cod" />
                      <Label htmlFor="cod">Cash on Delivery (COD)</Label>
                    </div>

                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="razorpay" id="razorpay" />
                      <Label htmlFor="razorpay">Razorpay</Label>
                    </div>
                  </RadioGroup>

                  <Link href="/order">
                    <Button className="w-full" onClick={handleNext}>
                      Confirm Payment Method
                    </Button>
                  </Link>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <div className="mt-4 flex flex-col-reverse gap-3 sm:flex-row sm:justify-between">
            {currentStep > 0 && (
              <Button
                variant="outline"
                onClick={handlePrevious}
                className="w-full sm:w-auto"
              >
                BACK
              </Button>
            )}

            {currentStep > steps.length - 1 && (
              <Button
                variant="outline"
                onClick={handleNext}
                className="w-full sm:w-auto"
              >
                CONTINUE
              </Button>
            )}
          </div>
        </div>
        <div className="lg:w-1/3">
          <Card>
            <CardHeader>
              <CardTitle className="subHeading">Order Summary</CardTitle>
            </CardHeader>

            <CardContent>
              <div className="space-y-4 mb-3">
                {orderItems.map((item, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover"
                    />

                    <div>
                      <h3 className="para">{item.name}</h3>
                      <p className="text-sm text-gray-600">Size: {item.size}</p>
                      <p className="text-sm text-gray-600">
                        Qty: {item.quantity}
                      </p>
                      <p className="font-medium">$ {item.price.toFixed(2)}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t pt-4">
                <div className="flex justify-between">
                  <span>Subtotal ({orderItems.length} Items):</span>
                  <span>$ {subtotal.toFixed(2)}</span>
                </div>

                <div className="flex justify-between text-green-600">
                  <span>Cart Discount:</span>
                  <span>- $ {discount.toFixed(2)}</span>
                </div>

                <div className="flex justify-between">
                  <span>Shipping Charges:</span>
                  <span className="text-green-600">Free</span>
                </div>

                <div className="flex justify-between font-bold mt-2">
                  <span>Total:</span>
                  <span>$ {total.toFixed(2)}</span>
                </div>
              </div>

              <Link href={"/order"}>
                <Button className="w-full mt-4 bg-gray-200 text-gray-800 hover:bg-gray-300">
                  Place Order with COD
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
