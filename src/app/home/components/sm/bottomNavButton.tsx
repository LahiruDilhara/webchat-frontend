type props = {
    label: string
    icon: React.ReactNode
    onClick: () => void
    active: boolean
}
const BottomNavButton = ({ label, icon, onClick, active }: props) => {
    return (
        <div className={`flex flex-col gap-xs items-center w-full rounded-2xl ${active ? "bg-card-hover pb-md pt-sm px-sm" : "p-sm"} cursor-pointer hover:brightness-75`} onClick={onClick}>
            <div className="">{icon}</div>
            <div className="text-caption">{label}</div>
        </div>
    );
}

export default BottomNavButton;