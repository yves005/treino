//import React, { useEffect, useState } from 'react';
//import Membro from "./Membro";
//import Title from "./title";
import React, { useState } from "react";

function App() {
  
  let [nome, setNome] = useState();
  let [cargo, setCargo] = useState();


  return (
    <div>
      <h1>Novo Membro</h1>
      <input type ="text" placeholder ="nome" onChange={(e) =>setNome(e.target.value)}></input>
      <br/>
      <input id="GS" type = "radio" name ="cargo" value = "gerente financeiro" onChange={(e) =>setCargo(e.target.value)}/>
      <label htmlfor="GS">Gerente financeiro</label>
      <br/>
      <input id="GP" type = "radio" name ="cargo" value ="Gerente de produtos" onChange={(e) =>setCargo(e.target.value)}/>
      <label htmlfor="GP">Gerente de produtos</label>
      <br/>
      <p>Nome do membro:{nome} </p>
      <p>Cargo do membro:{cargo} </p>

    </div>
  );
}

export default App;
