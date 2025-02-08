"use client";

import { UserButton, SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";
import { UserCircleIcon } from "lucide-react";

export const AuthButton = () => {
  return (
    <>
      <SignedIn>
        <UserButton />
        {/* Add Menu items for studio and user profiles */}
      </SignedIn>
      <SignedOut>
        <SignInButton mode='modal'>
          <Button
            variant='outline'
            className='px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-500 border-blue-600/20 rounded-full shadow-none'
          >
            <UserCircleIcon />
            Sign in
          </Button>
        </SignInButton>
      </SignedOut>
    </>
  );
};
