import Link from "next/link";
import { IconBrandAmazon } from "@tabler/icons-react";

export default function Logo() {
  return (
    <Link href="/">
      <div className="flex flex-col items-center mt-2">
        <div className="text-xl leading-4">DEVMART</div>
        <IconBrandAmazon size={40} stroke={1} className="-m-2"/>
      </div>
    </Link>
  );
}
