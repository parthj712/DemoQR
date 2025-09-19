import { Box, Button, Typography } from '@mui/material'
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { keyframes } from '@emotion/react';
import { motion } from "framer-motion";

import React from 'react'
import { useLanguage } from '@/Context/LanguageContext';


const textGradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const BottomMenu = () => {

    const ownerPhone = "9545934174"; // replace with actual number
    const ownerWhatsApp = "+91 9545934174"; // same as phone if WhatsApp registered
    const googleMapLink =
        "https://www.google.com/maps/place/Manas+Veg+Restaurant,+Karad+-+Chiplun+Rd,+Markandi,+Chiplun,+Maharashtra+415605";


    const { language } = useLanguage();

    const WhatsApp = language === 'mr' ? "व्हॉट्सॲप" : "WhatsApp";

    const Phone = language === 'mr' ? "फोन" : "Phone";

    const Map = language === 'mr' ? "आमच्यापर्यंत पोहोचण्यासाठी गुगल मॅप फॉलो करा" : "Follow Google Map to Reach Us";

    const mainTitle = language === 'mr' ? "स्कॅन & डाईन" : "Scan N Dine";

    const secTitle = language === 'mr' ? "तुमचा मेनू, सुंदरपणे पुन्हा डिझाइन केलेला." : "Your menu, beautifully reimagined"

    const Address = language === 'mr' ? "स्कॅन & डाईन, कराड - चिपळूण रोड, मार्कंडी, चिपळूण, महाराष्ट्र ४१५६०५" : "Scan N Dine, Karad - Chiplun Rd, Markandi, Chiplun, Maharashtra 415605"

    return (
        <>
            <Box
                display="flex"
                flexDirection="column"
                pt={4}
                px={4}
                pb={12}
                gap={3}
                sx={{
                    background: "linear-gradient(-45deg, #c42528ff, #c04848ff, #b32d2fff)",
                    backgroundSize: "400% 400%",
                    animation: "gradientMove 6s ease infinite",
                    color: "white",
                    "@keyframes gradientMove": {
                        "0%": { backgroundPosition: "0% 50%" },
                        "50%": { backgroundPosition: "100% 50%" },
                        "100%": { backgroundPosition: "0% 50%" },
                    },
                    borderTopRightRadius: "20px",
                    borderTopLeftRadius: "20px"
                }}
            >
                <Box display="flex" flexDirection="column" gap={2}>
                    <Box display="flex" flexDirection="row" gap={2}>
                        <Button
                            fullWidth
                            variant="contained"
                            startIcon={<WhatsAppIcon />}
                            sx={{
                                backgroundColor: "#12c252ff", // WhatsApp green
                                "&:hover": { backgroundColor: "#11a64dff" },
                                p: 1,
                                borderRadius: 2
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
                                backgroundColor: "#0c9797ff", // Teal for Phone
                                "&:hover": { backgroundColor: "#006666" },
                                p: 1,
                                borderRadius: 2
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
                            backgroundColor: "#2b7de8ff", // Blue for Location
                            "&:hover": { backgroundColor: "#145dbf" },
                            fontSize: language === 'mr' ? "13px" : "14px",
                            fontWeight: 500,
                            p: 1,
                            borderRadius: 2,
                            "& .MuiButton-startIcon": {
                                marginRight: 0.5, // remove left/right spacing
                            },
                        }}
                        onClick={() => window.open(googleMapLink, "_blank")}
                    >
                        {Map}
                    </Button>
                </Box>

                <Box display={"flex"} flexDirection={"column"} alignItems={"center"} gap={2}>
                    <Box>
                        <Typography fontSize={"26px"} color='#ffd735ff' fontWeight={600} textAlign={"center"}>{mainTitle}</Typography>
                        <Typography fontSize={"20px"} color='#ffd735ff' fontWeight={600} textAlign={"center"}>{secTitle}</Typography>
                    </Box>
                    <Typography fontSize={"18px"} color='#ffd735ff' fontWeight={600} textAlign={"center"}>Contact : {ownerPhone}</Typography>
                    <Typography fontSize={"16px"} color='#ffd735ff' fontWeight={600} textAlign={"center"}>{Address}</Typography>
                </Box>
            </Box>
        </>
    )
}

export default BottomMenu