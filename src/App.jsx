import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Views } from "./views";
import { Layouts } from "./layouts";

function App() {
    return (
        <BrowserRouter>
            <Layouts.MainLayout>
                <Routes>
                    <Route path='*' element={<Views.PageView />}/>
                </Routes>    
            </Layouts.MainLayout>
        </BrowserRouter>
    )
}

export default App
