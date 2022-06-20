function CompanyFormEdit () {
  
  // id нужно брать из сессии
  const companyId = 2;

  async function editCompanyForm (event) {
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

    // const allCompanyArr = await toServer.json();
  }

  return(
    <div>
        <form onSubmit={editCompanyForm}>
          <ul className="ulUserEdit">

            <li>
              <label>
                <input type="text" name="logo" placeholder="Ваш логотип..." />
              </label>
            </li>

            <li>
              <label>
                <input type="text" name="companyName" placeholder="Название компании..." />
              </label>
            </li>

            <li>
              <label>
                <input type="text" name="location" placeholder="Локация вашей компании..." />
              </label>
            </li>

            <li>
              <label>
                <input type="text" name="skill" placeholder="Интересы вашей компании..." />
              </label>
            </li>
          </ul>
          <button type="submit">Отправить</button>

        </form>
      </div>
  )
}

export default CompanyFormEdit;
