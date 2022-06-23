import UserFormEdit from "./UserFormEdit";
import CompanyFormEdit from "./CompanyFormEdit";
import { useSelector } from "react-redux";
function UserEditPage() {
  const userRole = useSelector((state) => state.user.role)

  return (
    <div>
      {
        (userRole === 'user') ?
          <UserFormEdit />
          :
          <CompanyFormEdit />
      }
    </div>
  );
}

export default UserEditPage;
