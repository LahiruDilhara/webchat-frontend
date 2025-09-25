import { useEffect, useState } from "react";

const breakpoints = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    '2xl': 1536,
}

export type Breakpoint = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

export default function useBreakpoint() {
    const [breakpoint, setBreakpoint] = useState<Breakpoint>(() => {
        if (typeof window === 'undefined') return "xs"; // default value for SSR
        return getBreakpoint(window.innerWidth);
    });

    useEffect(() => {
        const handleResize = () => {
            const newBreakpoint = getBreakpoint(window.innerWidth);
            setBreakpoint(newBreakpoint);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return { breakpoint };
}

const getBreakpoint = (width: number): Breakpoint => {
    if (width >= breakpoints["2xl"]) return "2xl";
    if (width >= breakpoints.xl) return "xl";
    if (width >= breakpoints.lg) return "lg";
    if (width >= breakpoints.md) return "md";
    if (width >= breakpoints.sm) return "sm";
    return "xs";
};