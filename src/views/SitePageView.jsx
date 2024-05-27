import { Fragment } from "react";
import { useLocation } from "react-router-dom";
import { Components } from "../components";
import { MockData } from "../MockData";
import { Views } from ".";

export function PageView() {
    const SectionMap = {
        homeHero: Components.HomeHeroSection,
        homeEvent: Components.HomeEventSection,
        homePresident: Components.HomePresidentSection,
        homeTeamDetail: Components.HomeTeamDetailSection,
        homeTeamList: Components.HomeTeamListSection,
        titleHeader: Components.TitleHeader,
        serviceSection: Components.ServiceSection,
        pemAboutSection: Components.PemAboutSection,
        pemFeatureSection: Components.PemFeatureSection
    }

    const {pathname} = useLocation();
    const pageName = pathname.replace('/', '');

    return (
        <>
            {MockData.page[pageName] && 
                <>
                    {MockData.page[pageName].sectionList.map((sectionData, index) => {
                        const SectionComponent = SectionMap[sectionData.name] ?? null;

                        if (!SectionComponent) return null;

                        return (<Fragment key={index}>
                            <SectionComponent data={sectionData} />
                        </Fragment>)
                    })}
                </>
            }

            {!MockData.page[pageName] && <Views.NotFoundView />} 
        </>
    )
}