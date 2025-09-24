type Props = {
    icon: React.ReactNode;
    label: string;
    onClick: () => void;
    iconPosition?: 'left' | 'right';
    className?: string;
}

const IconOutlinedButton = ({ icon, label, onClick, iconPosition = 'left', className }: Props) => {
    return (
        <button onClick={onClick} className={`flex min-h-0 min-w-0 items-center gap-sm px-sm py-xs rounded-lg hover:brightness-75 cursor-pointer border-4 border-primary justify-center ${className}`}>
            {iconPosition === 'left' && icon}
            <h1 className="text-button">{label}</h1>
            {iconPosition === 'right' && icon}
        </button>
    );
}

export default IconOutlinedButton;