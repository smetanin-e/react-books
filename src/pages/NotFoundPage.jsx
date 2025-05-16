import { Link } from "react-router-dom"

function NotFoundPage() {
    return(
        <div>
            <h1 className="title">Страница не найдена</h1>
            <Link to='/'>
                <button className="btn btn_black">на главную</button>
            </Link>
            
        </div>
    )
}
export default NotFoundPage