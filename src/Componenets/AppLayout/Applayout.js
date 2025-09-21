'use client';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import BottomNav from '../BottomNavigation/BottomNav';

const Applayout = () => {
    const pathname = usePathname();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const hideBottomNav = pathname === "/";

    // Wait for client-side hydration
    if (!mounted) return null;

    return (
        <>
            {!hideBottomNav && <BottomNav />}
        </>
    );
}

export default Applayout;
