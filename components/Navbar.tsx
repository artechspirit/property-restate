"use client";
import { useState, useEffect } from "react";
import { menu } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./CustomButton";
import { Menu, X, ChevronDown } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [openProject, setOpenProject] = useState(false);
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`w-full border-b bg-white transition-all duration-300 ${
        isFixed ? "fixed top-0 left-0 right-0 z-50 shadow-md" : ""
      }`}
    >
      <div className="container flex items-center justify-between h-[80px]">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.svg"
            width={156}
            height={70}
            alt="Logo"
            draggable={false}
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex gap-8">
          {menu.map((item) => (
            <div key={item.id}>
              {/* Menu Item */}
              {!item.hasChildren ? (
                <Link
                  href="/"
                  className="text-[#09090B] text-sm font-medium flex items-center gap-1 hover:text-green-600 transition-all"
                >
                  {item.name}
                </Link>
              ) : (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="flex items-center gap-2 text-[#09090B] text-sm font-medium hover:text-green-600">
                      <span>{item.name}</span>
                      <ChevronDown className="transform transition-all duration-300" />
                    </button>
                  </DropdownMenuTrigger>
                  {/* Dropdown Menu Content */}
                  <DropdownMenuContent className="w-40 bg-white shadow-lg rounded-md mt-2">
                    {item.children?.map((child) => (
                      <DropdownMenuItem
                        key={child.id}
                        className="text-[#09090B] text-sm font-medium hover:bg-green-50 transition-colors"
                      >
                        <Link href={child.href}>{child.name}</Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              )}
            </div>
          ))}
        </nav>

        {/* Desktop Action */}
        <div className="hidden lg:flex gap-4">
          <Button variant="outline" size="sm">
            Daftar
          </Button>
          <Button size="sm">Masuk</Button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button onClick={() => setOpen(true)} aria-label="Menu">
                <Menu className="w-6 h-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[260px] p-6 bg-white">
              <div className="flex flex-col gap-6">
                <div className="flex justify-between items-center">
                  <Image
                    src="/images/logo.svg"
                    width={120}
                    height={60}
                    alt="Logo"
                  />
                </div>

                <nav className="flex flex-col gap-4 mt-4">
                  {menu.map((item) => (
                    <div key={item.id}>
                      {/* Menu Item */}
                      {!item.hasChildren ? (
                        <Link
                          href="/"
                          className="text-[#09090B] text-base font-medium flex items-center gap-2"
                          onClick={() => setOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ) : (
                        <div>
                          {/* Mobile Project Menu with Slide Animation */}
                          <button
                            onClick={() => setOpenProject(!openProject)}
                            className="text-[#09090B] text-base font-medium flex items-center gap-2 w-full"
                          >
                            <span>{item.name}</span>
                            <ChevronDown
                              className={`transform transition-all duration-300 ${
                                openProject ? "rotate-180" : ""
                              }`}
                            />
                          </button>
                          {/* Sliding Sub-menu */}
                          <div
                            className={`overflow-hidden transition-all duration-300 ${
                              openProject ? "max-h-64" : "max-h-0"
                            }`}
                          >
                            <div className="pl-4 mt-2">
                              {item.children?.map((child) => (
                                <Link
                                  key={child.id}
                                  href={child.href}
                                  className="text-[#09090B] text-sm font-medium block hover:bg-green-50 p-2"
                                  onClick={() => setOpen(false)}
                                >
                                  {child.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </nav>

                <div className="mt-6 flex flex-col gap-3">
                  <Button variant="outline" size="sm" className="w-full">
                    Daftar
                  </Button>
                  <Button size="sm" className="w-full">
                    Masuk
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
