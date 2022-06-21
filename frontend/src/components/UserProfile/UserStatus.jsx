import React, { useState, useEffect } from 'react'
// import { useSelector } from 'react-redux';

export default function UserStatus() {
  const [news, setNews] = useState('');
  // const [user, setUser] = useState('');
  // const us = useSelector(state => state.user.id)

  // useEffect(() => {
  //   const fetchFunc = async () => {
  //     const response = await fetch('http://localhost:4000/api/info', {
  //       method: 'POST', // или 'PUT'
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify({ us }),
  //     });
  //     const json = await response.json();
  //     // console.log(json[0]);
  //     console.log(json[0])
  //     setUser(json[0]);

  //   }
  //   fetchFunc()
  // }, [us])


  useEffect(() => {
    const newsArr = async () => {
      const newsValue = await fetch('https://newsapi.org/v2/top-headlines?country=ru&category=entertainment&apiKey=01aa78fcaf354efd98b614d26d030639');
      const json = await newsValue.json();
      setTimeout(() => {
        setNews(json.articles)
      }, 2500);
    }
    newsArr();
  }, []);
  return (
    <div className='user__status-container'>
      <div className='user__status-box'>
        <ul>
          {/* {(user) ? <h4 className='user__status-about'>{user.name}</h4> : <h4>Добавьте имя</h4>} */}
        </ul>
      </div>
      <div className='user__status-wall'>
        <h4 className='user__status-title'>Актуальные новости</h4>
        <ul>
          {
            news.length !== 0 ?
              news.map((el) =>
                <li style={{ marginBottom: '30px' }}>
                  <h5>{el.title}</h5>
                  <p>{el.description}</p>
                </li>)
              :
              <>
                <h6>Новости появятся здесь</h6>
                <img src="https://i.gifer.com/origin/d4/d40d41bb85b3875eb84c202c5196403c.gif" alt="" style={{ width: '200px', height: '200px' }} />
              </>
          }
        </ul>
      </div>
    </div>
  )
}
