import { useState } from "react";
function Nuevo() 
{
    const [contador, setContador] = useState(0);
    const sumar = () => 
    {
        setContador(contador + 1);
    }
    const restar = () => 
    {
        setContador(contador - 1);
    }

    return(
        <div>
            <h1>Contador de Lizeth Carina Condori Huanca</h1>
            <h2>{contador}</h2>
            <button onClick={sumar}>
                Click para aumentar el contador
            </button>
            <br />
            <button onClick={restar}>
                Click para reducir el contador
            </button>
        </div>
    );
}
export default Nuevo;