
import { TbCalendar as CalendarIcon } from "react-icons/tb";

export function EventItem(props) {
    return (
        <div className="row align-items-strech">
            <div className="col-12 col-lg-6 position-relative" style={{
                backgroundImage: `url(${props.event.img_url})`,
                backgroudSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}>
            </div>
            <div className="col-12 col-lg-6 p-4 bg-primary 
            text-white">
                <p className="text-uppercase">
                    {props.event.name}
                </p>
                <div className="my-2 d-flex flex-column">
                    <div className="bg-white text-primary d-flex align-items-center p-1 mb-3">
                        <CalendarIcon size={18} /> 
                        {new Date(props.event.date).toLocaleDateString()}
                    </div>
                    <form className="d-flex flex-wrap">
                        <input type="text" placeholder="Saisir une date" className="flex-fill bg-dark form-control border-dark" />
                        <button className="btn btn-secondary w-100">Valider</button>
                    </form>
                </div>
            </div>
        </div>
    )
    
}