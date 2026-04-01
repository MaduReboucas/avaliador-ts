import "./App.css";

import UserForm from "./components/UserForm";
import Thanks from "./components/Thanks";
import ReviewForm from "./components/ReviewForm";

import Steps from "./components/Steps";

import { useState } from "react";
import { useForm } from "./hooks/useForm";

import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { FiSend } from "react-icons/fi";

type FormFields = {
  name: string;
  email: string;
  review: string;
  comment: string;
};

const formTemplate: FormFields = {
  name: "",
  email: "",
  review: "",
  comment: "",
};

function App() {
  const [data, setData] = useState(formTemplate);

  const updateFieldHandler = (key: string, value: string) => {
    setData((prev) => {
      return { ...prev, [key]: value };
    });
  };

  const formComponents = [
    <UserForm data={data} updateFieldHandler={updateFieldHandler} />,
    <ReviewForm data={data} updateFieldHandler={updateFieldHandler} />,
    <Thanks />,
  ];

  const { currentStep, currentComponent, changeStep, isFirstStep, isLastStep } =
    useForm(formComponents);

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
        <Steps currentStep={currentStep} />
        <form onSubmit={(event) => changeStep(currentStep + 1, event)}>
          <div className="inpust-container">{currentComponent}</div>
          <div className="actions">
            <button
              type="button"
              onClick={() => changeStep(currentStep - 1)}
              disabled={isFirstStep}
            >
              <GrFormPrevious />
              <span>Voltar</span>
            </button>

            {!isLastStep ? (
              <button type="submit">
                <span>Avançar</span>
                <GrFormNext />
              </button>
            ) : (
              <button type="submit">
                <span>Enviar</span>
                <FiSend />
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
