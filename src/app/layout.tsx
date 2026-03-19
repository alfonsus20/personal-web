import Navigation from "@/components/Navigation";
import { Inter } from "next/font/google";
import Script from "next/script";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import ActiveSectionContextProvider from "@/context/ActiveSectionContext";
import ScrollToHash from "@/components/ScrollToHash";
import "./globals.css";
import type { Metadata } from "next";

const inter = Inter({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alfonsus Avianto Chandrawan",
  description: "A frontend web engineer.",
  keywords: [
    "Alfonsus Avianto Chandrawan",
    "Frontend Engineer",
    "Web Developer",
    "React",
    "JavaScript",
    "HTML",
    "CSS",
    "Portfolio",
    "Web Design",
    "User Interface",
    "User Experience",
    "Coding",
  ],
  authors: [{ name: "Alfonsus Avianto Chandrawan" }],
  openGraph: {
    title: "Alfonsus Avianto Chandrawan",
    description: "A frontend web engineer.",
    url: "https://alfonsusvianto.vercel.app",
    siteName: "Alfonsus Avianto Chandrawan Portfolio",
    locale: "en",
    type: "website",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Alfonsus Avianto Chandrawan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alfonsus Avianto Chandrawan",
    description: "A frontend web engineer.",
    images: ["/og-image.svg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-pt-28">
      <link rel="icon" href="/logo.svg" type="image/svg" />
      <body suppressHydrationWarning={true} className={inter.className}>
        <ScrollToHash />
        <ActiveSectionContextProvider>
          <Navigation />
          <main>{children}</main>
          <Footer />
          <ScrollToTop />
        </ActiveSectionContextProvider>
        <Script id="clarity_tracker">
          {`(function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "j9t4zrzjde");`}
        </Script>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-TDEJ6LR38N" />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
  
            gtag('config', 'G-TDEJ6LR38N');
          `}
        </Script>
      </body>
    </html>
  );
}
