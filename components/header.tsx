import { Logo } from "@/app/(dashboard)/_components/logo";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <div className="fixed top-0 w-full h-14 px-4 border-b shadow-sm bg-white flex items-center">
      <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
        <Logo />
        <div className="space-x-4 md:block md:w-auto flex items-center justify-between w-full">
          <Button variant="outline" asChild size={"sm"} className="">
            <Link href="/sign-in">Login</Link>
          </Button>
          <Button variant="default" size={"sm"} asChild className="">
            <Link href="/sign-up">Try R-LMS</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
