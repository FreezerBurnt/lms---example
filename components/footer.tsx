import React from "react";
import { Button } from "./ui/button";

import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="fixed bottom-0 w-full p-4 border-t bg-slate-100">
          <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
            <h2 className="font-medium hidden md:flex">R-LMS</h2>
            <div className="space-x-4 md:block md:w-auto flex items-center justify-between w-full">
              <Link href="/privacy-policy">
                <Button variant={"ghost"} size={"sm"} className="">
                  Privacy Policy
                </Button>
              </Link>
              <Link href="/terms-of-service">
                <Button variant={"ghost"} size={"sm"} className="">
                  Terms of Service
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
