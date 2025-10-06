import { useEffect, useState } from "react";

export default function useDebounce<T>(value: T, delay: number): T {
    const [debouncedValue, setDebouncedValue] = useState<T>(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        // clear the timeout if value or delay changes before the timeout completes
        return () => clearTimeout(handler);
    }, [value, delay])

    return debouncedValue;
}