export default function getColorForString(str: string): string {
    const colors = [
        'bg-red-500',
        'bg-green-500',
        'bg-blue-500',
        'bg-yellow-500',
        'bg-purple-500',
        'bg-pink-500',
        'bg-indigo-500',
        'bg-teal-500',
        'bg-orange-500',
        'bg-cyan-500',
        'bg-lime-500',
        'bg-emerald-500',
        'bg-fuchsia-500',
        'bg-rose-500',
        'bg-violet-500',
        'bg-sky-500',
        'bg-amber-500',
        'bg-slate-500',
        'bg-gray-500',
        'bg-zinc-500',
        'bg-neutral-500',
        'bg-stone-500',
    ];
    const firstChar = str.charCodeAt(0);
    const index = firstChar % colors.length;
    return colors[index];
}

export function getOutlineColorForString(str: string): string {
    const colors = [
        'outline-red-500',
        'outline-green-500',
        'outline-blue-500',
        'outline-yellow-500',
        'outline-purple-500',
        'outline-pink-500',
        'outline-indigo-500',
        'outline-teal-500',
        'outline-orange-500',
        'outline-cyan-500',
        'outline-lime-500',
        'outline-emerald-500',
        'outline-fuchsia-500',
        'outline-rose-500',
        'outline-violet-500',
        'outline-sky-500',
        'outline-amber-500',
        'outline-slate-500',
        'outline-gray-500',
        'outline-zinc-500',
        'outline-neutral-500',
        'outline-stone-500',
    ];
    const firstChar = str.charCodeAt(0);
    const index = firstChar % colors.length;
    return colors[index];
}