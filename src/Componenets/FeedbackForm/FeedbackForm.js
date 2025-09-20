"use client";
import React, { useState } from "react";
import { Box, TextField, Typography, Rating, Snackbar, Alert, useTheme, useMediaQuery, keyframes } from "@mui/material";
import { motion } from "framer-motion";
import demo from "../../../public/demo.jpeg";
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import Image from "next/image";
import { useRouter } from "next/navigation";
import { CircularProgress } from "@mui/material";
import SubmitButton from "../SubmitButton/SubmitButton";
import { useLanguage } from "@/Context/LanguageContext";
import LanguageToggle from "../LanguageToggle/LanguageToggle";
import HeadingEMenu from "../HeadingEMemu/HeadingEMenu";


export default function FeedbackForm() {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // <600px
    const isSmallMobile = useMediaQuery('(min-width:320px) and (max-width:380px)');
    const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

    const isDark = theme.palette.mode === "dark";


    // #1e1e1e

    // inside component
    const [loading, setLoading] = useState(false);


    const { language } = useLanguage();
    const router = useRouter();

    const menuTitle = language === 'mr' ? "मेन्यू कार्ड (eMenu)" : "Menu Card (eMenu)";
    const FeedbackText = language === 'mr' ? "ग्राहक अभिप्राय" : "Customer Feedback";
    const formName = language === 'mr' ? "आपले संपूर्ण नाव" : "Full Name";
    const formPhone = language === 'mr' ? "फोन नंबर" : "Phone No.";
    const formEmail = language === 'mr' ? "ई-मेल" : "Email";
    const formGoodBad = language === 'mr' ? "चांगले/वाईट काय?" : "What’s Good / Bad?";
    const formImage = language === 'mr' ? "फोटो (असल्यास)" : "Image URL (optional)";
    const formRating = language === 'mr' ? "रेटिंग" : "Rating";
    const formButton = language === 'mr' ? "अभिप्राय सबमिट करा" : "Submit Feedback";
    const formsubmit = language === 'mr' ? "✅ अभिप्राय यशस्वीरित्या सबमिट केला!" : "✅ Feedback submitted successfully!";
    const formerror = language === 'mr' ? "⚠ काहीतरी चूक झाली" : "⚠ Something went wrong";


    const smoothGradient = keyframes`
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    `;


    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        rating: 0,
        feedback: "",
        funny: "",
    });

    const [snackbar, setSnackbar] = useState({
        open: false,
        message: "",
        severity: "success", // "success" | "error"
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };


    const [errors, setErrors] = useState({
        name: "",
        phone: "",
        email: "",
        feedback: "",
    });

    const validate = () => {
        let valid = true;
        const newErrors = { name: "", phone: "", email: "", feedback: "", imageUrl: "" };

        // Name validation
        if (!formData.name.trim()) {
            newErrors.name = language === "mr" ? "कृपया आपले नाव भरा" : "Name is required";
            valid = false;
        } else if (!/^[A-Za-z\s]+$/.test(formData.name.trim())) {
            newErrors.name = language === "mr" ? "फक्त अक्षरे वापरा" : "Only letters allowed";
            valid = false;
        }

        // Phone validation
        if (!formData.phone.trim()) {
            newErrors.phone = language === "mr" ? "कृपया फोन नंबर भरा" : "Phone number is required";
            valid = false;
        } else if (!/^\d{10}$/.test(formData.phone.trim())) {
            newErrors.phone = language === "mr" ? "वैध 10-अंकी नंबर" : "Enter valid 10-digit number";
            valid = false;
        }

        // Email validation
        if (!formData.email.trim()) {
            newErrors.email = language === "mr" ? "कृपया ई-मेल भरा" : "Email is required";
            valid = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
            newErrors.email = language === "mr" ? "वैध ई-मेल भरा" : "Enter a valid email";
            valid = false;
        }

        // Feedback validation (optional, max 500 chars)
        if (formData.feedback && formData.feedback.length > 500) {
            newErrors.feedback = language === "mr" ? "फक्त 500 अक्षरे" : "Max 500 characters allowed";
            valid = false;
        }

        // Update state to show errors in the form
        setErrors(newErrors);

        // Log errors for debugging
        if (!valid) {
            console.log("Validation failed:", newErrors);
        }

        return valid;
    };



    const handleSubmit = async (e) => {
        e.preventDefault();


        if (!validate()) return; // stop if validation fails

        if (!validate()) {
            setSnackbar({
                open: true,
                message: language === "mr"
                    ? "❌ कृपया सर्व आवश्यक फील्ड तपासा"
                    : "❌ Please check required fields",
                severity: "error",
            });
            return;
        }


        https://script.google.com/macros/s/AKfycbxkUE489649v3wp-GTB_As5s5bv-z6e_Qjsjwzgr2ezJkPcqeXRxW0670I0SaamQQQO/exec

        setLoading(true); // start loader

        try {
            const response = await fetch(
                "https://script.google.com/macros/s/AKfycbxkUE489649v3wp-GTB_As5s5bv-z6e_Qjsjwzgr2ezJkPcqeXRxW0670I0SaamQQQO/exec",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded",  // send as form data
                    },
                    body: new URLSearchParams(formData).toString(),         // convert object to form-data string
                }
            );



            // Show success snackbar
            setSnackbar({
                open: true,
                message: "Feedback submitted successfully!",
                severity: "success",
            });


            //reset form data
            setFormData({
                name: "",
                phone: "",
                email: "",
                rating: 0,
                feedback: "",
                funny: "",
            });


        } catch (error) {
            console.error(error);
            setSnackbar({
                open: true,
                message: "⚠ Something went wrong",
                severity: "error",
            });
        } finally {
            setLoading(false)
        }
    };


    // const handleImageChange = (e) => {
    //     const file = e.target.files[0];
    //     if (file) {
    //         const reader = new FileReader();
    //         reader.onloadend = () => {
    //             setFormData((prev) => ({ ...prev, imageUrl: reader.result }));
    //         };
    //         reader.readAsDataURL(file); // converts file to base64 string
    //     }
    // };


    return (

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
            <Box pb={18} sx={{
                backgroundColor: theme.palette.background.default,
                height: "100vh", // full screen height
                overflowY: "auto" // enables scrolling
            }}>


                <Box py={2}>
                    <HeadingEMenu />
                </Box>


                <Box display={"flex"} flexDirection={"column"} px={3} py={3.5} mt={4} mx={3.5} sx={{
                    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', backgroundColor:
                        theme.palette.mode === "dark" ? "#1e1e1e" : "white", borderRadius: "28px"
                }}>


                    <Box display={"flex"} flexDirection={"row"} justifyContent={"space-between"} pb={2}>
                        <Box display="flex" alignItems="center" gap={1} onClick={() => router.back()} sx={{ cursor: 'pointer' }}>
                            <ArrowBackRoundedIcon sx={{ color: "#800080" }} fontSize={isMobile ? 'medium' : 'medium'} />
                            {!isMobile && <Typography>Back</Typography>}
                        </Box>
                        <Typography textAlign={"end"} fontWeight={600} fontSize={isSmallMobile ? "18px" : "22px"}>{FeedbackText}</Typography>
                    </Box>


                    <Box
                        component="form"
                        onSubmit={handleSubmit}
                        display="flex"
                        flexDirection="column"
                        gap={2}
                    >
                        {/* name */}
                        <TextField
                            variant="standard"
                            error={!!errors.name}
                            helperText={errors.name}
                            label={formName}
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            InputLabelProps={{
                                sx: {
                                    fontSize: "14px",
                                    fontWeight: 500,
                                    color: isDark ? "#ececec" : "#000",
                                    fontFamily: "Poppins, sans-serif",
                                    "&.Mui-focused": { color: isDark ? "#FFD700" : "#6A1B9A" },
                                },
                            }}
                            sx={{
                                "& .MuiInputBase-root": {
                                    fontSize: "14px",
                                    color: isDark ? "#ececec" : "#000",
                                },
                            }}
                        />

                        {/* phone */}
                        <TextField
                            variant="standard"
                            error={!!errors.phone}
                            helperText={errors.phone}
                            label={formPhone}
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            InputLabelProps={{
                                sx: {
                                    fontSize: "14px",
                                    fontWeight: 500,
                                    color: isDark ? "#ececec" : "#000",
                                    fontFamily: "Poppins, sans-serif",
                                    "&.Mui-focused": { color: isDark ? "#FFD700" : "#6A1B9A" },
                                },
                            }}
                            sx={{
                                "& .MuiInputBase-root": {
                                    fontSize: "14px",
                                    color: isDark ? "#ececec" : "#000",
                                },
                            }}
                        />

                        {/* email */}
                        <TextField
                            variant="standard"
                            error={!!errors.email}
                            helperText={errors.email}
                            label={formEmail}
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            InputLabelProps={{
                                sx: {
                                    fontSize: "14px",
                                    fontWeight: 500,
                                    color: isDark ? "#ececec" : "#000",
                                    fontFamily: "Poppins, sans-serif",
                                    "&.Mui-focused": { color: isDark ? "#FFD700" : "#6A1B9A" },
                                },
                            }}
                            sx={{
                                "& .MuiInputBase-root": {
                                    fontSize: "14px",
                                    color: isDark ? "#ececec" : "#000",
                                },
                            }}
                        />

                        {/* good/bad feedback */}
                        <TextField
                            variant="standard"
                            error={!!errors.feedback}
                            helperText={errors.feedback}
                            label={formGoodBad}
                            name="feedback"
                            value={formData.feedback}
                            onChange={handleChange}
                            multiline
                            InputLabelProps={{
                                sx: {
                                    fontSize: "14px",
                                    fontWeight: 500,
                                    color: isDark ? "#ececec" : "#000",
                                    fontFamily: "Poppins, sans-serif",
                                    "&.Mui-focused": { color: isDark ? "#FFD700" : "#6A1B9A" },
                                },
                            }}
                            sx={{
                                "& .MuiInputBase-root": {
                                    fontSize: "14px",
                                    color: isDark ? "#ececec" : "#000",
                                },
                            }}
                        />

                        {/* Rating */}
                        <Box display="flex" flexDirection="column" gap={1}>
                            <Typography
                                fontWeight={600}
                                fontSize="15px"
                                sx={{ color: isDark ? "#ececec" : "#000" }}
                            >
                                {formRating}
                            </Typography>
                            <Rating
                                name="rating"
                                value={formData.rating}
                                onChange={(_, newValue) =>
                                    setFormData((prev) => ({ ...prev, rating: newValue }))
                                }
                                sx={{
                                    color: isDark ? "#FFD700" : "#6A1B9A",
                                }}
                            />
                        </Box>

                        {/* Submit Button */}
                        <SubmitButton loading={loading} label="Submit" />

                        {/* Snackbar */}
                        <Snackbar
                            open={snackbar.open}
                            autoHideDuration={4000}
                            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                            onClose={() => setSnackbar((prev) => ({ ...prev, open: false }))}
                            sx={{
                                mb: 10,
                                zIndex: 2000,
                            }}
                        >
                            <Alert
                                onClose={() => setSnackbar((prev) => ({ ...prev, open: false }))}
                                severity={snackbar.severity}
                                variant="filled"
                                sx={{
                                    width: "100%",
                                    backgroundColor: isDark ? "#333" : undefined,
                                    color: isDark ? "#ececec" : undefined,
                                }}
                            >
                                {snackbar.message}
                            </Alert>
                        </Snackbar>
                    </Box>
                </Box>

                {/* <BottomNav/> */}
            </Box>
        </motion.div>
    );
}



// delpoment ID
// AKfycbwI-iBQvWWJUp5g_MzjyojFqQn9u6I2ILEAWSNlGd2oDTx-8I9NJcv1S4Rq2u-myTw5


// weeb app
// https://script.google.com/macros/s/AKfycbwI-iBQvWWJUp5g_MzjyojFqQn9u6I2ILEAWSNlGd2oDTx-8I9NJcv1S4Rq2u-myTw5/exec

// https://script.google.com/macros/s/AKfycbwI-iBQvWWJUp5g_MzjyojFqQn9u6I2ILEAWSNlGd2oDTx-8I9NJcv1S4Rq2u-myTw5/exec



// AKfycbxkUE489649v3wp-GTB_As5s5bv-z6e_Qjsjwzgr2ezJkPcqeXRxW0670I0SaamQQQO

// https://script.google.com/macros/s/AKfycbxkUE489649v3wp-GTB_As5s5bv-z6e_Qjsjwzgr2ezJkPcqeXRxW0670I0SaamQQQO/exec