import "./App.css";

import UserForm from "./components/UserForm";
import Thanks from "./components/Thanks";
import ReviewForm from "./components/ReviewForm";

import { GrFormNext, GrFormPrevious } from "react-icons/gr";

function App() {
  return (
    <div className="App">
      <div className="header">
        <h2>Deixe sua avaliação</h2>
        <p>
          Ficamos felizes com a sua compra, utilize o formulário para avaliar o
          produto
        </p>
      </div>
      <div className="form-container">
        <p>passos</p>
        <form>
          <div className="inpust-container">
            <UserForm />
          </div>
          <div className="actions">
            <button>
              <GrFormPrevious />
              <span>Voltar</span>
            </button>

            <button>
              <span>Avançar</span>
              <GrFormNext />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
