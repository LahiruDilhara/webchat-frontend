import getColorForString from "@/utils/ColorUtil";
import NavUser from "./navUser";

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="w-screen h-screen flex flex-col">
            <nav className="min-h-md flex flex-row items-center px-sm justify-between shadow-md shadow-shadow-primary/70 bg-primary">
                <h1 className="text-xl font-extrabold"><span className="text-blue-600">W</span>eb<span className="text-purple-600">C</span>hat</h1>
                <NavUser />
            </nav>
            <main className="flex-1 px-sm w-full overflow-hidden">
                {children}
            </main>
        </div>
    );
}

export default Layout;