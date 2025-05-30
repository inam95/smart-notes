"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "./ui/button";
import { Loader2Icon } from "lucide-react";
import { toast } from "sonner";
import { logOutAction } from "@/actions/auth.actions";

export function LogOutButton() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const handleLogOut = async () => {
    setLoading(true);

    const { errorMessage } = await logOutAction();

    if (!errorMessage) {
      router.push(`/?toastType=logOut`);
    } else {
      toast.error("Error", {
        description: errorMessage,
      });
    }

    setLoading(false);
  };

  return (
    <Button
      variant="outline"
      onClick={handleLogOut}
      disabled={loading}
      className="w-24"
    >
      {loading ? <Loader2Icon className="animate-spin" /> : "Log Out"}
    </Button>
  );
}

export default LogOutButton;
