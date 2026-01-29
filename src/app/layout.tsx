import { Metadata } from "next";
import "./globals.css";
import TanStackProviders from "./providers";

export const metadata: Metadata = {
  title: "CareerTrigger | Home",
  description: "Latest posts and articles about travel, food, and lifestyle.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <TanStackProviders>
          <div>{children}</div>
        </TanStackProviders>
      </body>
    </html>
  );
}
