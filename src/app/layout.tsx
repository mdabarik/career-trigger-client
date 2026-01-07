import { Metadata } from "next";
import "./globals.css";
import AuthProvider from "./AuthProvider/AuthProvider";

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
        <AuthProvider>
          <div>{children}</div>
        </AuthProvider>
      </body>
    </html>
  );
}
