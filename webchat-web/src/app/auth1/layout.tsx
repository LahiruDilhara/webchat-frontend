export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return <div className="text-on-background min-h-screen">
        {children}
    </div>;
}