type NavItemProps = {
    label: string;
    icon?: React.ReactNode;
    onClick?: () => void;
}

const OutlineNavItem = ({ label, icon, onClick }: NavItemProps) => {
    return (
        <div className="flex flex-row items-center gap-sm px-sm rounded cursor-pointer ring-nav-item-bg ring-4  hover:border-bg-nav-item-hover active:bg-nav-item-active" onClick={onClick}>
            {icon && <>{icon}</>}
            <h1 className="text-caption">{label}</h1>
        </div>
    );
}

export default OutlineNavItem;