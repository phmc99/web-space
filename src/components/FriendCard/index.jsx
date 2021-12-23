import { FriendCardContainer } from "./style";
import imgFriend from "../../assets/img/amigo.png"

const FriendCard = () => {
  return (
    <FriendCardContainer>
      <img src={imgFriend} alt="amigo" />
      <p>Amigo</p>
    </FriendCardContainer>
  );
};

export default FriendCard;
