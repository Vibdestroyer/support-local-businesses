"use client";

import { useEffect, useState } from "react";
import { useUser } from "@/lib/useUser";
import { supabase } from "@/lib/supabase";
import Link from "next/link";
import Image from "next/image";

const items = [
  "Alex donated $10 to Green Leaf Café",
  "Maria supported Downtown Books",
  "James left a review for Sunrise Bakery",
  "Local Market reached 100 supporters",
];

export default function TopMenuTickerLogin() {
  const [index, setIndex] = useState(0);
  const { user, loading } = useUser();

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-black/30 border-b border-white/10">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">

        {/* LEFT: Brand */}
        <div className="flex items-center gap-6">
          <Link
            href="/about"
            className="text-sm font-semibold tracking-widest text-white uppercase hover:text-purple-400 transition"
          >
            Marmot Association
          </Link>

          <Link
            href="/"
            className="text-sm text-zinc-300 hover:text-white transition"
          >
            Home
          </Link>
        </div>

        

        {/* CENTER: Ticker (hidden on small screens) */}
        <div className="hidden md:block overflow-hidden whitespace-nowrap text-sm text-zinc-400">
          <span key={index} className="inline-block animate-fade">
            {items[index]}
          </span>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-4">
          {/* Desktop Auth */}
          <div className="hidden md:flex items-center gap-4">
            {!loading && !user && (
              <>
                <Link
                  href="/signup"
                  className="rounded-md bg-purple-600 px-4 py-2 text-sm font-medium text-white hover:bg-purple-500 transition"
                >
                  Sign Up
                </Link>

                <Link
                  href="/login"
                  className="rounded-md border border-white/20 px-4 py-2 text-sm text-white hover:bg-white/10 transition"
                >
                  Log In
                </Link>
              </>
            )}

            {!loading && user && (
              <>
                <span className="text-xs text-zinc-400">
                  {user?.user_metadata?.username || user?.email}
                </span>

                <button
                  onClick={() => supabase.auth.signOut()}
                  className="rounded-md border border-white/20 px-4 py-2 text-sm text-white hover:bg-white/10 transition"
                >
                  Log Out
                </button>
              </>
            )}
          </div>

          {/* Mobile Profile Icon */}
          <Link href="/login" className="md:hidden">
            <Image
              src="/SLB_Suit.png"
              alt="Profile"
              width={36}
              height={36}
              className="rounded-full"
            />
          </Link>
        </div>
      </div>
    </nav>
  );
}
