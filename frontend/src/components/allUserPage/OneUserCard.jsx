/* eslint-disable jsx-a11y/alt-text */
import './userPage.css'
function OneUserCard ({oneUser}) {
  // console.log('====================>', oneUser);
  return (
    <div className="oneUserBlock">
      <div className='userAvatarBlock'>
      <img className="userAvatar" src={`${oneUser['User_about.avatar']}`}/>
      </div>
      <ul className='ulOneUser'>
        <li className='liListOneUser'>Имя: <span>{oneUser['User_about.name']}</span> </li>
        <li>Возраст: <span>{oneUser['User_about.age']}</span> </li>
        <li>Локация: <span>{oneUser['User_about.location']}</span> </li>
        <li>Интересы: <span>{oneUser['Skills.name']}</span> </li>
      </ul>
    </div>
  )
}

export default OneUserCard
