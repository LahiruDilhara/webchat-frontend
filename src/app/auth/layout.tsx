export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return <div className="text-on-background h-full md:flex md:justify-center">
        {children}
    </div>;
}