import {
  PostReadBackground,
  PostReadContent,
  PostReadContainer,
  UserDetails,
} from "./style";
import { HiArrowSmUp, HiArrowSmDown } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

const PostRead = ({ setOpenPost }) => {
  return (
    <PostReadBackground>
      <PostReadContainer>
        <PostReadContent photoUrl={"https://picsum.photos/600/300?grayscale"}>
          <div className="close-button" onClick={() => setOpenPost(false)}>
            <AiOutlineClose />
          </div>
          <div className="image">
            <div className="image-blackout"></div>
          </div>
          <div className="read">
            <UserDetails>
              <img src="https://github.com/phmc99.png" alt="userphoto" />
              <span>
                Pedro Costa <span>(phz)</span>
              </span>
            </UserDetails>
            <h1>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. asdasda
            </h1>
            <div className="text-limit">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Veritatis sed rem beatae! Illum eos molestiae porro tempora?
                Accusantium animi odit dignissimos dolore, vel neque expedita,
                veritatis ad dicta placeat sint? Placeat aliquam non dolor,
                culpa dolore, fugiat atque voluptatum, eveniet facilis iure
                nobis. Nulla aperiam corrupti suscipit consectetur expedita
                excepturi asperiores cum. Neque itaque repudiandae, et
                dignissimos maxime veritatis rem? Natus veritatis libero
                quibusdam soluta dolore cumque aliquid tempora vel
                necessitatibus non, dolorum temporibus deserunt praesentium
                laborum adipisci? Fugit ipsum velit libero qui soluta vero in
                enim itaque mollitia natus. Ratione consectetur odit illo
                asperiores modi hic, eum harum fuga assumenda recusandae dicta
                corporis reprehenderit odio incidunt at iure architecto rerum
                praesentium suscipit. Molestias est cupiditate amet iure rem
                sequi! Maxime perferendis quo saepe, recusandae nesciunt id
                facere eum consequatur eaque eveniet voluptatem tempore
                reiciendis repudiandae at fuga error ut? Exercitationem deserunt
                numquam nemo excepturi fugit fuga similique tenetur animi! Lorem
                ipsum dolor sit amet consectetur, adipisicing elit. Eaque nulla
                obcaecati earum quibusdam sed. Molestias similique sapiente
                molestiae id dignissimos libero aliquam accusantium, magni nihil
                non officiis? Doloremque, quibusdam eos? Lorem ipsum, dolor sit
                amet consectetur adipisicing elit. Veritatis sed rem beatae!
                Illum eos molestiae porro tempora? Accusantium animi odit
                dignissimos dolore, vel neque expedita, veritatis ad dicta
                placeat sint? Placeat aliquam non dolor, culpa dolore, fugiat
                atque voluptatum, eveniet facilis iure nobis. Nulla aperiam
                corrupti suscipit consectetur expedita excepturi asperiores cum.
                Neque itaque repudiandae, et dignissimos maxime veritatis rem?
                Natus veritatis libero quibusdam soluta dolore cumque aliquid
                tempora vel necessitatibus non, dolorum temporibus deserunt
                praesentium laborum adipisci? Fugit ipsum velit libero qui
                soluta vero in enim itaque mollitia natus. Ratione consectetur
                odit illo asperiores modi hic, eum harum fuga assumenda
                recusandae dicta corporis reprehenderit odio incidunt at iure
                architecto rerum praesentium suscipit. Molestias est cupiditate
                amet iure rem sequi! Maxime perferendis quo saepe, recusandae
                nesciunt id facere eum consequatur eaque eveniet voluptatem
                tempore reiciendis repudiandae at fuga error ut? Exercitationem
                deserunt numquam nemo excepturi fugit fuga similique tenetur
                animi! Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Eaque nulla obcaecati earum quibusdam sed. Molestias similique
                sapiente molestiae id dignissimos libero aliquam accusantium,
                magni nihil non officiis? Doloremque, quibusdam eos?
              </p>
              <div className="post-date">
                <span>Data: 17/11/1999</span>
              </div>
              <hr />
              <div className="buttons">
                <div className="icons">
                  <HiArrowSmUp size={30} />
                  <span>
                    Upvote <span className="count">(10)</span>
                  </span>
                </div>
                <div className="icons">
                  <HiArrowSmDown size={30} />
                  <span>
                    Downvote <span className="count">(10)</span>
                  </span>
                </div>
              </div>
              <div className="comments-title">
                <h2>Comentários:</h2> <span>(64)</span>
              </div>
              <form action="">
                <textarea
                  placeholder="Comente aqui..."
                  maxLength={"140"}
                  cols="30"
                  rows="10"
                />
                <button>Comentar</button>
              </form>
              <hr />
            </div>
          </div>
        </PostReadContent>
      </PostReadContainer>
    </PostReadBackground>
  );
};

export default PostRead;
