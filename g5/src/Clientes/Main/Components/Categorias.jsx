import { useNavigate } from "react-router-dom"

function Categorias(props){
    const navigate = useNavigate()

    const butOnClick2 = function(){
        navigate("/platos1")
    }
    return <div className="card mb-3">
        <img src= { props.restaurante.url }
        className="card-img-top img-fluid"
        alt="..."/>
        <div className="card-body">
        <button className="btn btn-primary" type="button"
            onClick= { butOnClick2 }><h5 className="card-title"> { props.restaurante.nombre }</h5></button> 
            <p className="card-text">.</p>
            <p className="card-text"><small className="text-muted">,,,</small></p>
        </div>
    </div>
}

export default Categorias