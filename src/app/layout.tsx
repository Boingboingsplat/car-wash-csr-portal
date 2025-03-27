import { nunitoSans, redRose } from "@/app/ui/fonts";
import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import NavigationLinks from "./navigation-links";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // TODO: Responsive design
    <html lang="en">
      <body className={`${nunitoSans.className} antialiased`}>
        <div className="flex h-screen flex-col md:flex-row overflow-hidden">
          {/* Sidebar */}
          <div className="self-start flex-none flex w-full h-20 flex-row md:w-50 md:h-full md:flex-col gap-2 bg-darker-bg">
            {/* Portal Logo */}
            <Link
              className="p-3 pr-8 md:pr-3 md:pb-8 md:mb-6 bg-accent slanted-right-80 md:slanted-bottom-80"
              href="/"
            >
              <div className={`${redRose.className} flex flex-row gap-3 w-max md:w-full justify-center items-center text-white`}>
                <ChatBubbleLeftRightIcon className="w-10 h-10 md:w-15 md:h-15" />
                <p className="text-2xl md:text-4xl">Portal</p>
              </div>
            </Link>
            {/* Navigation links */}
            <NavigationLinks />
          </div>
          {/* Content */}
          <div className="flex-grow p-6 md:pt-12 overflow-y-auto bg-white text-black">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
