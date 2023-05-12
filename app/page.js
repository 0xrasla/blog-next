"use client";

import { useEffect } from "react";

export default function Home() {
  const getData = async () => {
    const res = await fetch("/api/blog", {
      cache: "no-store",
    });

    return await res.json();
  };

  useEffect(() => {
    const res = getData();
    console.log(res);
  }, []);

  return (
    <div>
      <h1 className="text-3xl">Home</h1>
    </div>
  );
}
