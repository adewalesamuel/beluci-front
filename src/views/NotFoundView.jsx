import { Link } from "react-router-dom"

export function NotFoundView() {
    return (
        <div id="notFound" className="m-5 py-5 px-2">
            <div className="d-flex flex-column align-items-center">
                <h1>404 Oups !</h1>
                <p>Cette page semble ne pas exister.</p>
                <Link to={'/'} className="btn bg-primary text-white mt-3 rounded-pill">
                    Retour à l&apos;accueil
                </Link>
            </div>
        </div>
    )
}