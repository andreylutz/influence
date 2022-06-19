// import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'

function CompanyFormEdit () {
  const dispatch = useDispatch()
  // const userEdit = useSelector((state) => state.settings.list)
  
  // id нужно брать из сессии
  const userId = 1;

  async function editUserForm (event) {
    event.preventDefault()
    const userData = {
      avatar: event.target.avatar.value,
      userName: event.target.userName.value,
      surname: event.target.surname.value,
      age: event.target.age.value,
      location: event.target.location.value,
      skill: event.target.skill.value,
      userId,
    }

    const body = JSON.stringify({ userData });

    const toServer = await fetch('http://localhost:4000/api/settings/users', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body,
    });

    const allUsersArr = await toServer.json();

    // const action = {
    //   type: 'INIT_USER_SETTINGS',
    //   payload: allUsersArr,
    // };
    // dispatch(action);


    // const action = {
    //   type: 'EDIT_USER_SETTINGS',
    //   payload: userData,
    // }
    // dispatch(action)

  }
  // useEffect(() => {
  //   fetch('')
  // }, [dispatch])

  return(
    <div>
        <form onSubmit={editUserForm}>
          <ul className="ulUserEdit">

            <li>
              <label>
                <input type="text" name="avatar" placeholder="Ваш аватар..." />
              </label>
            </li>

            <li>
              <label>
                <input type="text" name="userName" placeholder="Ваше имя..." />
              </label>
            </li>

            <li>
              <label>
                <input type="text" name="surname" placeholder="Ваша фамилия..." />
              </label>
            </li>

            <li>
              <label>
                <input type="text" name="age" placeholder="Ваш возраст..." />
              </label>
            </li>

            <li>
              <label>
                <input type="text" name="location" placeholder="Ваша локация..." />
              </label>
            </li>

            <li>
              <label>
                <input type="text" name="skill" placeholder="Ваши интересы..." />
              </label>
            </li>
          </ul>
          <button type="submit">Отправить</button>

        </form>
      </div>
  )
}

export default CompanyFormEdit
