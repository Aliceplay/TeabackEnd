"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="w-full flex mt-4 px-4">
      <Link href="/" className="text-3xl font-bold text-gray-800">
        AI茶園監控系統
      </Link>
      <div className="ml-auto flex space-x-4">
        <Menubar>
          <MenubarMenu>
            <Link href="/">
              <MenubarTrigger>茶園辨識</MenubarTrigger>
            </Link>
            <Link href="/Tea-Management">
              <MenubarTrigger>管理茶園資料庫</MenubarTrigger>
            </Link>
          </MenubarMenu>
        </Menubar>
      </div>
    </header>
  );
}
