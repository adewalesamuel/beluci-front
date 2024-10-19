
export function PemPartnerSection({data}) {
    return (
            <section className="py-3 text-center">
                <h2>{data.title}</h2>
                {data.partner_item_list.map((partnerItem, index) => {
                    return (<img src={partnerItem.imgUrl} width={180} className='img-fluid mr-3' 
                        key={index} loading="lazy"/>)

                })}
            </section>
    )
}
