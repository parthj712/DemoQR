
import { Poppins } from "next/font/google";
import "./globals.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "@/Theme/theme";

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
          <CssBaseline />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
