"use client";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { User } from "lucide-react";
import { useAtom, useStore } from "jotai";
import { accountMenuState } from "./store";

const AccountPopup = () => {
  const [accMenuOpen, setAccMenuOpen] = useAtom(accountMenuState, {
    store: useStore(),
  });
  const handleOnClickAccMenu = () => {
    setAccMenuOpen(true);
    console.log(`clicked on accMenu ${accMenuOpen}`);
  };
  return (
    <Dialog open={accMenuOpen} onOpenChange={setAccMenuOpen}>
      <DialogTrigger
        render={
          <Button
            variant="ghost"
            size="icon"
            className="lg:flex"
            onClick={() => handleOnClickAccMenu()}
          >
            <User size="24" />
          </Button>
        }
      ></DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogTitle className="heading text-center">Login/SignUp</DialogTitle>
        <Card>
          <Tabs defaultValue="login" className="px-2">
            <TabsList className="grid grid-cols-2 w-full items-start">
              <TabsTrigger value="login">login</TabsTrigger>
              <TabsTrigger value="signup">sign Up</TabsTrigger>
            </TabsList>
            <TabsContent value="login">
              <CardHeader>
                <CardTitle>login</CardTitle>
                <CardDescription>
                  Enter your credentials to access your account
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 mt-6 mb-3">
                <div className="space-y-2">
                  <Label htmlFor="email-login">Email</Label>
                  <Input
                    id="email-login"
                    name="email"
                    type="email"
                    placeholder="enter your email"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password-login">password</Label>
                  <Input
                    id="password-login"
                    name="password"
                    type="password"
                    placeholder="enter password"
                    required
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button type="submit" className="w-full">
                  login
                </Button>
              </CardFooter>
            </TabsContent>
            <TabsContent value="signup">
              <CardHeader>
                <CardTitle>Sign Up</CardTitle>
                <CardDescription>
                  create a new account to get started!
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 mt-6 mb-3">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email-login">Email</Label>
                  <Input
                    id="email-login"
                    name="email"
                    type="email"
                    placeholder="enter your email"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password-login">password</Label>
                  <Input
                    id="password-login"
                    name="password"
                    type="password"
                    placeholder="enter password"
                    required
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button type="submit" className="w-full">
                  login
                </Button>
              </CardFooter>
            </TabsContent>
          </Tabs>
        </Card>
      </DialogContent>
    </Dialog>
  );
};

export default AccountPopup;
