import { Fragment, useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Components } from "../components";
import { Views } from ".";
import { Services } from "../services";

export function PageView() {
    let abortController = new AbortController();

    const SectionMap = {
        homeHero: Components.HomeHeroSection,
        homeEvent: Components.HomeEventSection,
        homePresident: Components.HomePresidentSection,
        homeTeamList: Components.HomeTeamListSection,
        homeTeamDetail: Components.HomeTeamDetailSection,
        titleHeader: Components.TitleHeader,
        service: Components.ServiceSection,
        pemAbout: Components.PemAboutSection,
        pemFeature: Components.PemFeatureSection,
        memberAbout: Components.MemberAboutSection,
        eventAbout: Components.EventAboutSection,
        eventList: Components.EventListSection,
        contactAbout: Components.ContactAboutSection
    }

    const {pathname} = useLocation();
    // const pageName = pathname.replace('/', '');

    const [page, setPage] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [isNotFound, setIsNotFound] = useState(false);

    const init = useCallback(async () => {
        setIsLoading(true);
        setPage({});
        setIsNotFound(false);

        try {
            const {page} = await Services.PageService.getBySlug(
                pathname == "/" ? '/accueil' : pathname, abortController.signal);

            setPage(page);
        } catch (error) {
            if (error.status && error.status === 404)
                setIsNotFound(true);

            console.log(error);
        } finally {
            setIsLoading(false);
        }
    }, [pathname])

    useEffect(() => {
        init();

        return () => {
            abortController.abort();
            abortController = new AbortController();
        }
    }, [init]);

    return (
        <Components.Loader isLoading={isLoading}>
            {page?.section_list?.map((sectionData, index) => {
                const SectionComponent = SectionMap[sectionData.name] ?? null;

                if (!SectionComponent) return null;

                return (<Fragment key={index}>
                    <SectionComponent data={sectionData} />
                </Fragment>)
            })}

            {isNotFound && <Views.NotFoundView />} 
        </Components.Loader>
    )
}