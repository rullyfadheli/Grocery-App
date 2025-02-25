"use client";
import Link from "next/link";
import Button from "./elements/Button";

function TopNavigation({
  contentLeft,
  contentRight,
  title,
  text,
  onClick,
  type,
  style,
  href,
}) {
  return (
    <div className="flex justify-between items-center p-4 bg-transparrent shadow text-black py-5 font-inter">
      <Link href={"/"}>{contentLeft}</Link>
      <span className="font-bold">{title}</span>
      <Button text={contentRight} onClick={onClick} />
    </div>
  );
}

export default TopNavigation;
