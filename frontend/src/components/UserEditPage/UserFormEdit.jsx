/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/alt-text */
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import './userEdit.css'


function UserFormEdit() {
  const userId = useSelector((state) => state.user.id)

  const initialUserAbout = {
    fUserAbout: {
      avatar: 'https://a.d-cd.net/ZVV2mK-g-jqOy2UafMXFw53UYWU-1920.jpg',
      name: '???',
      surname: '???',
      age: '???',
      location: '???',
    },
    fUserSkill: {
      name: '???',
    }
  }
  const [stateUserAb, setState] = useState(initialUserAbout)

  useEffect(() => {
    if (userId) {
      async function getUserAbout() {
        const resp = await fetch(`http://localhost:4000/api/settings/users/${userId}`)
        const serResp = await resp.json()
        if (!serResp.errMessage) {
          setState(serResp)
        } else {
          const errUserAbout = {
            fUserAbout: {
              avatar: 'https://a.d-cd.net/ZVV2mK-g-jqOy2UafMXFw53UYWU-1920.jpg',
              name: '???',
              surname: '???',
              age: '???',
              location: '???',
            },
            fUserSkill: {
              name: '???',
            }
          }
          setState(errUserAbout)
        }

      }
      getUserAbout()
    }
    else { 'нет companyId' }

  }, [])

  let lSserResp;

  async function editUserForm(event) {
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
    
    lSserResp = {
      fUserAbout: {
        avatar: event.target.avatar.value,
        name: event.target.userName.value,
        surname: event.target.surname.value,
        age: event.target.age.value,
        location: event.target.location.value,
      },
      fUserSkill: {
        name: event.target.skill.value,
      }
    }

    localStorage.setItem("lSserResp", JSON.stringify(lSserResp))

    const body = JSON.stringify({ userData });
    const toServer = await fetch('http://localhost:4000/api/settings/users', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body,
    });

    const currentUser = await toServer.json();
    setState(currentUser)
  }

  lSserResp = JSON.parse(localStorage.getItem("lSserResp"))

  if (lSserResp === null) {
    if(stateUserAb === initialUserAbout) {
      lSserResp = {
        fUserAbout: {
          avatar: '',
          name: '',
          surname: '',
          age: '',
          location: '',
        },
        fUserSkill: {
          name: '',
        }
      }
    } else {
      lSserResp = {
        fUserAbout: {
          avatar: stateUserAb.fUserAbout.avatar,
          name: stateUserAb.fUserAbout.name,
          surname: stateUserAb.fUserAbout.surname,
          age: stateUserAb.fUserAbout.age,
          location: stateUserAb.fUserAbout.location,
        },
        fUserSkill: {
          name: stateUserAb.fUserSkill.name,
        }
      }
    }

  }
  console.log(lSserResp);
  console.log(lSserResp.fUserAbout.avatar);

  const [avaInpState, setLogChange] = useState(lSserResp.fUserAbout.avatar)
  const [nameInpState, setNameChange] = useState(lSserResp.fUserAbout.name)
  const [surnameInpState, setSurnChange] = useState(lSserResp.fUserAbout.surname)
  const [ageInpState, setAgeChange] = useState(lSserResp.fUserAbout.age)
  const [locInpState, setLocChange] = useState(lSserResp.fUserAbout.location)
  const [skillInpState, setSkillChange] = useState(lSserResp.fUserSkill.name)

  function inpVal(event) {
    if (event.target.name === 'avatar') {
      setLogChange(event.target.value)
    }
    if (event.target.name === 'userName') {
      setNameChange(event.target.value)
    }
    if (event.target.name === 'surname') {
      setSurnChange(event.target.value)
    }
    if (event.target.name === 'age') {
      setAgeChange(event.target.value)
    }
    if (event.target.name === 'location') {
      setLocChange(event.target.value)
    }
    if (event.target.name === 'skill') {
      setSkillChange(event.target.value)
    }
  }

  return (
    <>
        <h1 className="hOneTag">Страница профиля пользователя</h1><div className="twoColumns">
      <div className="firstCol">
        <form onSubmit={editUserForm}>
          <ul className="ulUserEdit">

            <li>
              <label> Аватар: <br />
                <input onChange={inpVal} value={avaInpState} type="text" name="avatar" required />
              </label>
            </li>

            <li>
              <label> Имя: <br />
                <input onChange={inpVal} value={nameInpState} type="text" name="userName" required />
              </label>
            </li>

            <li>
              <label> Фамилия: <br />
                <input type="text" onChange={inpVal} value={surnameInpState} name="surname" required />
              </label>
            </li>

            <li>
              <label> Возраст: <br />
                <input type="text" onChange={inpVal} value={ageInpState} name="age" required />
              </label>
            </li>

            <li>
              <label> Локация: <br />
                <input type="text" onChange={inpVal} value={locInpState} name="location" required />
              </label>
            </li>

            <li>
              <label> Интересы: <br />
                <input type="text" onChange={inpVal} value={skillInpState} name="skill" required />
              </label>
            </li>
          </ul>
          <button type="submit">Отправить</button>

        </form>
      </div>
      <br />
      <div className="secondCol">
        <div className="oneUserBlock">
          <div className='userAvatarBlock'>

            <img className="userAvatar" src={`${stateUserAb.fUserAbout.avatar}`} />
          </div>
          <ul className='ulOneUser'>
            <li className='liListOneUser'>Имя: <span>{stateUserAb.fUserAbout.name}</span> </li>
            <li>Фамилия: <span>{stateUserAb.fUserAbout.surname}</span> </li>
            <li>Возраст: <span>{stateUserAb.fUserAbout.age}</span> </li>
            <li>Локация: <span>{stateUserAb.fUserAbout.location}</span> </li>
            <li>Интересы: <span>{stateUserAb.fUserSkill.name}</span> </li>
          </ul>
        </div>
      </div>
    </div></>
  )
}

export default UserFormEdit;
