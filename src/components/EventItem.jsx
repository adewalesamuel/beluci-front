import { TbCalendar as CalendarIcon } from "react-icons/tb";
import { Link } from "react-router-dom";
import { Utils } from "../utils";

export function EventItem(props) {
    const {getExcerpt} = Utils.String;
    return (
        <div className="shadow-sm bg-white">
            <div className="row g-0">
                <div className="col-12 col-lg-4">
                    <img src={props.event.img_url} width={255} height={255} 
                    alt={props.event.name} loading="lazy" style={{
                        objectFit: 'cover', 
                        maxHeight: '400px', 
                        objectPosition: 'center'
                    }}/>
                </div>
                <div className="col-12 col-lg-8 p-3">
                    <div className="p-3 pr-md-4">
                        <div className="text-uppercase mb-0">
                            {props.event.name}
                        </div>
                        <small>{props.event.address}</small>
                        <div className="d-flex p-1">
                            <CalendarIcon size={18} /> 
                            {new Date(props.event.date).toLocaleDateString()}
                        </div>
                        <p>{getExcerpt(props.event.description)}</p>
                        <Link className="btn btn-primary btn-sm" to={`/galleries/${props.event.id}`}>
                            en savoir plus
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
    
}