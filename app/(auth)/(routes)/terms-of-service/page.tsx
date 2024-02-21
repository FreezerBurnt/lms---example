import { Button } from "@/components/ui/button";
import Link from "next/link";

const TermsOfService = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <div className="text-3xl font-bold">Terms of Service!</div>
        <div>
          <div className="flex flex-row items-center justify-between mt-4">
            <Link href="/dashboard">
              <Button variant={"outline"} size={"sm"} className="mr-4">
                Back
              </Button>
            </Link>
            <Link href="/sign-up">
              <Button variant={"default"} size={"sm"} className="">
                Sign Up
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsOfService;
