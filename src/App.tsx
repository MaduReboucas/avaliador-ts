import "./App.css";

import UserForm from "./components/UserForm";
import Thanks from "./components/Thanks";
import ReviewForm from "./components/ReviewForm";

import { useForm } from "./hooks/useForm";

import { GrFormNext, GrFormPrevious } from "react-icons/gr";

function App() {
  const formComponents = [<UserForm />, <ReviewForm />, <Thanks />];

  const {
    currentStep,
    currentComponent,
    changeStep,
    isFirstStep,
    isLastStep,
  } = useForm(formComponents);

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
        <form onSubmit={(event) => changeStep(currentStep + 1, event)}>
          <div className="inpust-container">
            {currentComponent}
          </div>
          <div className="actions">
            <button
              type="button"
              onClick={() => changeStep(currentStep - 1)}
              disabled={isFirstStep}
            >
              <GrFormPrevious />
              <span>Voltar</span>
            </button>

            {!isLastStep && (
              <button type="submit">
                <span>Avançar</span>
                <GrFormNext />
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
