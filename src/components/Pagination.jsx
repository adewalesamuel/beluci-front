import { TbChevronLeft, TbChevronRight } from "react-icons/tb";
import { Link } from "react-router-dom";

export function Pagination(props){

    return(
        <div className="pagination-wrapper">
            <ul className="pagination pagination-circle mg-b-0">
                <li className="page-item">
                    <Link className="page-link" to={`?page=${props.page > 1 ? 
                        props.page - 1 : props.page}`}>
                        <TbChevronLeft size={20}/>
                    </Link>
                </li>
                {Array(props.pageLength).fill(0).map((item, index) => {
                return (
                    <li className={`page-item ${props.page === index + 1 ? 
                    "active" : ''}`} key={index}>
                        <Link className="page-link" to={`?page=${index + 1}`}>
                            {index + 1}
                        </Link>
                    </li>)
                })}
                <li className="page-item">
                    <Link className="page-link" to={`?page=${props.page < props.pageLength ? 
                        props.page + 1 : props.page}`}>
                        <TbChevronRight size={20}/>
                    </Link>
                </li>
            </ul>
        </div>
    )
}