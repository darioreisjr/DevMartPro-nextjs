import Link from "next/link";
import { IconBrandAmazon } from "@tabler/icons-react";

export default function Logo() {
  return (
    <Link href="/">
      <div className="flex flex-col">
        <div>DEVMART PRO</div>
        <IconBrandAmazon size={40} stroke={1} className=""/>
      </div>
    </Link>
  );
}
