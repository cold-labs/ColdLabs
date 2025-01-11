"use client";
import React from "react";
import { AlignRight, ChevronsDown, Github } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Button } from "../ui/button";
import Link from "next/link";
import ToggleTheme from "@/components/toogle-theme";

const navItems = [
  { href: "/projects", label: "Projects" },
  { href: "/blogs", label: "Blogs" },
  { href: "/showcase", label: "Showcase" },
  { href: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 flex h-14 max-w-screen-2xl items-center ">
        <div className="flex items-center space-x-4 lg:space-x-6">
          <Link 
            href="/" 
            className="flex items-center space-x-2 font-bold"
          >
            <ChevronsDown className="h-6 w-6" />
            <span>ColdLabs</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-4 lg:space-x-6">
            {navItems.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-sm font-medium transition-colors hover:text-foreground/80 text-foreground/60"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex flex-1 items-center justify-end space-x-2">
          <Button
            variant="ghost"
            size="icon"
            className="hidden md:flex"
            asChild
          >
            <Link
              href="https://github.com/cold-labs"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
          </Button>

          <ToggleTheme />

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon"
                className="md:hidden"
              >
                <AlignRight  className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle className="flex items-center">
                  <ChevronsDown className="h-6 w-6 mr-2" />
                  ColdLabs
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col space-y-3 mt-8">
                {navItems.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setIsOpen(false)}
                    className="text-sm transition-colors hover:text-foreground/80 text-foreground/60 py-2"
                  >
                    {label}
                  </Link>
                ))}
                <Link
                  href="https://github.com/cold-labs"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="text-sm transition-colors hover:text-foreground/80 text-foreground/60 py-2"
                >
                  GitHub
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;