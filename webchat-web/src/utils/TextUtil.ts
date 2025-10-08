import { v4 as uuidv4 } from 'uuid';


export function capitalizeFirstLetter(text: string): string {
    if (text.length === 0) return text;
    return text.charAt(0).toUpperCase() + text.slice(1);
}

export function generateUUID(): string {
    return uuidv4();
}