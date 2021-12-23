import { GroupCardContainer } from "./style";
import { IoMdPaperPlane } from "react-icons/io";
import imgPerfil from "../../assets/img/amigo.png";

const GroupCard = () => {
  return (
    <GroupCardContainer>
      <div className="perfilGroup">
        <img src={imgPerfil} alt="imgPerfil" />
        <div className="infoGroup">
          <p>Nome do grupo</p>
          <p>Descrição do grupo</p>
        </div>
      </div>
      <button>
        <IoMdPaperPlane size={40} color={"var(--purple-50"} />
      </button>
    </GroupCardContainer>
  );
};

export default GroupCard;
