import React, { useState } from "react";
import "./styles.css"; // Importar o arquivo CSS

const GeradorTexto = () => {
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

    const textoGerado = `Informo que o carro ${numeroCarro}, horário ${horarioCarro}, linha ${linhaCarro}, do dia ${dataViagem}, foi socorrido com o carro ${numeroSocorro}. Segue abaixo as informações.
- Horário do Chamado: ${horarioChamado}
- Horário da Saída do Socorro: ${horarioSaidaSocorro}
- Chegado no Local: ${chegadaLocal}
- Motivo do SOS: ${motivoSOS}
- Local: ${localSOS}
- Houve Troca do Carro? ${houveTrocaCarro}
- Horário de Retorno: ${horarioRetorno}
- Horário de Chegada em Iguatu: ${horarioChegadaIguatu}`;

    setMensagemErro("");
    setTextoGerado(textoGerado);
    limparInputs();
  };

  const limparInputs = () => {
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

  return (
    <div className="container">
      <label>Número do Carro:</label>
      <input
        type="text"
        value={numeroCarro}
        onChange={(e) => setNumeroCarro(e.target.value)}
      />

      <label>Horário do Carro:</label>
      <input
        type="text"
        value={horarioCarro}
        onChange={(e) => setHorarioCarro(e.target.value)}
      />

      <label>Linha do Carro:</label>
      <input
        type="text"
        value={linhaCarro}
        onChange={(e) => setLinhaCarro(e.target.value)}
      />

      <label>Número do Socorro:</label>
      <input
        type="text"
        value={numeroSocorro}
        onChange={(e) => setNumeroSocorro(e.target.value)}
      />

      <label>Horário do Chamado:</label>
      <input
        type="text"
        value={horarioChamado}
        onChange={(e) => setHorarioChamado(e.target.value)}
      />

      <label>Horário da Saída do Socorro:</label>
      <input
        type="text"
        value={horarioSaidaSocorro}
        onChange={(e) => setHorarioSaidaSocorro(e.target.value)}
      />

      <label>Chegado no Local:</label>
      <input
        type="text"
        value={chegadaLocal}
        onChange={(e) => setChegadaLocal(e.target.value)}
      />

      <label>Motivo do SOS:</label>
      <input
        type="text"
        value={motivoSOS}
        onChange={(e) => setMotivoSOS(e.target.value)}
      />

      <label>Local do Socorro:</label>
      <input
        type="text"
        value={localSOS}
        onChange={(e) => setLocalSOS(e.target.value)}
      />

      <label>Houve Troca do Carro?</label>
      <input
        type="text"
        value={houveTrocaCarro}
        onChange={(e) => setHouveTrocaCarro(e.target.value)}
      />

      <label>Horário de Retorno:</label>
      <input
        type="text"
        value={horarioRetorno}
        onChange={(e) => setHorarioRetorno(e.target.value)}
      />

      <label>Horário de Chegada em Iguatu:</label>
      <input
        type="text"
        value={horarioChegadaIguatu}
        onChange={(e) => setHorarioChegadaIguatu(e.target.value)}
      />

      <label>Data da Viagem:</label>
      <input
        type="text"
        value={dataViagem}
        onChange={(e) => setDataViagem(e.target.value)}
      />

      <button onClick={gerarTexto}>Gerar Texto</button>

      {mensagemErro && <p className="erro">{mensagemErro}</p>}

      {textoGerado && (
        <div className="texto-gerado-container">
          <h3>Texto Gerado:</h3>
          <pre className="texto-gerado">{textoGerado}</pre>
        </div>
      )}
    </div>
  );
};

export default GeradorTexto;
