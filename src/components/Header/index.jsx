import logo from "../../assets/img/webSpace-logo.png";

import { IoNotificationsOutline } from "react-icons/io5";
import { AiOutlineSearch } from "react-icons/ai";
import { HeaderContainer } from "./styles";
import { IoMdPaperPlane } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";

const Header = () => {
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <div className="logoContainer" onClick={() => navigate("/dashboard")}>
        <h1>WebSpace</h1>
        <img src={logo} alt="logo" />
      </div>
      <div className="mainContainer">
        <div className="inputContainer">
          <div className="iconSearch">
            <AiOutlineSearch size={40} color={"var(--purple-0)"} />
          </div>
          <input type="text" />
        </div>

        <button>
          <IoNotificationsOutline size={40} color={"var(--purple-50)"} />
        </button>
        <button>
          <IoMdPaperPlane size={43} color={"var(--purple-50)"} />
        </button>
        <button>
          <FiLogOut size={35} color={"var(--purple-50)"} />
        </button>
      </div>
    </HeaderContainer>
  );
};

export default Header;
