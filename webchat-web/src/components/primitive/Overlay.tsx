import { X } from "lucide-react";

type props = {
    onClick?: () => void;
    children?: React.ReactNode;
    onClose?: () => void;
    className?: string;
    label?: string;
}

const Overlay = ({ onClose,children,className,label }: props) => {
    return (
        <>
            <div className="fixed inset-0 bg-black opacity-50 z-40 h-screen w-screen" onClick={onClose}></div>
            <div className="fixed inset-0 z-100 flex justify-center items-center h-screen w-screen" onClick={onClose}>
                <div className={`opacity-100 flex justify-center items-center ${className}`} onClick={(e) => e.stopPropagation()}>
                    <div className="h-full w-full bg-card-bg grid grid-rows-[1fr_20fr] md:p-lg md:gap-sm md:rounded-xl">
                        <div className=" w-full flex items-center justify-between px-md py-sm bg-background md:rounded-xl">
                            {label && <div className="text-body text-center flex-1">{label}</div>}
                            <div className="cursor-pointer hover:brightness-75" onClick={onClose}>
                                <X size={32} />
                            </div>
                        </div>
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Overlay;