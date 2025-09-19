"use client";
import { createContext, useContext, useMemo, useState, useEffect } from "react";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";

const ThemeContext = createContext();

export function ThemeContextProvider({ children }) {
    const [mode, setMode] = useState("light"); // default: light

    // Detect system preference on mount
    useEffect(() => {
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        setMode(prefersDark ? "dark" : "light");

        // Listen for system changes in real-time
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        const handler = (e) => setMode(e.matches ? "dark" : "light");
        mediaQuery.addEventListener("change", handler);

        return () => mediaQuery.removeEventListener("change", handler);
    }, []);

    const toggleTheme = () => {
        setMode((prev) => (prev === "light" ? "dark" : "light"));
    };

    const theme = useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                    ...(mode === "light"
                        ? {
                            background: { default: "#fef8e3ff", paper: "#ffffff" },
                            text: { primary: "#000000" },
                        }
                        : {
                            background: { default: "#121212", paper: "#1e1e1e" },
                            text: { primary: "#ffffff" },
                        }),
                },
                typography: {
                    fontFamily: "Poppins, sans-serif",
                },
            }),
        [mode]
    );

    return (
        <ThemeContext.Provider value={{ mode, toggleTheme }}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    );
}

export function useThemeContext() {
    return useContext(ThemeContext);
}
