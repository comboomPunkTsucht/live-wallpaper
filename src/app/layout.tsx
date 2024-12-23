import type { Metadata } from "next";
import "./globals.css";

import Particles from "@/components/particles";
import { ThemeProvider } from "@/components/theme-provider";
import { WebVitals } from "@/components/web-vitals";
import { CaskaydiaCoveNerdFontPropo, CaskaydiaCoveNerdFontMono, CaskaydiaCoveNerdFont } from './fonts'
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Live Wallpaper",
  description: "customizable Live Wallpaper",
  keywords: "customizable, Live, Wallpaper",
  twitter: {
    card: "summary_large_image",
    title: "Live Wallpaper",
    description: "customizable Live Wallpaper",
    siteId: "723191637950775296",
    creator: "@mcpeaps_HD",
    creatorId: "723191637950775296",
    images: [
      {
        url: "https://mahd.comboompunksucht.app/pictures/logo.PNG",
        alt: "Logo of mcpeaps_HD", // Alt attribute for Twitter image
        width: 3000,
        height: 3000,
      },
    ], // Must be an absolute URL
  },
  openGraph: {
    type: "website",
    title: "Live Wallpaper",
    description: "customizable Live Wallpaper",
    url: "https://mahd.comboompunksucht.app/live-wallpaper",
    images: [
      {
        url: "https://mahd.comboompunksucht.app/pictures/logo.PNG",
        alt: "Logo of mcpeaps_HD", // Alt attribute for Twitter image
        width: 3000,
        height: 3000,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    noarchive: false,
    noimageindex: false,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
    googleBot: {
      index: true,
      follow: true,
      nocache: false,
      noarchive: false,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};
//<link rel="manifest" href="/manifest.webmanifest" />
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#010101" />
        <meta name="start_url" content="https://mahd.comboompunksucht.app/" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#010101" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="Live Wallpaper" />
        <meta name="application-name" content="Fabian Aps" />
        <meta name="msapplication-TileColor" content="#010101" />
        <meta charSet="UTF-8" />
        <link rel="manifest" href="/manifest.webmanifest" />
        <link rel="sitemap" href="/sitemap" />
        <meta
          name="keywords"
          content="portfolio, website, impressum, github, linkedin, aps, fabian"
        />
        <meta
          name="format-detection"
          content="telephone=yes, date=no, email=yes, address=yes"
        />
      </head>
      <body className={cn(`${CaskaydiaCoveNerdFontPropo.variable} ${CaskaydiaCoveNerdFontMono.variable} ${CaskaydiaCoveNerdFont.variable}`)}>
        <WebVitals />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="bg-gradient-to-tl from-primary-background via-primary-foreground to-primary-background">
            <Particles quantity={400} refresh={true} />
            <div className="z-1">{children}</div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
