import Navigation from "@/components/Navigation";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import ActiveSectionContextProvider from "@/context/ActiveSectionContext";

const inter = Inter({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alfonsus Avianto Chandrawan",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link rel="icon" href="logo.svg" type="image/svg" />
      <meta
        name="description"
        content="Explore the world of web development with Alfonsus Avianto Chandrawan, a skilled frontend engineer passionate about creating seamless and visually appealing digital experiences. Discover his portfolio, expertise, and projects showcasing a blend of creativity and technical proficiency in frontend technologies."
      />
      <meta
        name="keywords"
        content="Alfonsus Avianto Chandrawan, Frontend Engineer, Web Developer, React, JavaScript, HTML, CSS, Portfolio, Web Design, User Interface, User Experience, Coding, Creative Developer"
      />
      <body suppressHydrationWarning={true} className={inter.className}>
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
