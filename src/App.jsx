import { Bairro } from "./components/bairro";
import { Banner } from "./components/banner";
import { Compre } from "./components/compre";
import { Endereco } from "./components/endereco";
import { Infraestrutura } from "./components/infraestrutura";
import { Lancamento } from "./components/lancamento";
import { Oportunidade } from "./components/oportunidade";
import { Seguranca } from "./components/seguranca";
import { Vantagens } from "./components/vantagens";
import { Vendas } from "./components/vendas";
import { Whatsapp } from "./components/whatsapp";
import "./style/index.scss";
function App() {

  return (
    <>
      <Banner />
      <Vendas />
      <Lancamento />
      <Bairro />
      <Vantagens />
      <Compre />
      <Infraestrutura />
      <Seguranca />
      <Endereco />
      <Oportunidade />
      <Whatsapp />
    </>
  )
}

export default App
