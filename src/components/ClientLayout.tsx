"use client";

import { useState, useEffect } from "react";
import Preloader from "@/components/PreLoader";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      <div className={isLoading ? "hidden" : "block"}>{children}</div>
    </>
  );
}
