import type { Metadata } from "next";
import "./globals.css";
//import CustomCursor from "@/components/CustomCursor";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Digital Marketing Agency in Markham | Best Salesforce Services in Canada",
  description:
    "Howe TechWorks — a technology consultancy offering Salesforce services, Data Analytics, Digital Marketing, and AI solutions based in Markham, CA.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {<CustomCursor />*/}
        <ScrollReveal />
        {children}
      </body>
    </html>
  );
}

