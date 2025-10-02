type props = {
    onClick?: () => void;
    children?: React.ReactNode;
}

const Overlay = ({ onClick, children }: props) => {
    return (
        <div className="fixed inset-0 bg-black opacity-50 z-40 h-screen w-screen" onClick={onClick}>
            <div className="h-full w-full" onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
}

export default Overlay;