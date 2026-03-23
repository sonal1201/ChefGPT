"use client";

import { UserButton } from "@clerk/nextjs";
import { CookingPot, Refrigerator } from "lucide-react";
import React from "react";

const UserDropDown = () => {
  return (
    <div>
      <UserButton>
        <UserButton.MenuItems>
          <UserButton.Link
            label="My recipes"
            labelIcon={<CookingPot size={16} />}
            href="/recipes"
          />
        </UserButton.MenuItems>

        <UserButton.MenuItems>
          <UserButton.Link
            label="My pantry"
            labelIcon={<Refrigerator size={16} />}
            href="/pantry"
          />

          <UserButton.Action label="manageAccount" />
        </UserButton.MenuItems>
      </UserButton>
    </div>
  );
};

export default UserDropDown;
