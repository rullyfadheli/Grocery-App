import Link from "next/link";
import Button from "./elements/Button";

function TopNavigation({ contentLeft, title, text, onClick, type, style }) {
  return (
    <div className="flex justify-between items-center p-4 bg-primary text-white">
      <Link href={"/"}>{contentLeft}</Link>
      <span>{title}</span>
      <Button />
    </div>
  );
}

export default TopNavigation;
