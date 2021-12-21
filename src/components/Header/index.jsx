import { HeaderContainer } from "./styles";
import logo from "../../assets/img/webSpace-logo.png";

import { FiLogOut } from "react-icons/fi";
import { VscDiffAdded } from "react-icons/vsc";
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdNotificationsOutline, IoMdPaperPlane } from "react-icons/io";

const Header = () => {
  return (
    <HeaderContainer>
      <div className="logoContainer">
        <h1>Web Space</h1>
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
          <VscDiffAdded size={50} color={"var(--purple-50)"} />
        </button>
        <button>
          <IoMdNotificationsOutline size={50} color={"var(--purple-50)"} />
        </button>
        <button>
          <IoMdPaperPlane size={50} color={"var(--purple-50)"} />
        </button>
        <button>
          <FiLogOut size={45} color={"var(--purple-50)"} />
        </button>
      </div>
    </HeaderContainer>
  );
};

export default Header;
