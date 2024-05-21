import { BrowserRouter, Link } from "react-router-dom"

function App() {

  return (
    <BrowserRouter>
        <main>
            <header>
                <div id="topHeader" className="bg-primary text-white py-3">
                    <div className="container d-flex justify-content-between">
                        <div className="d-flex">
                        <small>Appelez-nous : </small>
                        <small>
                            <a href="tel: +225 27 22  43 34 00" 
                            className="text-white"> +225 27 22  43 34 00</a>
                        </small>
                        <small className="ml-4 d-inline-blockc">Mail : </small> 
                        <small>
                            <a href="mailto:info@beluci.com" className="text-white">
                            info@beluci.com
                            </a>
                        </small>
                        </div>
                        <small>
                            <Link to={'/contact'} className="text-white">Contact</Link>
                        </small>
                    </div>
                </div>
                <div id="mainMenu"></div>
            </header>
        </main>
    </BrowserRouter>
  )
}

export default App
