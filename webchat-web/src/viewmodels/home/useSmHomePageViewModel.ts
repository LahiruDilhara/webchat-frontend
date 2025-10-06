import { BadgePlus, Home, LucideProps, Unplug } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes, useState } from "react";

export default function useSmHomePageViewModel() {
    const [activeNavId, setActiveNavId] = useState(0);

    const navItems: { label: string; onClick: () => void; icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>; id: number }[] = [
        { label: "Join Room", onClick: () => setActiveNavId(1), icon: Unplug, id: 1 },
        { label: "Home", onClick: () => setActiveNavId(0), icon: Home, id: 0 },
        { label: "Add Room", onClick: () => setActiveNavId(2), icon: BadgePlus, id: 2 },
    ]

    return {
        activeNavId,
        navItems
    }
}