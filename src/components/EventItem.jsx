import { TbCalendar as CalendarIcon } from "react-icons/tb";
import { Link } from "react-router-dom";

export function EventItem(props) {
    return (
        <div className="shadow-sm bg-white">
            <div className="row g-0">
                <div className="col-12 col-lg-4">
                    <img className="img-fluid h-100" src={props.event.img_url} 
                    alt={props.event.name} style={{objectFit: 'cover'}} loading="lazy"/>
                </div>
                <div className="col-12 col-lg-8 p-3">
                    <div className="p-3 p-lg-0 pr-lg-4">
                        <div className="text-uppercase mb-0">
                            {props.event.name}
                        </div>
                        <small>{props.event.address}</small>
                        <div className="d-flex p-1">
                            <CalendarIcon size={18} /> 
                            {new Date(props.event.date).toLocaleDateString()}
                        </div>
                        <p>{props.event.description}</p>
                        <Link className="btn btn-primary btn-sm" to={`/galleries/${props.event.id}`}>
                            en savoir plus
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
    
}