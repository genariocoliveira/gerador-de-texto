import "./globals.css";
import React, { useState, useRef } from "react";
import { format } from "date-fns-tz";

const GeradorTexto = () => {
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

    // const dataFormatada = format(new Date(dataViagem), 'dd/MM/yyyy

    // Analisa a data no formato ISO
    const dataFormatada = format(new Date(), "dd/MM/yyyy");

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
    const textoGerado = `Informo que o carro ${numeroCarro}, horário ${horarioCarro}, linha ${linhaCarro.toUpperCase()}, do dia ${dataFormatada}, foi socorrido com o carro ${numeroSocorro}. Segue abaixo as informações.
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
    <div className="form break-words">
      <label>Motorista:</label>
      <input
        className="input-type"
        type="text"
        placeholder="Nome do motorista"
        value={nomeMotorista}
        onChange={(e) => setNomeMotorista(e.target.value)}
      />

      <label>Plantão CCO:</label>
      <input
        className="input-type"
        type="text"
        placeholder="Nome do plantonista"
        value={plantaoCco}
        onChange={(e) => setPlantaoCco(e.target.value)}
      />

      <label>Número do Carro:</label>
      <input
        className="input-type"
        type="number"
        placeholder="Número do Carro"
        value={numeroCarro}
        onChange={(e) => setNumeroCarro(e.target.value)}
      />

      <label>Horário do Carro:</label>
      <input
        className="input-type"
        type="time"
        placeholder="Informe o horário do carro"
        value={horarioCarro}
        onChange={(e) => setHorarioCarro(e.target.value)}
      />

      <label>Linha do Carro:</label>
      <input
        className="input-type"
        type="text"
        value={linhaCarro}
        onChange={(e) => setLinhaCarro(e.target.value)}
      />

      <label>Nº do carro Socorro:</label>
      <input
        className="input-type"
        type="number"
        value={numeroSocorro}
        onChange={(e) => setNumeroSocorro(e.target.value)}
      />

      <label>Horário do Chamado:</label>
      <input
        className="input-type"
        type="time"
        value={horarioChamado}
        onChange={(e) => setHorarioChamado(e.target.value)}
      />

      <label>Horário da Saída do Socorro:</label>
      <input
        className="input-type"
        type="time"
        value={horarioSaidaSocorro}
        onChange={(e) => setHorarioSaidaSocorro(e.target.value)}
      />

      <label>Chegado no Local:</label>
      <input
        className="input-type"
        type="time"
        value={chegadaLocal}
        onChange={(e) => setChegadaLocal(e.target.value)}
      />

      <label>Motivo do SOS:</label>
      <input
        className="input-type"
        type="text"
        value={motivoSOS}
        onChange={(e) => setMotivoSOS(e.target.value)}
      />

      <label>Local do Socorro:</label>
      <input
        className="input-type"
        type="text"
        value={localSOS}
        onChange={(e) => setLocalSOS(e.target.value)}
      />

      <label>Houve Troca do Carro?</label>
      <input
        className="input-type"
        type="text"
        value={houveTrocaCarro}
        onChange={(e) => setHouveTrocaCarro(e.target.value)}
      />

      <label>Horário de Retorno:</label>
      <input
        className="input-type"
        type="time"
        value={horarioRetorno}
        onChange={(e) => setHorarioRetorno(e.target.value)}
      />

      <label>Horário de Chegada em Iguatu:</label>
      <input
        className="input-type"
        type="time"
        value={horarioChegadaIguatu}
        onChange={(e) => setHorarioChegadaIguatu(e.target.value)}
      />

      <label>Data da Viagem:</label>
      <input
        className="input-type"
        type="date"
        value={dataViagem}
        onChange={(e) => setDataViagem(e.target.value)}
      />

      <label>Solução:</label>
      <textarea value={solucao} onChange={(e) => setSolucao(e.target.value)} />

      <button
        onClick={gerarTexto}
        className="uppercase bg-indigo-500 px-4 py-2 text-white font-medium rounded-lg hover:bg-indigo-700 duration-300 transition-colors shadow-md"
      >
        Gerar Texto
      </button>

      {mensagemErro && <p className="erro">{mensagemErro}</p>}

      {textoGerado && (
        <div className="bg-white shadow-lg rounded-lg px-4 py-2">
          <h3>Texto Gerado:</h3>
          <pre className="my-4 whitespace-pre-wrap text-left" ref={textRef}>
            {textoGerado}
          </pre>
          <button
            className="uppercase bg-rose-500 px-4 py-2 text-white font-medium rounded-lg hover:bg-rose-900 duration-300 transition-colors shadow-md w-full"
            onClick={handleCopyClick}
          >
            Copiar Texto
          </button>
        </div>
      )}
    </div>
  );
};

export default GeradorTexto;
