type props = {
    onToggle: () => void;
    toggle: boolean;
    label: string;
    className?: string;
    buttonColor?: string;
    bgColor?: string;
    width?: string;
    height?: string;
}
const LabelToggler = ({ onToggle, toggle, label, className, buttonColor = "bg-accent" , bgColor = "bg-card-bg", width = "w-10", height = "h-5"}: props) => {
    return (
        <div className={`flex justify-between ${className}`}>
            <h1 className="text-input-label text-caption">{label}</h1>
            <div>
                <div className={`${width} ${height} ${bgColor} rounded-4xl flex justify-between items-center cursor-pointer ${toggle ? "justify-end" : "justify-start"}`} onClick={onToggle}>
                    <div className={`h-full aspect-square rounded-full scale-105 ${toggle ? "brightness-90" : "brightness-40"} ${buttonColor}`}></div>
                </div>
            </div>
        </div>
    );
}

export default LabelToggler;