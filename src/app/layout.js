import { Poppins } from "next/font/google";
import "./globals.css";
import { Box, CssBaseline } from "@mui/material";
import { LanguageProvider } from "@/Context/LanguageContext";
import { FavoritesProvider, ThemeContextProvider } from "@/Theme/ThemeContext";
import ClientOnly from "@/Componenets/ClientOnly/ClientOnly"; // create this component
import Applayout from "@/Componenets/AppLayout/Applayout";
import ThemeToggle from "@/Componenets/ThemeToggle/ThemeToggle";
import theme from "@/Theme/theme";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "My App",
  description: "Next.js + MUI + Framer Motion + Poppins",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ThemeContextProvider>
          <FavoritesProvider>
            <LanguageProvider>
              <CssBaseline />

              {/* Main content */}
              <Box>{children}</Box>

              {/* Client-only components */}
              <ClientOnly>
                <Applayout />
              </ClientOnly>

              <ClientOnly>
                <Box
                  color="secondary"
                  sx={{
                    position: "fixed",
                    bottom: 100,
                    right: 20,
                  }}
                >
                  <ThemeToggle />
                </Box>
              </ClientOnly>

            </LanguageProvider>
          </FavoritesProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
