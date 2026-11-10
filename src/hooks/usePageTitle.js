import { useEffect } from "react";

export function usePageTitle(page) {
  useEffect(() => {
    document.title = page
      ? `${page} · GM Construction Inc.`
      : "GM Construction Inc. — Bathroom remodeler in Park Forest";
  }, [page]);
}
