"use client";

import React from "react";
import { Check } from "lucide-react";
import { SignInButton, useAuth } from "@clerk/nextjs";
import { CheckoutButton } from "@clerk/nextjs/experimental";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function PricingSection({ subscriptionTier = "FREE" }) {
  const { userId } = useAuth();
  const isSignedIn = !!userId;

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-7">
        <h2 className="text-5xl md:text-4xl text-center font-bold ">
          Simple Pricing
        </h2>
        <p className="text-md text-stone-700  text-center font-light">
          Start for free. Upgrade to become a master chef.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <Card className="border-2 border-stone-200 bg-white">
          <CardHeader>
            <CardTitle className="text-3xl font-bold">Sous Chef</CardTitle>

            <div className="text-5xl font-bold text-stone-900">
              $0
              <span className="text-lg font-normal text-stone-400">/mo</span>
            </div>

            <CardDescription className="text-stone-600 font-light text-base">
              Perfect for casual weekly cooks.
            </CardDescription>
          </CardHeader>

          <CardContent>
            <ul className="space-y-4">
              {[
                "10 pantry scans per month",
                "5 AI meal recommendations",
                "Standard support",
                "Standard recipes",
              ].map((item, i) => (
                <li key={i} className="flex gap-3 text-stone-700">
                  <Check className="h-5 w-5 shrink-0 mt-0.5 text-stone-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>

          <CardFooter className="mt-auto">
            <Link href="/dashboard" className="w-full">
              <Button
                variant="outline"
                className="w-full border-2 border-stone-900 hover:bg-stone-900 hover:text-white"
              >
                Get Started
              </Button>
            </Link>
          </CardFooter>
        </Card>

        <Card className="relative border-2 border-orange-600 bg-orange-50">
          <Badge className="absolute top-0 right-0 rounded-none rounded-bl-lg bg-orange-600 text-white font-bold uppercase tracking-wide border-none">
            Most Popular
          </Badge>

          <CardHeader>
            <CardTitle className="text-3xl font-bold text-orange-900">
              Head Chef
            </CardTitle>

            <div className="text-5xl font-bold text-orange-600">
              $7.99
              <span className="text-lg font-normal text-orange-400">/mo</span>
            </div>

            <CardDescription className="text-orange-800/70 font-light text-base">
              For the serious home cook.
            </CardDescription>
          </CardHeader>

          <CardContent>
            <ul className="space-y-4">
              {[
                "Unlimited pantry scans",
                "Unlimited AI recipes",
                "Priority support",
                "Recipes with nutritional analysis",
                "Chef's tips & tricks",
                "Ingredient substitutions",
              ].map((item, i) => (
                <li key={i} className="flex gap-3 text-orange-950">
                  <Badge className="bg-orange-200 p-1 rounded-full h-6 w-6 flex items-center justify-center border-none">
                    <Check className="h-4 w-4 text-orange-700" />
                  </Badge>
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>

          <CardFooter>
            <div className="w-full">
              {isSignedIn ? (
                <CheckoutButton
                  planId="cplan_3BfXz2y7HK8yVM1PhTY9vV6UECE"
                  planPeriod="month"
                  checkoutProps={{
                    appearance: {
                      elements: {
                        drawerRoot: {
                          zIndex: 2000,
                        },
                      },
                    },
                  }}
                >
                  <Button
                    disabled={subscriptionTier === "PRO"}
                    className="w-full bg-orange-600 hover:bg-orange-700 disabled:bg-orange-400 disabled:cursor-not-allowed text-white"
                  >
                    {subscriptionTier === "PRO"
                      ? "Subscribed"
                      : "Subscribe Now"}
                  </Button>
                </CheckoutButton>
              ) : (
                <SignInButton mode="modal">
                  <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white">
                    Login to Subscribe
                  </Button>
                </SignInButton>
              )}
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
