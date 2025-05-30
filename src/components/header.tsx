import Link from "next/link";
import { Button } from "./ui/button";
import { LogOutButton } from "./logout-button";
import { getUser } from "@/db/supabase/server";

export async function Header() {
  const user = await getUser();

  return (
    <header className="bg-popover relative flex h-24 w-full items-center justify-between px-3 sm:px-8">
      {/* <SidebarTrigger className="absolute left-1 top-1" /> */}

      <Link className="flex items-end gap-2" href="/">
        <h1 className="flex flex-col pb-1 text-2xl font-semibold leading-6">
          SmartNotes
        </h1>
      </Link>

      <div className="flex gap-4">
        {user ? (
          <LogOutButton />
        ) : (
          <>
            <Button asChild>
              <Link href="/sign-up" className="hidden sm:block">
                Sign Up
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/login">Login</Link>
            </Button>
          </>
        )}
      </div>
    </header>
  );
}
