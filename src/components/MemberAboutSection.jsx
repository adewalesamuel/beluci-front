import { Link } from "react-router-dom";

export function MemberAboutSection({data}) {
    return (
        <section id={data.name} className="bg-light py-4">
            <div className='container mb-3' style={{maxWidth: '900px'}}>
                <h1 className="font-weight-lighter text-uppercase">
                    {data.title}
                </h1>
                <p className="mt-3">{data.description}</p>
                <Link to={`/${data.buttonLink}`} className="btn btn-block bg-primary 
                text-white btn-lg text-uppercase rounded-pill px-5 py-4 col-12 
                col-md-5 mx-auto my-5">
                    {data.buttonText}
                </Link>
            </div>
        </section>
    )
}