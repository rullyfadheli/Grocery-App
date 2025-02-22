"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import CategorySidebar from "../components/CategorySidebar";
import ProductList from "../components/ProductList";
import { useRouter } from "next/router";

export default function ProductCategory() {
  const params = useSearchParams().get("category");
  const decoded = decodeURIComponent(params);

  return (
    <div className="flex bg-tertiary">
      <CategorySidebar />
      <ProductList productCategory={decoded} />
    </div>
  );
}
