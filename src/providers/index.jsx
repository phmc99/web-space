import { UserProvider } from "./User/";
import { PostProvider } from "./Post/";

const Providers = ({ children }) => {
  return (
    <UserProvider>
      <PostProvider>{children}</PostProvider>
    </UserProvider>
  );
};

export default Providers;
