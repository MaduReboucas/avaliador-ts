import "./Steps.css";

import { AiOutlineUser, AiOutlineStar } from "react-icons/ai";
import { FiSend } from "react-icons/fi";

const Steps = () => {
  return (
    <div className="steps">
      <div className="step active">
        <AiOutlineUser />
        <p>Indentificação</p>
      </div>
      <div className="step ">
        <AiOutlineStar />
        <p>Avaliação</p>
      </div>
      <div className="step ">
        <FiSend />
        <p>Envio</p>
      </div>
    </div>
  );
};

export default Steps;
