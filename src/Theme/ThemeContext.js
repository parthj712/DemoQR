"use client";
import { createContext, useContext, useMemo, useState, useEffect } from "react";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";

/* ----------------- THEME CONTEXT ----------------- */
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

/* ----------------- FAVORITES CONTEXT ----------------- */
const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
    const [favorites, setFavorites] = useState([]);

    // Load favorites from localStorage on mount
    useEffect(() => {
        const stored = localStorage.getItem("favorites");
        if (stored) setFavorites(JSON.parse(stored));
    }, []);

    // Save favorites to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }, [favorites]);

    const toggleFavorite = (dish) => {
        setFavorites((prev) => {
            const exists = prev.find((item) => item.itemId === dish.itemId); // ✅ use itemId
            if (exists) {
                return prev.filter((item) => item.itemId !== dish.itemId);
            }
            return [...prev, dish];
        });
    };

    const isFavorite = (itemId) => favorites.some((item) => item.itemId === itemId); // ✅ use itemId

    return (
        <FavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
            {children}
        </FavoritesContext.Provider>
    );
}

export function useFavorites() {
    return useContext(FavoritesContext);
}
