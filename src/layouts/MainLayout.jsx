import { useLocation } from "react-router-dom";
import { Components } from "../components";
import { useEffect, useState } from "react";

export function MainLayout({children}) {
    const {pathname} = useLocation();

    const [canShowCta, setCanShowCta] = useState(true);

    useEffect(() => {
        if (pathname === '/devenir-membre') {
            setCanShowCta(false);
        }else {
            setCanShowCta(true);
        }
    },[pathname])
    return (
        <>
            <Components.Header />
            <main>
                {children}
                {canShowCta && <Components.CTASection />}
            </main>
            <Components.Footer />
        </>
    )
}