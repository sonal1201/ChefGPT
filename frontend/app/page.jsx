import React from "react";
import { ArrowRight, Star, Flame, Clock, Users } from "lucide-react";
import Image from "next/image";
import { SignUpButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { auth } from "@clerk/nextjs/server";
import { SITE_STATS, FEATURES, HOW_IT_WORKS_STEPS } from "@/lib/data";
import PricingSection from "@/components/PricingSection";
import Link from "next/link";

export default async function LandingPage() {
  const { has } = await auth();
  const subscriptionTier = has({ plan: "pro" }) ? "pro" : "free";

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
            {/* Text Content */}
            <div className="flex-1 text-center md:text-left">
              <Badge className="mb-6 rounded-full border border-orange-500/20 bg-gradient-to-r from-orange-500/10 via-amber-500/10 to-yellow-500/10 px-3 py-4 text-xs font-semibold uppercase tracking-[0.1em] text-orange-500 backdrop-blur-sm shadow-lg shadow-orange-500/10">
                <div className="mt-0.5">#1 AI Cooking Assistant</div>
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-[0.9] tracking-tight">
                Turn random ingredients into
                <br />
                <span className="relative italic text-6xl md:text-8xl font-extrabold text-orange-500 [text-shadow:1px_2px_0px_black]  drop-shadow-[0_8px_20px_rgba(249,115,22,0.45)]">
                  unforgettable
                  <span className="absolute -bottom-2 left-0 h-3 w-full rounded-full bg-orange-100/20 blur-xl"></span>
                </span>{" "}
                <span className="text-3xl md:text-4xl">meals.</span>
              </h1>

              <p className="text-lg md:text-xl text-stone-600 mb-6 max-w-2xl mx-auto md:mx-0 font-light">
                Snap a photo of your fridge. We&apos;ll tell you what to cook.
                Save money, reduce waste, and eat better tonight.
              </p>

              <Link href="/dashboard">
                <Button
                  size="xl"
                  variant="primary"
                  className="px-6 py-3 text-lg border-2 border-orange-500  hover:border-orange-600 cursor-pointer"
                >
                  Start Cooking Free <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>

              <p className="mt-3 text-sm text-stone-500">
                <span className="font-bold text-stone-900">10k+ cooks</span>{" "}
                joined last month
              </p>
            </div>

            {/* Hero Image */}
            <Card className="relative aspect-square md:aspect-4/5 border-4 border-stone-900 bg-stone-200 overflow-hidden py-0">
              <Image
                src="/pasta-dish.png"
                alt="Delicious pasta dish"
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />

              {/* Floating Card */}
              <Card className="absolute top-2 left-5 right-5 overflow-hidden rounded-[28px] border-3 border-stone-900 bg-white py-0  shadow-[0_20px_70px_rgba(0,0,0,0.5)]">
                <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-white/5 to-transparent" />

                <CardContent className="relative p-5">
                  <div className="mb-4 flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <Badge className="mb-3 rounded-full border border-orange-400/20 bg-orange-500/15 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.25em] text-orange-600">
                        Trending Recipe
                      </Badge>

                      <h3 className="truncate text-lg font-black leading-tight text-stone-900 md:text-xl">
                        Tomato Basil Pasta
                      </h3>

                      <div className="mt-2 flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>
                    </div>

                    <Badge className="shrink-0 rounded-full border border-emerald-800/20 bg-emerald-400/15 px-3 py-2 text-[11px] font-bold tracking-wide text-emerald-800 shadow-lg shadow-emerald-500/10">
                      98% MATCH
                    </Badge>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 border-t border-white/10  text-xs font-medium text-stone-300">
                    <span className="flex items-center gap-1.5 rounded-full border border-gray-300 bg-white/5 px-3 py-1.5 text-stone-900">
                      <Clock className="h-3.5 w-3.5 mb-1 text-stone-900" />
                      25 mins
                    </span>

                    <span className="flex items-center gap-1.5 rounded-full border border-gray-300 bg-white/5 px-3 py-1.5 text-stone-900">
                      <Users className="h-3.5 w-3.5 mb-1 text-stone-900" />1
                      servings
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-y border-stone-200 bg-stone-50 py-12">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 px-4 text-center md:grid-cols-4">
          {SITE_STATS.map((stat, i) => (
            <div
              key={i}
              className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm"
            >
              <div className="mb-2 text-3xl font-extrabold text-stone-900 md:text-4xl">
                {stat.val}
              </div>

              <Badge className="border-none bg-orange-100 text-xs font-semibold uppercase tracking-[0.2em] text-orange-700">
                {stat.label}
              </Badge>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="bg-stone-50 px-4 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 max-w-2xl">
            <h2 className="mb-4 text-5xl font-black tracking-tight text-stone-900 md:text-6xl">
              Your Smart Kitchen
            </h2>
            <p className="text-lg font-light text-stone-600 md:text-xl">
              Everything you need to master your meal prep.
            </p>
          </div>

          <div className="grid auto-rows-[280px] grid-cols-1 gap-5 md:grid-cols-3">
            {FEATURES.map((feature, index) => {
              const IconComponent = feature.icon;

              const cardClasses = ["md:col-span-2", "md:row-span-2", "", ""];

              return (
                <Card
                  key={index}
                  className={`group relative overflow-hidden rounded-[2rem] border border-stone-200 bg-white p-0 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${cardClasses[index]}`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <CardContent className="relative flex h-full flex-col justify-between p-8">
                    <div className="flex items-start justify-between">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100 text-orange-600 transition-all duration-300 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white">
                        <IconComponent className="h-7 w-7" />
                      </div>

                      <Badge className="rounded-full border border-stone-200 bg-stone-100 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-stone-500">
                        {feature.limit}
                      </Badge>
                    </div>

                    <div>
                      <h3 className="mb-3 text-2xl font-bold text-stone-900 md:text-3xl">
                        {feature.title}
                      </h3>

                      <p className="max-w-md text-base leading-relaxed text-stone-600 md:text-lg">
                        {feature.description}
                      </p>
                    </div>

                    <div className="mt-6 flex items-center text-sm font-semibold text-orange-600 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                      Learn More →
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="border-y border-stone-800 bg-stone-900 px-4 py-24 text-stone-50">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 max-w-2xl">
            <h2 className="mb-4 text-5xl font-black tracking-tight md:text-6xl">
              Cook in 3 Steps
            </h2>
            <p className="text-lg text-stone-400">
              Turn random ingredients into delicious recipes in minutes.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {HOW_IT_WORKS_STEPS.map((item, i) => (
              <Card
                key={i}
                className="group relative overflow-hidden rounded-[2rem] border border-stone-800 bg-stone-800/70 p-0 transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/30 hover:shadow-[0_20px_50px_rgba(249,115,22,0.12)]"
              >
                <CardContent className="relative flex h-full flex-col p-8">
                  <div className="mb-8 flex items-center justify-between">
                    <div className="text-6xl font-black leading-none text-orange-600">
                      {item.step}
                    </div>

                    <Badge className="rounded-full border-none bg-orange-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.25em] text-orange-300">
                      Step {item.step}
                    </Badge>
                  </div>

                  <h3 className="mb-4 text-2xl font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="text-base leading-relaxed text-stone-400">
                    {item.desc}
                  </p>

                  <div className="mt-8 h-1 w-12 rounded-full bg-orange-500 transition-all duration-300 group-hover:w-20" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing - Now Using Component */}
      <section className="py-24 px-4">
        <PricingSection subscriptionTier={subscriptionTier} />
      </section>
    </div>
  );
}
