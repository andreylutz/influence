import UserFormEdit from "./UserFormEdit";
import CompanyFormEdit from "./CompanyFormEdit";
import { useSelector } from "react-redux";
function UserEditPage() {
  const role = useSelector(state => state.user.role)
  return (
    <div>
      <h1>Страница для внесения данных</h1>
      {
        (role === 'user') ?
          <UserFormEdit />
          :
          <CompanyFormEdit />
      }
    </div>
  );
}

export default UserEditPage;
