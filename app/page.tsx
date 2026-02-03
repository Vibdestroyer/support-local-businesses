"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import BusinessCard from "../components/BusinessCard";


export default function Home() {

  const [businesses, setBusinesses] = useState<any[]>([]);


  useEffect(() => {
    const fetchBusinesses = async () => {
      const { data, error } = await supabase
        .from("businesses")
        .select("*");

      console.log("Supabase data:", data);
      console.log("Supabase error:", error);

      if (error) {
        console.error("Supabase error:", error);
      } else {
        setBusinesses(data ?? []);
      }
    };

    fetchBusinesses();
  }, []);



  const [sortBy, setSortBy] = useState("name");


  const [categoryFilter, setCategoryFilter] = useState("all");


  const filteredBusinesses =
    categoryFilter === "all"
      ? businesses
      : businesses.filter(
          (business) => business.category === categoryFilter
        );


  const sortedBusinesses = [...filteredBusinesses].sort((a, b) => {
    if (sortBy === "rating") {
      return b.rating - a.rating;
    }

    return a.name.localeCompare(b.name);
  });

  



  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center gap-8 py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1 className="text-3xl font-semibold">
          Support Local Businesses
        </h1>

        <p className="text-zinc-600">
          Discover and support small businesses in your community.
        </p>


        <div className="flex items-center gap-2">
          <label className="text-sm font-medium">Sort by:</label>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="rounded border px-2 py-1 text-sm"
          >
            <option value="name">Name</option>
            <option value="rating">Rating</option>
          </select>
        </div>

        <div className="flex items-center gap-2">
          <label className="text-sm font-medium">Category:</label>
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="rounded border px-2 py-1 text-sm"
          >
            <option value="all">All</option>
            <option value="Cafe">Cafe</option>
            <option value="Bookstore">Bookstore</option>
            <option value="Bakery">Bakery</option>
          </select>
        </div>


        <div className="w-full space-y-4">
          {sortedBusinesses.map((business) => (
            <BusinessCard
              key={business.id}
              name={business.name}
              category={business.category}
              rating={business.rating}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
