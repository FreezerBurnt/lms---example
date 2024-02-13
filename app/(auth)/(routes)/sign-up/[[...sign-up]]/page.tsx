import { Button } from "@/components/ui/button";
import { SignUp } from "@clerk/nextjs";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen py-20 ">
        <SignUp />
        <Link href="/" className="mt-4">
          <Button>Cancel</Button>
        </Link>
      </div>
    </>
  );
}
