import React, {useState} from "react";

export default props => {

    const [valor, setValor] = useState(""); 
    const valor2 = props.titulo;

    function handle(e){
        setValor(e.target.value)
    }

    return (
        <div style={{display: "flex", flexDirection: "column"}}>
            <h2>{valor}</h2>
            <label htmlFor="">Controlado</label>
            <input  value={valor} onChange={handle}/>
            <label htmlFor="">Não Controlado</label>
            <input type="text" value={undefined} />
            <label htmlFor="">Leitura</label>
            <input type="text" value={valor2} readOnly/>
        </div>
    )
}