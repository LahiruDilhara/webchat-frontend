type SideBarBottomButtonProps = {
    folded: boolean;
    onClick: () => void;
    icon: string;
    iconColor: string;
    name:string;
}

const SideBarBottomButton = ({ folded, onClick, icon, iconColor,name }: SideBarBottomButtonProps) => {
    return (
        <div className={`cursor-pointer hover:brightness-70 flex flex-row lg:h-15 md:h-10 items-center  rounded-l-full rounded-r-full overflow-hidden ${folded ? "w-full" : "w-full bg-gray-900"}`} onClick={() => onClick()}>
            <div className="outline-8 outline-gray-950 cursor-pointer  lg:w-15 lg:h-15 md:h-10 md:w-10 flex items-center justify-center aspect-square rounded-full lg:text-3xl md:text-xl font-bold" style={{ backgroundColor: iconColor }}>{icon}</div>
            <div className={`text-gray-500 w-full lg:text-xl md:text-sm font-medium px-5 text-wrap ${folded ? "hidden" : ""}`}>{name}</div>
        </div>
    );
}

export default SideBarBottomButton;