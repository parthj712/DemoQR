import { Box, Button, Typography, useTheme } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { motion } from "framer-motion";
import React from "react";
import { useLanguage } from "@/Context/LanguageContext";

const BottomMenu = () => {
    const theme = useTheme();
    const { language } = useLanguage();

    const ownerPhone = "9545934174";
    const ownerWhatsApp = "+91 9545934174";
    const googleMapLink =
        "https://www.google.com/maps/place/Manas+Veg+Restaurant,+Karad+-+Chiplun+Rd,+Markandi,+Chiplun,+Maharashtra+415605";

    const WhatsApp = language === "mr" ? "व्हॉट्सॲप" : "WhatsApp";
    const Phone = language === "mr" ? "फोन" : "Phone";
    const Map =
        language === "mr"
            ? "आमच्यापर्यंत पोहोचण्यासाठी गुगल मॅप फॉलो करा"
            : "Follow Google Map to Reach Us";

    const mainTitle = language === "mr" ? "स्कॅन & डाईन" : "Scan N Dine";
    const secTitle =
        language === "mr"
            ? "तुमचा मेनू, सुंदरपणे पुन्हा डिझाइन केलेला."
            : "Your menu, beautifully reimagined";
    const Address =
        language === "mr"
            ? "स्कॅन & डाईन, कराड - चिपळूण रोड, मार्कंडी, चिपळूण, महाराष्ट्र ४१५६०५"
            : "Scan N Dine, Karad - Chiplun Rd, Markandi, Chiplun, Maharashtra 415605";

    // 🎨 Dynamic backgrounds and text
    const backgroundGradient =
        theme.palette.mode === "light"
            ? "linear-gradient(-45deg, #c42528, #c04848, #b32d2f)" // vibrant red gradient for light
            : "linear-gradient(-45deg, #121212, #1e1e1e, #2c2c2c)"; // subtle dark for dark mode

    const highlightColor =
        theme.palette.mode === "light" ? "#ffd735" : "#fbc02d"; // yellow in light, golden in dark

    const buttonColors = {
        whatsapp: {
            bg: "#12c252",
            hover: "#11a64d",
        },
        phone: {
            bg: "#0c9797",
            hover: "#006666",
        },
        map: {
            bg: "#2b7de8",
            hover: "#145dbf",
        },
    };


    const textColor = theme.palette.mode === "dark" ? "#ececec" : "#ffd735ff";

    return (
        <Box
            display="flex"
            flexDirection="column"
            pt={4}
            px={4}
            pb={12}
            gap={3}
            sx={{
                backgroundImage: "linear-gradient(-45deg, #c42528ff, #c04848ff, #b32d2fff)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "400% 400%",
                animation: "gradientMove 6s ease infinite",
                "@keyframes gradientMove": {
                    "0%": { backgroundPosition: "0% 50%" },
                    "50%": { backgroundPosition: "100% 50%" },
                    "100%": { backgroundPosition: "0% 50%" },
                },
                borderTopRightRadius: "20px",
                borderTopLeftRadius: "20px",
            }}
        >
            {/* Buttons */}
            <Box display="flex" flexDirection="column" gap={2}>
                <Box display="flex" flexDirection="row" gap={2}>
                    <Button
                        fullWidth
                        variant="contained"
                        startIcon={<WhatsAppIcon />}
                        sx={{
                            backgroundColor: buttonColors.whatsapp.bg,
                            "&:hover": { backgroundColor: buttonColors.whatsapp.hover },
                            p: 1,
                            borderRadius: 2,
                            color: textColor, // ✅ button text color
                        }}
                        onClick={() =>
                            window.open(`https://wa.me/${ownerWhatsApp}`, "_blank")
                        }
                    >
                        {WhatsApp}
                    </Button>

                    <Button
                        fullWidth
                        variant="contained"
                        startIcon={<PhoneIcon />}
                        sx={{
                            backgroundColor: buttonColors.phone.bg,
                            "&:hover": { backgroundColor: buttonColors.phone.hover },
                            p: 1,
                            borderRadius: 2,
                            color: textColor, // ✅ button text color
                        }}
                        onClick={() => (window.location.href = `tel:${ownerPhone}`)}
                    >
                        {Phone}
                    </Button>
                </Box>

                <Button
                    fullWidth
                    variant="contained"
                    startIcon={<LocationOnIcon />}
                    sx={{
                        backgroundColor: buttonColors.map.bg,
                        "&:hover": { backgroundColor: buttonColors.map.hover },
                        fontSize: language === "mr" ? "13px" : "14px",
                        fontWeight: 500,
                        p: 1,
                        borderRadius: 2,
                        color: textColor, // ✅ button text color
                        "& .MuiButton-startIcon": {
                            marginRight: 0.5,
                        },
                    }}
                    onClick={() => window.open(googleMapLink, "_blank")}
                >
                    {Map}
                </Button>
            </Box>

            {/* Text + Address */}
            <Box
                display={"flex"}
                flexDirection={"column"}
                alignItems={"center"}
                gap={2}
            >
                <Box>
                    <Typography
                        fontSize={"26px"}
                        fontWeight={600}
                        textAlign={"center"}
                        sx={{ color: highlightColor }}
                    >
                        {mainTitle}
                    </Typography>
                    <Typography
                        fontSize={"20px"}
                        fontWeight={600}
                        textAlign={"center"}
                        sx={{ color: highlightColor }}
                    >
                        {secTitle}
                    </Typography>
                </Box>
                <Typography
                    fontSize={"18px"}
                    fontWeight={600}
                    textAlign={"center"}
                    sx={{ color: highlightColor }}
                >
                    Contact : {ownerPhone}
                </Typography>
                <Typography
                    fontSize={"16px"}
                    fontWeight={600}
                    textAlign={"center"}
                    sx={{ color: highlightColor }}
                >
                    {Address}
                </Typography>
            </Box>
        </Box>
    );
};

export default BottomMenu;
