"use client"

import { usePathname } from 'next/navigation';
import React from 'react'
import BottomNav from '../BottomNavigation/BottomNav';

const Applayout = () => {

    const pathname = usePathname();

    // hide BottomNav on Intro & Welcome (your home `/` route)
    const hideBottomNav = pathname === "/";


    return (
        <div>
            {!hideBottomNav && <BottomNav />} {/* 👈 render only if not intro/welcome */}
        </div>
    )
}

export default Applayout