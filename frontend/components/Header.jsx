import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import React from "react";
import { Button } from "./ui/button";
import ChefGPTLogo from "./ui/ChefGPTLogo";
import Link from "next/link";
import { CookingPot, Refrigerator } from "lucide-react";
import UserDropDown from "./UserDropDown";

const Header = () => {
  return (
    <header className="fixed top-0 w-full border-b border-stone-200 bg-stone-50/80 backdrop-blur-md supports-backdrops-filter:bg-stone-50/60:">
      <nav className="container mx-auto px-4 h-16  flex items-center justify-between">
        <ChefGPTLogo />

        {/* Nav Links */}
        <div className="hidden md:flex items-center space-x-6 text-sm font-medium text-stone-600 gap-3">
          <Link
            href={"/recipes"}
            className="hover:text-orange-600 transition-colors flex gap-1.5 items-center"
          >
            <CookingPot className="w-4 h-4" />
            My recipes
          </Link>
          <Link
            href={"/pantry"}
            className="hover:text-orange-600 transition-colors flex gap-1.5 items-center"
          >
            <Refrigerator className="w-4 h-4" />
            My Pantry
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <Show when="signed-out">
            <SignInButton mode="modal">
              <Button
                variant="ghost"
                className="text-stone-600 hover:text-orange-600 hover:bg-orange-100/80 font-medium rounded-full px-4"
              >
                Sign In
              </Button>
            </SignInButton>
            <SignUpButton mode="modal">
              <Button variant="primary" className={"rounded-full px-6"}>
                Get Started
              </Button>
            </SignUpButton>
          </Show>
          <Show when="signed-in">
            <UserDropDown />
          </Show>
        </div>
      </nav>
    </header>
  );
};

export default Header;
