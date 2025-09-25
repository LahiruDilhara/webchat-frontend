const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="w-screen h-screen flex flex-col">
            <nav className="h-15 flex flex-row items-center px-sm">
                <h1 className="text-xl font-extrabold"><span className="text-blue-600">W</span>eb<span className="text-purple-600">C</span>hat</h1>
            </nav>
            <main className="bg-amber-950 flex-1 px-sm">{children}</main>
        </div>
    );
}

export default Layout;