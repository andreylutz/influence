/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/alt-text */
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import './userEdit.css'


function CompanyFormEdit() {
  const companyId = useSelector((state) => state.user.id)

  const initialCompAbout = {
    fCompanyAbout: {
      logo: 'https://a.d-cd.net/ZVV2mK-g-jqOy2UafMXFw53UYWU-1920.jpg',
      companyName: '???',
      location: '???',
    },
    fCompSkill: {
      name: '???',
    }
  }
  const [stateCompAb, setState] = useState(initialCompAbout)

  useEffect(() => {
    if (companyId) {
      async function getCompanyAbout() {
        const resp = await fetch(`http://localhost:4000/api/settings/companies/${companyId}`)
        const serResp = await resp.json()
        if (!serResp.errMessage) {
          setState(serResp)
        } else {
          const errCompAbout = {
            fCompanyAbout: {
              logo: 'https://a.d-cd.net/ZVV2mK-g-jqOy2UafMXFw53UYWU-1920.jpg',
              companyName: '???',
              location: '???',
            },
            fCompSkill: {
              name: '???',
            }
          }
          setState(errCompAbout)
        }

      }
      getCompanyAbout()
    }
    else { 'нет companyId' }

  }, [])

  let lSserResp;

  async function editCompanyForm(event) {
    event.preventDefault()
    const companyData = {
      logo: event.target.logo.value,
      companyName: event.target.companyName.value,
      location: event.target.location.value,
      skill: event.target.skill.value,
      company_id: companyId,
    }
    
    lSserResp = {
      fCompanyAbout: {
        logo: event.target.logo.value,
        companyName: event.target.companyName.value,
        location: event.target.location.value,
      },
      fCompSkill: {
        name: event.target.skill.value,
      }
    }

    localStorage.setItem("lSserResp", JSON.stringify(lSserResp))

    const body = JSON.stringify({ companyData });
    const toServer = await fetch('http://localhost:4000/api/settings/companies', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body,
    });

    const currentComp = await toServer.json();
    setState(currentComp)
  }

  lSserResp = JSON.parse(localStorage.getItem("lSserResp"))

  if (lSserResp === null) {
    if(stateCompAb === initialCompAbout) {
      lSserResp = {
        fCompanyAbout: {
          logo: '',
          companyName: '',
          location: '',
        },
        fCompSkill: {
          name: '',
        }
      }
    } else {
      lSserResp = {
        fCompanyAbout: {
          logo: stateCompAb.fCompanyAbout.logo,
          companyName: stateCompAb.fCompanyAbout.companyName,
          location: stateCompAb.fCompanyAbout.location,
        },
        fCompSkill: {
          name: stateCompAb.fCompSkill.name,
        }
      }
    }

  }

  const [logInpState, setLogChange] = useState(lSserResp.fCompanyAbout.logo)
  const [nameInpState, setNameChange] = useState(lSserResp.fCompanyAbout.companyName)
  const [locInpState, setLocChange] = useState(lSserResp.fCompanyAbout.location)
  const [skillInpState, setSkillChange] = useState(lSserResp.fCompSkill.name)

  function inpVal(event) {
    if (event.target.name === 'logo') {
      setLogChange(event.target.value)
    }
    if (event.target.name === 'companyName') {
      setNameChange(event.target.value)
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
        <h1 className="hOneTag">Данные компании:</h1><div className="twoColumns">
      <div className="firstCol">
        <form onSubmit={editCompanyForm}>
          <ul className="ulUserEdit">

            <li>
              <label> Логотип: <br />
                <input className="inp1" onChange={inpVal} value={logInpState} type="text" name="logo" required />
              </label>
            </li>

            <li>
              <label> Название: <br />
                <input  className="inp2" onChange={inpVal} value={nameInpState} type="text" name="companyName" required />
              </label>
            </li>

            <li>
              <label> Локация: <br />
                <input className="inp2" type="text" onChange={inpVal} value={locInpState} name="location" required />
              </label>
            </li>

            <li>
              <label> Интересы: <br />
                <input className="inp2" type="text" onChange={inpVal} value={skillInpState} name="skill" required />
              </label>
            </li>
          </ul>
          <button className="company-btn" type="submit">Отправить</button>

        </form>
      </div>
      <br />
      <div className="secondCol">
        <div className="oneUserBlock">
          <div className='userAvatarBlock'>

            <img className="userAvatar" src={`${stateCompAb.fCompanyAbout.logo}`} />
          </div>
          <ul className='ulOneUser'>
            <li className='liListOneUser'>Название компании: <span>{stateCompAb.fCompanyAbout.companyName}</span> </li>
            <li>Локация: <span>{stateCompAb.fCompanyAbout.location}</span> </li>
            <li>Интересы: <span>{stateCompAb.fCompSkill.name}</span> </li>
          </ul>
        </div>
      </div>
    </div></>
  )
}

export default CompanyFormEdit;
