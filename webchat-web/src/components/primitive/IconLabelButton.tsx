import { Caravan } from "lucide-react";

type Props = {
    icon: React.ReactNode;
    label: string;
    onClick: () => void;
    iconPosition?: 'left' | 'right';
    className?: string;
}
const IconLabelButton = ({ icon, label, onClick, iconPosition = 'left', className }: Props) => {
    return (
        <button onClick={onClick} className={`flex min-h-0 min-w-0 items-center gap-sm bg-primary px-sm py-xs rounded-md hover:brightness-75 cursor-pointer ${className}`}>
            {iconPosition === 'left' && icon}
            <h1 className="text-button">{label}</h1>
            {iconPosition === 'right' && icon}
        </button>
    );
}

export default IconLabelButton;