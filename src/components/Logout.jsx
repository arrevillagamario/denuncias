"use client";

import React from "react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

const Logout = () => {
  const router = useRouter();
  function handle() {
    signOut();
    router.push("/");
  }

  return (
    <button
      className="underline text-teal-600 hover:text-teal-300"
      onClick={handle}
    >
      Log out
    </button>
  );
};

export default Logout;
