import getColorForString from "@/utils/ColorUtil";
import NavUser from "./navUser";

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="w-full h-full px-sm">
            {children}
        </div>
    );
}

export default Layout;