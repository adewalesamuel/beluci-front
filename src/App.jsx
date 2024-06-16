
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Views } from "./views";
import { Layouts } from "./layouts";
import { createContext, useCallback, useEffect, useState } from "react";
import { Services } from "./services";

export const MainContext = createContext({
    menu_items: [],
    pages: [],
    setPages: [],
})

function App() {
    const abortController = new AbortController();

    const [menu_items, setMenu_items] = useState([]);

    const init = useCallback(async () => {
        try {
            const {menu_items} = await Services.MenuItemService.getAll
            ({}, abortController.signal);

            setMenu_items(menu_items);
        } catch (error) {
         console.log(error);
        }
    }, [])

    useEffect(() => {
        init();
    }, [init]);
    return (
        <MainContext.Provider value={{menu_items}}>
            <BrowserRouter>
                <Layouts.MainLayout>
                    <Routes>
                        <Route path='*' element={<Views.PageView />}/>
                        <Route path="formulaire-membre" element={<Views.MemberCreateView />} />
                        <Route path="membres" element={<Views.PrivateView View={Views.MemberListView} />} />
                        <Route path="connexion" element={<Views.LoginView />} />
                    </Routes>    
                </Layouts.MainLayout>
            </BrowserRouter>
        </MainContext.Provider>
    )
}

export default App
