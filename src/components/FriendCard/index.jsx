import { FriendCardContainer } from "./style";
import imgFriend from "../../assets/img/amigo.png"

const FriendCard = ({user, ...rest}) => {
  return (
    <FriendCardContainer {...rest}>
      <img src={user.photo ? user.photo.url : imgFriend} alt="amigo" />
      <p>{user.username}</p>
    </FriendCardContainer>
  );
};

export default FriendCard;
