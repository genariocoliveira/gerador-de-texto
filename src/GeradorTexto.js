import "./globals.css";
import React, { useState, useRef } from "react";

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
      !nomeMotorista ||
      !numeroCarro ||
      !horarioCarro ||
      !linhaCarro ||
      !dataViagem
    ) {
      setMensagemErro("Campo obrigatório!");
      setTextoGerado("");
      return;
    }
    if (!numeroSocorro) {
      setNumeroSocorro("###");
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
      setSolucao("");
    };
    const textoGerado = `Informo que o carro *${numeroCarro}*, horário *${horarioCarro}*, linha *${linhaCarro.toUpperCase()}*, do dia *${dataViagem}*, foi socorrido com o carro *${numeroSocorro}*. Segue abaixo as informações.
    - Motorista: *${nomeMotorista.toUpperCase()}*
    - Plantão CCO: *${plantaoCco.toUpperCase()}*
    - Horário do Chamado: *${horarioChamado}*
    - Horário da Saída do Socorro: *${horarioSaidaSocorro}*
    - Chegado no Local: *${chegadaLocal.toUpperCase()}*
    - Motivo do SOS: *${motivoSOS.toUpperCase()}*
    - Local: *${localSOS.toUpperCase()}*
    - Houve Troca do Carro? *${houveTrocaCarro.toUpperCase()}*
    - Horário de Retorno: *${horarioRetorno}*
    - Horário de Chegada em Iguatu: *${horarioChegadaIguatu}*
    - Solução: *${solucao}*`;

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

  function formatarHorarioCarro() {
    let horarioCar = document.querySelector("#horarioCarr");
    let hCar = horarioCar.value;
    if (hCar.length === 2) {
      hCar = hCar + ":";
      horarioCar.value = hCar; // Correção aqui
    }
  }
  function formatarHorarioChamado() {
    let horarioChamado = document.querySelector("#horarioChamado");
    let chamado = horarioChamado.value;
    if (chamado.length === 2) {
      chamado = chamado + ":";
      horarioChamado.value = chamado;
    }
  }
  function formatarHorarioSaida() {
    let saida = document.querySelector("#horaSaida");
    let saidaH = saida.value;
    if (saidaH.length === 2) {
      saidaH = saidaH + ":";
      saida.value = saidaH;
    }
  }
  function formatarChegadaLocal() {
    let chegadaLocal = document.querySelector("#chegadaLocal");
    let local = chegadaLocal.value;
    if (local.length === 2) {
      local = local + ":";
      chegadaLocal.value = local;
    }
  }
  function formatarHorarioRetorno() {
    let horarioRetorno = document.querySelector("#horarioRetorno");
    let retorno = horarioRetorno.value;
    if (retorno.length === 2) {
      retorno = retorno + ":";
      horarioRetorno.value = retorno;
    }
  }
  function horarioChegadaIgu() {
    let horaChegadaIAU = document.querySelector("#horaChegadaIgu"); // Adicione # antes de "horaChegadaIAU"
    let HChegada = horaChegadaIAU.value;
    if (HChegada.length === 2) {
      HChegada = HChegada + ":";
      horaChegadaIAU.value = HChegada;
    }
  }
  function formatarDataViagem() {
    let viagem = document.querySelector("#dataViagem");
    let data = viagem.value;
    if (data.length === 2) {
      data = data + "/";
      viagem.value = data;
    }
    if (data.length === 5) {
      data = data + "/";
      viagem.value = data;
    }
  }

  return (
    <div className="form break-words">
      <label>
        Motorista:<spam className="text-red-500">*</spam>
        {mensagemErro && (
          <p className="text-red-500 text-[.8rem]">{mensagemErro}</p>
        )}
      </label>
      <input
        className="input-type"
        type="text"
        placeholder="Nome do motorista"
        value={nomeMotorista}
        onChange={(e) => setNomeMotorista(e.target.value)}
      />

      <label>
        Número do Carro:<spam className="text-red-500">*</spam>
        {mensagemErro && (
          <p className="text-red-500 text-[.8rem]">{mensagemErro}</p>
        )}
      </label>
      <input
        className="input-type"
        type="text"
        placeholder="Número do Carro"
        value={numeroCarro}
        onChange={(e) => setNumeroCarro(e.target.value)}
        maxLength={5}
      />

      <label>
        Horário do Carro:<spam className="text-red-500">*</spam>
        {mensagemErro && (
          <p className="text-red-500 text-[.8rem]">{mensagemErro}</p>
        )}
      </label>
      <input
        id="horarioCarr"
        className="input-type"
        type="text"
        placeholder="Informe o horário do carro"
        value={horarioCarro}
        onKeyPress={formatarHorarioCarro} // Correção aqui
        onChange={(e) => setHorarioCarro(e.target.value)}
        maxLength={5}
      />

      <label>
        Linha do Carro:<spam className="text-red-500">*</spam>
        {mensagemErro && (
          <p className="text-red-500 text-[.8rem]">{mensagemErro}</p>
        )}
      </label>
      <input
        className="input-type"
        type="text"
        placeholder="Percurso do carro"
        value={linhaCarro}
        onChange={(e) => setLinhaCarro(e.target.value)}
      />

      <label>
        Data da Viagem:<spam className="text-red-500">*</spam>
        {mensagemErro && (
          <p className="text-red-500 text-[.8rem]">{mensagemErro}</p>
        )}
      </label>
      <input
        id="dataViagem"
        className="input-type"
        type="text"
        placeholder="Informe a data da viagem"
        value={dataViagem}
        onKeyPress={formatarDataViagem}
        onChange={(e) => setDataViagem(e.target.value)}
        maxLength={10}
      />

      <label>
        Nº do carro Socorro:<spam className="text-red-500">*</spam>
      </label>
      <input
        className="input-type"
        type="text"
        placeholder="Nº do carro Socorro"
        value={numeroSocorro}
        onChange={(e) => setNumeroSocorro(e.target.value)}
        maxLength={5}
      />

      <label>
        Horário do Chamado:<spam className="text-red-500">*</spam>
      </label>
      <input
        id="horarioChamado"
        className="input-type"
        type="text"
        value={horarioChamado}
        placeholder="Horário do chamado"
        onKeyPress={formatarHorarioChamado}
        onChange={(e) => setHorarioChamado(e.target.value)}
        maxLength={5}
      />

      <label>
        Horário da Saída do Socorro:<spam className="text-red-500">*</spam>
      </label>
      <input
        id="horaSaida"
        className="input-type"
        type="text"
        placeholder="Horário de Saída"
        value={horarioSaidaSocorro}
        onKeyPress={formatarHorarioSaida}
        onChange={(e) => setHorarioSaidaSocorro(e.target.value)}
        maxLength={5}
      />

      <label>
        Chegado no Local:<spam className="text-red-500">*</spam>
      </label>
      <input
        id="chegadaLocal"
        className="input-type"
        type="text"
        placeholder="Horário de chegada no local do SOS"
        value={chegadaLocal}
        onChange={(e) => setChegadaLocal(e.target.value)}
        onKeyPress={formatarChegadaLocal}
      />

      <label>
        Motivo do SOS:<spam className="text-red-500">*</spam>
      </label>
      <input
        className="input-type"
        type="text"
        placeholder="Ex. Pneu furado"
        value={motivoSOS}
        onChange={(e) => setMotivoSOS(e.target.value)}
      />

      <label>
        Local do Socorro:<spam className="text-red-500">*</spam>
      </label>
      <input
        className="input-type"
        type="text"
        placeholder="Onde foi o socorro?"
        value={localSOS}
        onChange={(e) => setLocalSOS(e.target.value)}
      />

      <label>
        Houve Troca do Carro?<spam className="text-red-500">*</spam>
      </label>
      <input
        className="input-type"
        type="text"
        placeholder="Sim / Não"
        value={houveTrocaCarro}
        onChange={(e) => setHouveTrocaCarro(e.target.value)}
      />

      <label>
        Horário de Retorno:<spam className="text-red-500">*</spam>
      </label>
      <input
        id="horarioRetorno"
        className="input-type"
        type="text"
        placeholder="Digite o horário de retorno"
        value={horarioRetorno}
        onChange={(e) => setHorarioRetorno(e.target.value)}
        onKeyPress={formatarHorarioRetorno}
      />

      <label>
        Horário de Chegada em Iguatu:<spam className="text-red-500">*</spam>
      </label>
      <input
        id="horaChegadaIgu" // Adicione o ID aqui
        className="input-type"
        type="text"
        placeholder="Informe o horário de chegada em Iguatu"
        value={horarioChegadaIguatu}
        onKeyPress={horarioChegadaIgu} // Chame a função correta
        onChange={(e) => setHorarioChegadaIguatu(e.target.value)}
        maxLength={5}
      />

      <label>
        Plantão CCO:<spam className="text-red-500">*</spam>
      </label>
      <input
        className="input-type"
        type="text"
        placeholder="Nome do plantonista"
        value={plantaoCco}
        onChange={(e) => setPlantaoCco(e.target.value)}
      />

      <label>
        Solução: <spam className="text-red-500">*</spam>
      </label>
      <textarea
        value={solucao}
        placeholder="Preencha a Solução do problema."
        onChange={(e) => setSolucao(e.target.value)}
      />

      <button
        onClick={gerarTexto}
        className="uppercase bg-indigo-500 px-4 py-2 text-white font-medium rounded-lg hover:bg-indigo-700 duration-300 transition-colors shadow-md"
      >
        Gerar Texto
      </button>

      {mensagemErro && <p className="text-red-500">{mensagemErro}</p>}

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
