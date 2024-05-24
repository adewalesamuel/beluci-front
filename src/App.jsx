import { BrowserRouter } from "react-router-dom"
import { Components } from "./components";
import { MockData } from "./MockData";
import { Fragment } from "react";

function App() {
    const SectionMap = {
        homeHero: Components.HomeHeroSection,
        homeEvent: Components.HomeEventSection,
        homePresident: Components.HomePresidentSection,
        homeTeamDetail: Components.HomeTeamDetailSection,
        homeTeamList: Components.HomeTeamListSection
    }

    return (
        <BrowserRouter>
            <Components.Header />
            <main>
                {MockData.page.sectionList.map((sectionData, index) => {
                    const SectionComponent = SectionMap[sectionData.name] ?? null;
                    return (<Fragment key={index}>
                        <SectionComponent data={sectionData} />
                    </Fragment>)
                })}
                <Components.CTASection />
            </main>
            <Components.Footer />
        </BrowserRouter>
    )
}

export default App
