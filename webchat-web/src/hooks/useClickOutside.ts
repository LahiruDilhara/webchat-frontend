import { useEffect, useRef, useState } from "react";

export default function useClickOutside<T extends HTMLElement>(onOutSideClick: () => void) {
    const ref = useRef<T>(null);

    useEffect(() => {
        function handleOutsideClick(event: MouseEvent) {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                onOutSideClick()
            }
        }

        document.addEventListener("mousedown", handleOutsideClick);

        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        }
    }, [onOutSideClick])


    return {
        ref
    }
}