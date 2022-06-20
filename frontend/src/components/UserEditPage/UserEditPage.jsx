import UserFormEdit from "./UserFormEdit";
import CompanyFormEdit from "./CompanyFormEdit";
function UserEditPage() {
  const roleUser = 'user';
  return (
    <div>
      <h1>Страница для внесения данных</h1>
      {
        (roleUser === 'user') ?
        <UserFormEdit/>
        :
        <CompanyFormEdit/>
      }
    </div>
  );
}

export default UserEditPage;
