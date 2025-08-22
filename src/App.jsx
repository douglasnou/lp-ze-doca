import { Bairro } from "./components/bairro";
import { Banner } from "./components/banner";
import { Compre } from "./components/compre";
import { Infraestrutura } from "./components/infraestrutura";
import { Lancamento } from "./components/lancamento";
import { Vantagens } from "./components/vantagens";
import { Vendas } from "./components/vendas";
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
    </>
  )
}

export default App
