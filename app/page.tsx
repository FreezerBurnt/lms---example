import Footer from "@/components/footer";
import Header from "@/components/header";

import { Button } from "@/components/ui/button";
import { Badge, Medal } from "lucide-react";
import Link from "next/link";
import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";
import localFont from "next/font/local";
import SampleCards from "@/components/sample-cards";

const headingFont = localFont({
  src: "../public/fonts/font.woff2"
});

const textFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
});

const Home = () => {
  return (
    <section>
      <Header />
      <div className="container py-[100px] md:py-[120px] ">
        <div className="flex flex-col items-center justify-center">
          <div
            className={cn(
              "flex flex-col items-center justify-center",
              headingFont.className
            )}
          >
            <div className="mb-4 flex flex-col items-center p-4 text-yellow-700 rounded-full uppercase">
              <Medal className="h-12 w-12 mb-6" />
              No 1<span className="px-2">Teaching Platform</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <span className="font-bold uppercase text-3xl md:text-5xl mb-6">
                R-Template
              </span>
            </div>
            <h1 className=" text-base md:text-3xl text-center text-neutral-500 mb-6">
              A learning management system (LMS) app that streamlines
              educational processes, enhances collaboration between educators
              and learners, facilitates content delivery through customizable
              templates, and provides robust analytics for tracking student
              progress and performance.
            </h1>
            <div className="text-lg md:text-2xl lg:text-4xl bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white px-4 p-2 rounded-md mb-10 w-fit">
              expand your knowledge...
            </div>
          </div>
          <div>
            <SampleCards />
          </div>
          {/* <div
            className={cn(
              "text-sm md:text-xl text-neutral-400 mt-4 max-w-xs md:max-w-2xl text-center mx-auto",
              textFont.className
            )}
          >
            Collaborate, manage projects, and reach new productivity peaks. From
            high rises to the home office, the way your team works is unique —
            accomplish it all with Tasker.
          </div> */}
          <Button className="mt-6" variant={"outline"} asChild>
            <Link href="/sign-up">Get Started</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Home;
