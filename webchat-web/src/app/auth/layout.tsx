export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return <div className="text-on-background min-h-screen h-screen md:flex md:justify-center">
        {children}
    </div>;
}