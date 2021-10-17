import React, { useState } from 'react';

export default function Calculo() {

    const [numero, setNum] = useState(0);

    return(

        <div>

            <h2>Contador</h2>
            <h3>Você clicou {numero} vezes!</h3>

            <button onClick={() => setNum (numero - 1)}>Decremento</button>
            <button onClick={() => setNum (numero + 1)}>Incremento</button>

        </div>


    )

}

