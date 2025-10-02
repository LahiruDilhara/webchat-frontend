type props = {
    onClick?: () => void;
}

const Overlay = ({ onClick}: props) => {
    return (
        <div className="fixed inset-0 bg-black opacity-50 z-40 h-screen w-screen" onClick={onClick}>
        </div>
    );
}

export default Overlay;