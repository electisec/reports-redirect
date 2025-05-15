"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function RedirectPage() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const slug = pathname;
      if (!slug) return;
      window.location.href = `https://reports.electisec.com/${slug}`;
    }
  }, [pathname]);

  return <></>;
}
