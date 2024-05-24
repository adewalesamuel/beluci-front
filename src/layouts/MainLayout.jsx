import { Components } from "../components";

export function MainLayout({children}) {
    return (
        <>
            <Components.Header />
            <main>
                {children}
                <Components.CTASection />
            </main>
            <Components.Footer />
        </>
    )
}