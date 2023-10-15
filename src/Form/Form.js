import "../globals.css"
import Input from "./Input.js";
import Botao from "./Botao.js";
import { useState, useRef } from "react";

// const tiposDeDados = {
//   text: 'text',
//   number: 'number',
//   date: 'date',
//   hour: 'time',
// };

// const dados = [
//   {
//     nome: 'Motorista',
//     set: 'nomeMotorista',
//     tipo: tiposDeDados.text,
//     id: 'motorista'
//   },
//   {
//     nome: 'Plantão CCO',
//     set: 'plantaoCco',
//     tipo: tiposDeDados.text,
//     id: 'plantaoCco'
//   },
//   {
//     nome: 'Número do Carro',
//     set: 'numeroCarro',
//     tipo: tiposDeDados.number,
//     id: 'numero-do-carro'
//   },
//   {
//     nome: 'Horário do Carro',
//     set: 'horarioCarro',
//     tipo: tiposDeDados.hour,
//     id: 'horario-do-carro'
//   },
//   {
//     nome: 'Linha do Carro',
//     set: 'linhaCarro',
//     tipo: tiposDeDados.text,
//     id: 'linha-do-carro'
//   },
//   {
//     nome: 'Número do carro Socorro',
//     set: 'numeroSocorro',
//     tipo: tiposDeDados.number,
//     id: 'numero-do-carro-socorro'
//   },
//   {
//     nome: 'Horário do chamado',
//     set: 'horarioChamado',
//     tipo: tiposDeDados.hour,
//     id: 'horario-do-chamado'
//   },
//   {
//     nome: 'Horário da saída do socorro',
//     set: 'horarioSaidaSocorro',
//     tipo: tiposDeDados.hour,
//     id: 'horario-de-saida'
//   },
//   {
//     nome: 'Horário da chegada no local',
//     set: 'chegadaLocal',
//     tipo: tiposDeDados.hour,
//     id: 'horario-da-chegada-sos'
//   },
//   {
//     nome: 'Motivo do socorro',
//     set: 'motivoSOS',
//     tipo: tiposDeDados.text,
//     id: 'motivo-sos'
//   },
//   {
//     nome: 'Local do socorro',
//     set: 'localSOS',
//     tipo: tiposDeDados.text,
//     id: 'local-sos'
//   },
//   {
//     nome: 'Houve troca de Carro?',
//     set: 'houveTrocaCarro',
//     tipo: tiposDeDados.text,
//     id: 'houve-troca'
//   },
//   {
//     nome: 'Horário de retorno',
//     set: 'horarioRetorno',
//     tipo: tiposDeDados.hour,
//     id: 'hora-retorno'
//   },
//   {
//     nome: 'Horário da chegada em Iguatu',
//     set: 'horarioChegadaIguatu',
//     tipo: tiposDeDados.hour,
//     id: 'hora-chegada-IAU'
//   },
//   {
//     nome: 'Data da Viagem',
//     set: 'dataViagem',
//     tipo: tiposDeDados.date,
//     id: 'data-viagem'
//   },
// ]



const Form = () => {

  const [nomeMotorista, setNomeMotorista] = useState("");
  const [plantaoCco, setPlantaoCco] = useState("");
  const [numeroCarro, setNumeroCarro] = useState("");
  const [horarioCarro, setHorarioCarro] = useState("");
  const [linhaCarro, setLinhaCarro] = useState("");
  const [numeroSocorro, setNumeroSocorro] = useState("");
  const [horarioChamado, setHorarioChamado] = useState("");
  const [horarioSaidaSocorro, setHorarioSaidaSocorro] = useState("");
  const [chegadaLocal, setChegadaLocal] = useState("");
  const [motivoSOS, setMotivoSOS] = useState("");
  const [localSOS, setLocalSOS] = useState("");
  const [houveTrocaCarro, setHouveTrocaCarro] = useState("");
  const [horarioRetorno, setHorarioRetorno] = useState("");
  const [horarioChegadaIguatu, setHorarioChegadaIguatu] = useState("");
  const [dataViagem, setDataViagem] = useState("");

  const [mensagemErro, setMensagemErro] = useState("");
  const [textoGerado, setTextoGerado] = useState("");
  const [solucao, setSolucao] = useState("");
  const textRef = useRef();

  const gerarTexto = () => {
    if (
      !numeroCarro ||
      !horarioCarro ||
      !linhaCarro ||
      !numeroSocorro ||
      !horarioChamado ||
      !horarioSaidaSocorro ||
      !chegadaLocal ||
      !motivoSOS ||
      !localSOS ||
      !houveTrocaCarro ||
      !horarioRetorno ||
      !horarioChegadaIguatu ||
      !dataViagem
    ) {
      setMensagemErro("Preencha todos os campos!");
      setTextoGerado("");
      return;
    }
    const limparInputs = () => {
      setNomeMotorista("");
      setPlantaoCco("");
      setNumeroCarro("");
      setHorarioCarro("");
      setLinhaCarro("");
      setNumeroSocorro("");
      setHorarioChamado("");
      setHorarioSaidaSocorro("");
      setChegadaLocal("");
      setMotivoSOS("");
      setLocalSOS("");
      setHouveTrocaCarro("");
      setHorarioRetorno("");
      setHorarioChegadaIguatu("");
      setDataViagem("");
    };
    const textoGerado = `Informo que o carro ${numeroCarro}, horário ${horarioCarro}, linha ${linhaCarro.toUpperCase()}, do dia ${dataViagem}, foi socorrido com o carro ${numeroSocorro}. Segue abaixo as informações.
    - Motorista: ${nomeMotorista.toUpperCase()}
    - Plantão CCO: ${plantaoCco.toUpperCase()}
    - Horário do Chamado: ${horarioChamado}
    - Horário da Saída do Socorro: ${horarioSaidaSocorro}
    - Chegado no Local: ${chegadaLocal.toUpperCase()}
    - Motivo do SOS: ${motivoSOS.toUpperCase()}
    - Local: ${localSOS.toUpperCase()}
    - Houve Troca do Carro? ${houveTrocaCarro.toUpperCase()}
    - Horário de Retorno: ${horarioRetorno}
    - Horário de Chegada em Iguatu: ${horarioChegadaIguatu}
    - Solução: ${solucao}`;

    setMensagemErro("");
    setTextoGerado(textoGerado);
    limparInputs();
  };

  const handleCopyClick = () => {
    if (textRef.current) {
      const range = document.createRange();
      range.selectNodeContents(textRef.current);
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);

      document.execCommand("copy");
      selection.removeAllRanges();

      alert("Texto copiado com sucesso!");
    }
  };

  return (
    <form className="form">

      {/* {dados.map(({ nome, tipo, id, set }) => (
        <div key={id}>

          <Input
            id={id}
            label={nome}
            value={eval(set)}
            placeholder={nome}
            type={tipo}
            onChange={(e) => eval(`set${set}`)(e.target.value)}
            required
          />

        </div>
      ))} */}

      <label>Motorista:</label>
      <input 
        className="input-type"
        type="text"
        placeholder="Nome do motorista"
        value={nomeMotorista}
        onChange={(e) => setNomeMotorista(e.target.value)}
      />

      <label>Solução:</label>
      <textarea value={solucao} onChange={(e) => setSolucao(e.target.value)} />

      <div className="mt-2 text-center">
        <Botao onClick={gerarTexto} type="submit" title="Gerar texto" className="uppercase bg-indigo-500 px-4 py-2 text-white font-medium rounded-lg hover:bg-indigo-700 duration-300 transition-colors shadow-md" />
      </div>



      {mensagemErro && <p className="text-red-600 font-bold">{mensagemErro}</p>}

      {textoGerado && (
        <div className="texto-gerado-container">
          <h3>Texto Gerado:</h3>
          <pre className="texto-gerado" ref={textRef}>
            {textoGerado}
          </pre>
          <button onClick={handleCopyClick}>Copiar Texto</button>
        </div>
      )}

    </form>
  );
};
export default Form;
