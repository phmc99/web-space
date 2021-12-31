import { PostModalContainer, PostContainer } from "./style";
import { HiX } from "react-icons/hi";
import { useState } from "react";
import { useUser } from "../../providers/User";

import Button from "../Button";
import api from "../../services";

const PostModal = ({ setToggle }) => {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState("");

  const handleFile = (evt) => {
    setFile(evt.target.files[0])
  }

  const { userInfo } = useUser();

  const initialFormData = {
    title: title,
    description: description,
    file: file,
    user: userInfo._id,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData();
    
    for (let key in initialFormData) {
      form.append(key, initialFormData[key]);
    }

    const token = JSON.parse(localStorage.getItem("@webspace:token") || "null");

    await api.post("/post/", form, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    }).then(
      res => console.log(res)
      );
      setToggle(false);
  };

  return (
    <PostModalContainer>
      <PostContainer>
        <div className="headerPostModal">
          <h1>Nova Publicação</h1>
          <div className="closeButton" onClick={() => setToggle(false)}>
            <HiX size={30} color={"var(--purple-50)"} />
          </div>
        </div>
        <form className="inputContainer" onSubmit={handleSubmit}>
          <input
            required
            type="text"
            placeholder="Digite o título da sua publicação"
            value={title}
            onChange={(evt) => setTitle(evt.target.value)}
            name={"title"}
            maxLength={80}
          />
          <textarea
            placeholder="Escreva aqui..."
            rows={"12"}
            required
            minLength={"75"}
            value={description}
            onChange={(evt) => setDescription(evt.target.value)}
            name={"description"}
          />
          <div className="postFooter">
            <label for="selectFile">Escolher uma capa</label>
            <input
              id="selectFile"
              type="file"
              accept="image/png, image/jpeg"
              onChange={handleFile}
              name="file"
            />
            <Button type={"action"}>Postar</Button>
          </div>
        </form>
      </PostContainer>
    </PostModalContainer>
  );
};

export default PostModal;
