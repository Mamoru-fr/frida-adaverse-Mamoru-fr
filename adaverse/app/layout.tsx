import type {Metadata} from "next";
import "./globals.css";
import {AdaPromotionsProvider} from "@/context/AdaPromotionsContext";
import {AdaProjectsProvider} from "@/context/AdaProjectsContext";
import {StudentsProvider} from "@/context/StudentsContext";
import {StudentProjectsProvider} from "@/context/StudentProjectsContext";
import {ThemeProvider} from "@/context/ThemeContext";
import TitleButton from "@/components/TitleButton";
import ThemeToggle from "@/components/ThemeToggle";
import {CombinedColors} from "@/content/Colors";

export const metadata: Metadata = {
  title: "AdaVerse",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <ThemeProvider>
          <AdaPromotionsProvider>
            <AdaProjectsProvider>
              <StudentsProvider>
                <StudentProjectsProvider>
                  <div className={`min-h-screen ${CombinedColors.background.main} font-sans ${CombinedColors.text.primary} transition-colors`}>
                    <nav className={`fixed top-0 left-0 right-0 z-50 ${CombinedColors.nav.bg} backdrop-blur-sm border-b ${CombinedColors.nav.border} transition-colors`}>
                      <div className="flex items-center justify-between px-8 py-4">
                        <TitleButton />
                        <div>
                          <ThemeToggle />
                        </div>
                      </div>
                    </nav>
                    <div className="pt-20">
                      {children}
                    </div>
                  </div>
                </StudentProjectsProvider>
              </StudentsProvider>
            </AdaProjectsProvider>
          </AdaPromotionsProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
