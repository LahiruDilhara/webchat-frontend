import getColorForString from "@/utils/ColorUtil";

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="w-full h-full px-sm">
            {children}
        </div>
    );
}

export default Layout;