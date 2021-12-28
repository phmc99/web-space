import Header from "../../components/Header";
import { ProfileContainer } from "./styles";

const UserProfile = () => {
  return (
    <>
      <Header />
      <ProfileContainer>
        <div className="profileCard">
          <div className="background">
            <img
              src="https://picsum.photos/seed/picsum/800/120"
              alt="imgBackground"
            />
            <div className="infoCard">
              <div className="profilePhoto">
                <h3>Username</h3>
                <figure>
                  <img
                    src="https://picsum.photos/id/237/200/300"
                    alt="imgProfile"
                  />
                </figure>
              </div>
              <div className="profileInfo">
                <div className="bio">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellat cumque eaque illo perspiciatis id consequatur
                  consequuntur veniam corporis unde reprehenderit? Repellendus
                  magni tenetur neque placeat iure officia temporibus dolores
                  libero?
                </div>
                <div className="follows">
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </ProfileContainer>
    </>
  );
};

export default UserProfile;
