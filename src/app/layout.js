
import { Poppins } from "next/font/google";
import "./globals.css";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import theme from "@/Theme/theme";
import { LanguageProvider } from "@/Context/LanguageContext";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // choose weights you need
});

export const metadata = {
  title: "My App",
  description: "Next.js + MUI + Framer Motion + Poppins",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ThemeProvider theme={theme}>
          <LanguageProvider>
            <CssBaseline />
            <Box> {/* 👈 add padding-bottom so content doesn't hide behind BottomNav */}
              {children}
            </Box>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
