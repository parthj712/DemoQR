import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import AnimatedCard from '../AnimatedCard/AnimatedCard'
import CommonCard from '../CommonCard/CommonCard'
import data from "../Constant/AllConstant"
import { useRouter, useSearchParams } from 'next/navigation'

const MainCards = () => {

    const [sections, setSections] = useState([]);

    const router = useRouter();

    //highight section
    const searchParams = useSearchParams();
    const highlightSection = searchParams.get("highlight");
    const [highlightedSection, setHighlightedSection] = useState(null);


    const menuData = sections.length > 0 ? sections : data();

    useEffect(() => {
        if (highlightSection) {
            const sectionElement = document.getElementById(highlightSection);
            if (sectionElement) {
                // Step 1: scroll immediately
                sectionElement.scrollIntoView({ behavior: "smooth", block: "center" });

                // Step 2: wait 1s before applying highlight
                const timer = setTimeout(() => {
                    setHighlightedSection(highlightSection);

                    // remove highlight after 3s
                    setTimeout(() => setHighlightedSection(null), 3000);

                    // 🔥 remove ?highlight=... from URL so it won't re-trigger on back
                    const newParams = new URLSearchParams(window.location.search);
                    newParams.delete("highlight");
                    const newUrl = window.location.pathname + (newParams.toString() ? `?${newParams.toString()}` : "");
                    window.history.replaceState({}, "", newUrl);
                }, 1000);

                return () => clearTimeout(timer);
            }
        }
    }, [highlightSection]);


    const handleCardClick = (sectionKey) => {
        router.push(`/menu/${sectionKey}`);
    };

    return (
        <div>
            <Box p={3} sx={{ overflow: "hidden" }}>
                {menuData.map((dish, index) => (
                    <Box
                        key={index}
                        id={dish.sectionKey}
                        onClick={() => handleCardClick(dish.sectionKey)}
                        sx={{
                            transition: "all 0.4s",
                            backgroundColor:
                                highlightedSection === dish.sectionKey ? "#ffb520ff" : "transparent",
                            borderRadius: highlightedSection === dish.sectionKey ? "18px" : "0px",
                            boxShadow:
                                highlightedSection === dish.sectionKey
                                    ? "0 0 28px rgba(255, 155, 32, 1.5)"
                                    : "none",
                        }}
                    >
                        <AnimatedCard>
                            <CommonCard
                                title_en={dish.title_en}
                                title_mr={dish.title_mr}
                                imageUpload={dish.imageUpload || dish.image}
                            />
                        </AnimatedCard>
                    </Box>
                ))}
            </Box>
        </div>
    )
}

export default MainCards