import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import { Toaster } from "@/components/ui/sonner";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { NoteProvider } from "@/providers/note-provider";

export const metadata: Metadata = {
  title: "Smart Notes",
  description:
    "Smart Notes is a note-taking app that helps you take notes faster and smarter.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <NoteProvider>
          <SidebarProvider>
            <AppSidebar />

            <div className="flex min-h-screen w-full flex-col">
              <Header />

              <main className="flex flex-1 flex-col px-4 pt-10 xl:px-8">
                {children}
              </main>
            </div>
          </SidebarProvider>

          <Toaster />
        </NoteProvider>
      </body>
    </html>
  );
}
