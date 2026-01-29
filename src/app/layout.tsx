import { Metadata } from "next";
import "./globals.css";

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
        <div>{children}</div>
      </body>
    </html>
  );
}
