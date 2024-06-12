import ScrollAnimation from "react-animate-on-scroll"

export function EventAboutSection({data}) {
    return (
        <section className="bg-light py-2" id={data.id}>
            <div className="container py-3">
                <div className="py-3">
                    <h1 className="mb-3 text-uppercase" style={{fontWeight: '200'}}>
                        {data.title}
                    </h1>
                    <p className="mt-2">{data.description}</p>
                </div>
            </div>
        </section>
    )
}