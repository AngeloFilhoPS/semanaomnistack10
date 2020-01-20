import React, { useState, useEffect } from 'react';
import api from './api';
import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';
import DevForm from './components/DevForm';
import DevItem from './components/DevItem';

//conceito principais do React : Componente:Funcao(bloco isolado) que retorna conteúdo HTML,CSS,JAVASCRIPT(primeira letra sempre uppercase) e um componente por arquivo, que não interfere no restante da aplicacao
//Propriedade: Atributos dos HTML, informacoes do componentes pai passa para o componente filho
//Estado: Informacao mantida pelo componente (Imutabilidade )


function App() {
  const [devs,setDevs]= useState([]);


useEffect(()=>{
  async function loadDevs(){
    const response = await api.get('/devs');
    setDevs(response.data);
  }

  loadDevs();
},[]);

  async function handleAddDev(data) {
  
    const response = await api.post('/devs', data);
    

    setDevs([...devs, response.data]);

  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
          <DevForm onSubmit={handleAddDev}/> 
      </aside>

      <main>
        <ul>
        {devs.map(dev=>(
        <DevItem key={dev._id} dev={dev}/>
         
  ))}




        </ul>

      </main>
    </div >

  );
}

export default App;
