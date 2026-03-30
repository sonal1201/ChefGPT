import {
  clerkMiddleware,
  clerkClient,
  requireAuth,
  getAuth,
} from "@clerk/express";

import { prisma } from "../config/db.confid.js";

export const getUser = async (req, res) => {
  try {
    const { userId } = getAuth(req);

    const user = await clerkClient.users.getUser(userId);

    if (!user) {
      res.status(404).json({
        message: "User not found",
      });
    }

    return res.json({ user });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to get user",
      error: error.message,
    });
  }
};

export const checkUser = async (req, res) => {
  try {
    const { userId, has } = getAuth(req);
    if (!userId) {
      return res.status(404).json({
        success: false,
        message: "Unauthorized",
      });
    }

    const user = await clerkClient.users.getUser(userId);

    console.log("userId:", userId);
    console.log("clerk user:", user.id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "Clerk user not found",
      });
    }

    const primaryEmail = user.emailAddresses[0].emailAddress;
    console.log(primaryEmail);

    const subscriptionTier = has?.({ plan: "pro" }) ? "PRO" : "FREE";

    console.log("subscriptionTier:", subscriptionTier);

    let existingUser = await prisma.user.findUnique({
      where: {
        clerkId: user.id,
      },
    });

    if (existingUser) {
      if (existingUser.subscriptionTier !== subscriptionTier) {
        existingUser = await prisma.user.update({
          where: {
            clerkId: user.id,
          },
          data: {
            subscriptionTier,
          },
        });
      }

      return res.status(200).json({
        success: true,
        message: "User already exists",
        user: {
          ...existingUser
        },
      });
    }

    const newUser = await prisma.user.create({
      data: {
        clerkId: user.id,
        firstname: user.firstName || "",
        lastname: user.lastName || "",
        email: primaryEmail || null,
        imageUrl: user.imageUrl,
        subscriptionTier,
      },
    });

    return res.status(201).json({
      success: true,
      message: "User created successfully",
      user: {
        ...newUser,
      },
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to check user",
      error: error.message,
    });
  }
};
