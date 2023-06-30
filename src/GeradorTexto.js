import React, { useState } from "react";
import "./styles.css"; // Importar o arquivo CSS

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
      !dataViagem ||
      !solucao
    ) {
      setMensagemErro("Preencha todos os campos!");
      setTextoGerado("");
      return;
    }

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
- Solução: ${solucao.toUpperCase()}`;
    setMensagemErro("");
    setTextoGerado(textoGerado);
    limparInputs();
  };

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
  const handleCopyClick = () => {
    const textToCopy = textRef.current.textContent;
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        alert("Texto copiado com sucesso!");
      })
      .catch((error) => {
        console.error("Erro ao copiar o texto:", error);
      });
  };
  return (
    <div className="container">
      <label>Motorista:</label>
      <input
        type="text"
        placehokder="Nome do motorista"
        value={nomeMotorista}
        onChange={(e) => setNomeMotorista(e.target.value)}
      />

      <label>Plantão CCO:</label>
      <input
        type="text"
        value={plantaoCco}
        onChange={(e) => setPlantaoCco(e.target.value)}
      />

      <label>Número do Carro:</label>
      <input
        type="text"
        value={numeroCarro}
        onChange={(e) => setNumeroCarro(e.target.value)}
      />

      <label>Horário do Carro:</label>
      <input
        type="time"
        value={horarioCarro}
        onChange={(e) => setHorarioCarro(e.target.value)}
      />

      <label>Linha do Carro:</label>
      <input
        type="text"
        value={linhaCarro}
        onChange={(e) => setLinhaCarro(e.target.value)}
      />

      <label>Nº do carro Socorro:</label>
      <input
        type="text"
        value={numeroSocorro}
        onChange={(e) => setNumeroSocorro(e.target.value)}
      />

      <label>Horário do Chamado:</label>
      <input
        type="time"
        value={horarioChamado}
        onChange={(e) => setHorarioChamado(e.target.value)}
      />

      <label>Horário da Saída do Socorro:</label>
      <input
        type="time"
        value={horarioSaidaSocorro}
        onChange={(e) => setHorarioSaidaSocorro(e.target.value)}
      />

      <label>Chegado no Local:</label>
      <input
        type="time"
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
        type="time"
        value={horarioRetorno}
        onChange={(e) => setHorarioRetorno(e.target.value)}
      />

      <label>Horário de Chegada em Iguatu:</label>
      <input
        type="time"
        value={horarioChegadaIguatu}
        onChange={(e) => setHorarioChegadaIguatu(e.target.value)}
      />

      <label>Data da Viagem:</label>
      <input
        type="date"
        value={dataViagem}
        onChange={(e) => setDataViagem(e.target.value)}
      />

      <label>Solução:</label>
      <textarea value={solucao} onChange={(e) => setSolucao(e.target.value)} />

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
