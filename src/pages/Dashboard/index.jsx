import Header from "../../components/Header";
import Post from "../../components/Post";
import { MainContainer } from "./styles";
import { IoImageOutline } from "react-icons/io5";
import { BiWinkSmile } from "react-icons/bi";
import { MdAddBox } from "react-icons/md";

const Dashboard = () => {
  return (
    <>
      <Header />
      <MainContainer>
        <aside>
          <div className="userSettings">
            <img src="#" alt="imagem" />
            <p>Username</p>
          </div>
        </aside>
        <main>
          <div className="createPost">
            <div className="inputContainer">
              <input
                type="text"
                placeholder='"Em algum lugar, algo incrível está esperando para ser descoberto." Compartilhe!'
              />
              <div className="textOptions">
                <button>
                  <IoImageOutline size={30} color={"var(--purple-60)"} />
                </button>
                <button>
                  <BiWinkSmile size={30} color={"var(--purple-60)"} />
                </button>
              </div>
            </div>
            <button className="buttonAdd">
              <MdAddBox size={50} color={"var(--purple-60)"} />
            </button>
          </div>
          <div className="posts">
            <div>
              <Post />
              <Post />
            </div>
          </div>
        </main>
        <section>
          <div className="friendsBar">
            <div className="friendsCards">
              <img src="#" alt="amigo" />
              <p>amigo</p>
            </div>
          </div>
          <div className="groupsBar">
            <h3>Meus Grupos</h3>
          </div>
          <div className="groupsBar">
            <h3>Outros Grupos</h3>
          </div>
        </section>
      </MainContainer>
    </>
  );
};

export default Dashboard;
