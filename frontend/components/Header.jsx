import { Show, SignInButton, SignUpButton } from "@clerk/nextjs";
import React from "react";
import { Button } from "./ui/button";
import ChefGPTLogo from "./ui/ChefGPTLogo";
import Link from "next/link";
import { CookingPot, Refrigerator, Sparkles, Menu } from "lucide-react";
import UserDropDown from "./UserDropDown";
import { checkUser } from "@/apis/checkUsers";
import PricingModal from "./PricingModal";
import { Badge } from "./ui/badge";

const Header = async () => {
  const user = await checkUser();

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-stone-100/70 backdrop-blur-3xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 md:px-8">
        {/* Logo */}
        <div className="flex items-center gap-10">
          <ChefGPTLogo />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <Link
              href="/recipes"
              className="group relative flex items-center gap-2  text-stone-900 transition-colors duration-300 hover:text-orange-400"
            >
              <CookingPot className="h-4 w-4" />
              <span>My Recipes</span>
              <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>

            <Link
              href="/pantry"
              className="group relative flex items-center gap-2 text-stone-900 transition-colors duration-300 hover:text-orange-400"
            >
              <Refrigerator className="h-4 w-4" />
              <span>My Pantry</span>
              <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-3 md:gap-4">
          <Show when="signed-out">
            <SignInButton mode="modal">
              <Button
                variant="ghost"
                className="hidden md:flex rounded-full border border-orange-100 bg-stone-200 px-5  text-stone-900 transition-all duration-300 hover:border-orange-500/30 hover:bg-orange-500/10 hover:text-orange-400"
              >
                Sign In
              </Button>
            </SignInButton>

            <SignUpButton mode="modal">
              <Button className="rounded-full bg-gradient-to-r from-orange-500 to-amber-500 px-6 text-white shadow-lg shadow-orange-500/20 transition-all duration-300 hover:scale-105 hover:shadow-orange-500/40">
                Get Started
              </Button>
            </SignUpButton>
          </Show>

          <Show when="signed-in">
            {user && (
              <PricingModal subscriptionTier={user.subscriptionTier}>
                <Badge
                  className={`hidden sm:flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold transition-all duration-300 cursor-pointer ${
                    user.subscriptionTier === "PRO"
                      ? "border-orange-400/30 bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/20"
                      : "border-white/10 bg-white/5 text-stone-300 hover:border-orange-500/30 hover:bg-orange-500/10 hover:text-orange-300"
                  }`}
                >
                  <Sparkles
                    className={`h-3.5 w-3.5 ${
                      user.subscriptionTier === "PRO"
                        ? "text-white"
                        : "text-orange-400"
                    }`}
                  />

                  <span>
                    {user.subscriptionTier === "PRO" ? "Pro Chef" : "Free Plan"}
                  </span>
                </Badge>
              </PricingModal>
            )}

            <div className="flex items-center justify-center rounded-full border border-white/10 bg-white/5 p-1.5 backdrop-blur-xl">
              <UserDropDown />
            </div>
          </Show>

          {/* Mobile Menu Icon */}
          <button className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-stone-300 transition-all duration-300 hover:bg-white/10 md:hidden">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
