import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import './userEdit.css'

function CompanyFormEdit() {

  const companyId = useSelector((state) => state.user.id)
  console.log(companyId);

  const initialCompAbout = {
    fCompanyAbout: {
      logo: '',
      companyName: '',
      location: '',
    },
    fCompSkill: {
      name: '',
    }
  }
  const [stateCompAb, setState] = useState(initialCompAbout)



  useEffect(() => {
    async function getCompanyAbout() {
      const resp = await fetch(`http://localhost:4000/api/settings/companies/${companyId}`)
      const serResp = await resp.json()
      console.log('fetchuuuuuuse', serResp);
      setState(serResp)
    }
    getCompanyAbout()
  }, [])


  async function editCompanyForm(event) {
    event.preventDefault()
    const companyData = {
      logo: event.target.logo.value,
      companyName: event.target.companyName.value,
      location: event.target.location.value,
      skill: event.target.skill.value,
      company_id: companyId,
    }

    const body = JSON.stringify({ companyData });

    const toServer = await fetch('http://localhost:4000/api/settings/companies', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body,
    });

    const currentComp = await toServer.json();
    console.log('!!!!!!!!!!!!!!!!!!!!!', currentComp);
    setState(currentComp)
  }

  let {logo} = {...stateCompAb.fCompanyAbout.logo}

  const initial = {...stateCompAb,
    fCompanyAbout: logo
  }
 
  const [logInpState, setLogChange] = useState(...stateCompAb.fCompanyAbout.logo)

  function inpVal(event) {
    console.log('fffff',event.target.logo);
    setLogChange(event.target.value)
  }



  console.log('staaaate', stateCompAb);



  return (
    <div className="twoColumns">
      <div className="firstCol">
      <form onSubmit={editCompanyForm}>
        <ul className="ulUserEdit">

          <li>
            <label> Ваш текущий логотип: <br />
              <span>{stateCompAb.fCompanyAbout.logo}</span>
              <input onChange={inpVal} type="text" name="logo" required />
            </label>
          </li>

          <li>
            <label> Название компании: <br />
              <span>{stateCompAb.fCompanyAbout.companyName}</span>
              <input type="text" name="companyName" required />
            </label>
          </li>

          <li>
            <label> Локация вашей компании: <br />
              <span>{stateCompAb.fCompanyAbout.location}</span>
              <input type="text" name="location" required />
            </label>
          </li>

          <li>
            <label> Интересы вашей компании: <br />
              <span>{stateCompAb.fCompSkill.name}</span>
              <input type="text" name="skill" required />
            </label>
          </li>
        </ul>
        <button type="submit">Отправить</button>

      </form>
    </div>
    <br/>
    <div className="secondCol">
      <p>efss</p>
    </div>
    </div>
    
  )
}

export default CompanyFormEdit;
