/* eslint-disable jsx-a11y/alt-text */
import './userPage.css'
function OneCompanyCard ({oneCompany}) {
  return (
    <div className="oneUserBlock">
      <div className='userAvatarBlock'>
      <img className="userAvatar" src={`${oneCompany['Company_about.logo']}`}/>
      </div>
      <ul className='ulOneUser'>
        <li className='liListOneUser'>Имя: <span>{oneCompany['Company_about.companyName']}</span> </li>
        <li>Локация: <span>{oneCompany['Company_about.location']}</span> </li>
        <li>Интересы: <span>{oneCompany['Skills.name']}</span> </li>
      </ul>
    </div>
  )
}

export default OneCompanyCard
