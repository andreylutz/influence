import React, { useState } from 'react'
import '../../components/Navbar/Aside.css'


export default function Aside() {
  const [state] = useState([{ logo: 'http://sociala.uitheme.net/assets/images/user-7.png', name: 'Robbie', surname: 'Smith' }, { logo: 'http://sociala.uitheme.net/assets/images/user-8.png', name: 'Alexa', surname: 'Smith' }, { logo: '', name: '', surname: 'Smith' }, { logo: 'http://sociala.uitheme.net/assets/images/user-4.png', name: 'Kelly', surname: 'Smith' }, { logo: 'http://sociala.uitheme.net/assets/images/user-2.png', name: 'Debora', surname: 'Smith' }]);
  return (
    <div className='aside__conteiner'>
      <h4 className='aside__title'>Famouse people</h4>
      <ul>
        {state.map((el) =>
          <li key={el} className='fm-item'>
            {
              <div className='fm-container'>
                <img src={el.logo} alt=""/>
                <p style={{ display: 'inline-block' }}>{el.name}</p>
              </div>
            }
          </li>)}
      </ul>
      <div id="map" style={{ width: '300px', height: '400px' }}></div>
    </div >
  )
}
