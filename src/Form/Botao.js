const Botao = ({ title, ...props }) => {
  return <button {...props}>{title}</button>;
};
export default Botao;
