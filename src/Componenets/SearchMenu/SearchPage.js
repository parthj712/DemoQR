"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { Box, CardMedia, keyframes, TextField, Typography, useMediaQuery, useTheme } from "@mui/material";
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import { motion } from "framer-motion";
import Image from "next/image";
import demo from "../../../public/demo.jpeg";
import SubmitButton from "../SubmitButton/SubmitButton";
import LanguageToggle from "../LanguageToggle/LanguageToggle";
import { useLanguage } from "@/Context/LanguageContext";
import DiningConstant from "../Constant/AllConstant";
import HeadingEMenu from "../HeadingEMemu/HeadingEMenu";


export default function SearchPage() {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // <600px
    const isSmallMobile = useMediaQuery('(min-width:320px) and (max-width:380px)');
    const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

    const router = useRouter();
    const searchParams = useSearchParams();
    const initialQuery = searchParams.get("q") || "";

    const [searchTerm, setSearchTerm] = useState(initialQuery);
    const [filteredResults, setFilteredResults] = useState([]);

    const menuData = DiningConstant();

    const { language } = useLanguage();

    const menuTitle = language === 'mr' ? "मेन्यू कार्ड (eMenu)" : "Menu Card (eMenu)";

    const searchText = language === 'mr' ? "डिश शोधा..." : "Search for a dish...";


    const smoothGradient = keyframes`
           0% { background-position: 0% 50%; }
           50% { background-position: 100% 50%; }
           100% { background-position: 0% 50%; }
         `;

    useEffect(() => {
        if (!searchTerm.trim()) {
            setFilteredResults([]);
            return;
        }

        const results = [];
        menuData.forEach((section) => {
            section.items.forEach((item) => {
                if (
                    item.title_en.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    item.title_mr.toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                    results.push({
                        ...item,
                        sectionKey: section.sectionKey,
                        sectionTitle: section.title_en,
                    });
                }
            });
        });

        setFilteredResults(results);
    }, [searchTerm]);

    const handleExploreClick = (sectionKey) => {
        router.push(`/menu?highlight=${sectionKey}`);
    };

    const isDark = theme.palette.mode === "dark";

    return (
        <Suspense fallback={<div>Loading menu...</div>}>
            <motion.div

                initial={{ y: "100%", opacity: 0.4, scale: 0.95 }} // start off-screen right, slightly smaller & dim
                animate={{ y: 0, opacity: 1, scale: 1 }}           // come to center, full opacity, normal size
                exit={{ x: "-30%", opacity: 0, scale: 0.8 }}       // exit to left with parallax & shrink
                transition={{
                    duration: 0.9,
                    ease: [0.25, 0.8, 0.25, 1], // smooth sophisticated curve
                }}
                style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    boxShadow: "0 0 40px rgba(0,0,0,0.08)", // soft depth
                    borderRadius: "16px", // makes it feel like sliding cards
                    overflow: "hidden",
                }}
            >
                <Box sx={{
                    backgroundColor: theme.palette.background.default,
                    height: "100vh", // full screen height
                    overflowY: "auto" // enables scrolling
                }}>
                    <Box py={2}>
                        <HeadingEMenu />
                    </Box>



                    <Box py={2.5} px={2.5}>
                        <Box display={"flex"} flexDirection={"row"} gap={2}>
                            <Box display="flex" alignItems="center" gap={1} onClick={() => router.back()} sx={{ cursor: 'pointer' }}>
                                <ArrowBackRoundedIcon sx={{ color: "#800080" }} fontSize={isMobile ? 'large' : 'medium'} />
                                {!isMobile && <Typography>Back</Typography>}
                            </Box>
                            <TextField
                                fullWidth
                                variant="outlined" // use outlined if you want borders
                                size="small"
                                label={searchText}
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                sx={{
                                    "& .MuiOutlinedInput-root": {
                                        borderRadius: "8px",
                                        backgroundColor: isDark ? "#1e1e1e" : "#fff", // background per mode
                                        color: isDark ? "#ececec" : "#111", // text color
                                        "& fieldset": {
                                            borderColor: isDark ? "#888" : "#AA2E30", // normal border
                                            borderWidth: 1.5,
                                        },
                                        "&:hover fieldset": {
                                            borderColor: isDark ? "#FF9800" : "#FFB520", // hover border
                                        },
                                        "&.Mui-focused fieldset": {
                                            borderColor: isDark ? "#FF5722" : "#FF6B00", // focus border
                                            borderWidth: 2,
                                        },
                                    },
                                    "& .MuiInputLabel-root": {
                                        color: isDark ? "#bbb" : "#AA2E30", // label color
                                        "&.Mui-focused": {
                                            color: isDark ? "#FF5722" : "#FF6B00", // label when focused
                                        },
                                    },
                                    "& .MuiInputBase-input": {
                                        color: isDark ? "#ececec" : "#111", // input text color
                                    },
                                }}
                            />
                        </Box>


                        {searchTerm && filteredResults.length > 0 && (
                            <Box mt={2} display={"flex"} flexDirection={"column"} gap={1.5} pb={17}>
                                <Typography fontWeight={600}>Results For : {searchTerm}</Typography>
                                <hr />
                                {filteredResults.map((result, idx) => (
                                    <Box key={idx} mb={2} display={"flex"} flexDirection={"column"} gap={1.5}>
                                        <Typography variant="body2" color="text.secondary">
                                            {result.sectionTitle} &gt; {searchTerm}
                                        </Typography>

                                        <CardMedia
                                            component="img"
                                            image={"/demo.jpeg"}
                                            alt={result.title_en || "Item"}
                                            sx={{ width: "100%", height: 160, objectFit: "cover", borderRadius: 4 }}
                                        />

                                        <Typography fontWeight="bold" mt={1}>
                                            {result.title_en} — {result.price_en}
                                        </Typography>

                                        <SubmitButton
                                            label={`Explore more ${result.sectionTitle}`}
                                            onClick={() => handleExploreClick(result.sectionKey)}
                                            loading={false} // or some state if you want to show loader
                                        />

                                    </Box>
                                ))}
                            </Box>
                        )}

                        {searchTerm && filteredResults.length === 0 && (
                            <Typography mt={2} color="error">
                                No dishes found.
                            </Typography>
                        )}
                    </Box >
                </Box>
            </motion.div>


        </Suspense>

    );
}
