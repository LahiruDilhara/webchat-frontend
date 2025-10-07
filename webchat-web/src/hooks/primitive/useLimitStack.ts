import { useState } from "react";

export default function useLimitStack<T>(limit: number) {
    const [stack, setStack] = useState<T[]>([]);

    const addItem = (item: T) => {
        const newStack = [...stack];
        const indexOfItem = newStack.indexOf(item);
        if (indexOfItem !== -1) {
            newStack.splice(indexOfItem, 1);
            newStack.splice(0, 0, item);
            setStack(newStack);
            return;
        }
        if (newStack.length >= limit) {
            newStack.pop();
        }
        newStack.splice(0, 0, item);
        setStack(() => newStack);
    }

    const resetStack = () => {
        setStack([]);
    }

    return { stack, addItem, resetStack };
}