"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import PricingSection from "./PricingSection";

const PricingModal = ({ subscriptionTier = "FREE", children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const canOpen = subscriptionTier === "FREE";
  return (
    <Dialog open={isOpen} onOpenChange={canOpen ? setIsOpen : undefined}>
      <DialogTrigger asChild disabled={!canOpen}>
        {children}
      </DialogTrigger>
      <DialogContent className="p-8 pt-4 sm:max-w-4xl">
        <DialogTitle className="sr-only text-center text-2xl font-bold mb-4">
          Pricing Plans
        </DialogTitle>

        <PricingSection
          subscriptionTier={subscriptionTier}
          isModal={true}
          isClose={() => setIsOpen(false)}
        />
      </DialogContent>
    </Dialog>
  );
};

export default PricingModal;
