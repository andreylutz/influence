import React, { useState, useEffect } from 'react'

export default function UserStatus() {
  const [state] = useState({
    avatar: 'https://static.toiimg.com/thumb/resizemode-4,msid-76729750,imgsize-249247,width-720/76729750.jpg', name: 'John', surname: 'Freeman', age: 24, location: 'Toronto', skill: 'Informational technology', email: 'netweb@gmail.com', about: `Я родился в Москве, в семидесятом.
  На краю города, моча рано ударила в голову:
  В четыре активно ругался матом.
  В детском саду девочки впервые показали мне п*зду.
  Потом школа, вонючая форма.
  Драки, клей - так я становился сильней.
  Воровал деньги в раздевалке, в восемь начал курить.
  В одиннадцать кинул первую палку, забил на родителей.` });

  const [news, setNews] = useState('');

  useEffect(() => {
    const newsArr = async () => {
      const newsValue = await fetch('https://newsapi.org/v2/top-headlines?country=ru&category=entertainment&apiKey=01aa78fcaf354efd98b614d26d030639');
      const json = await newsValue.json();
      setTimeout(() => {
        setNews(json.articles)
      }, 2500);
    }
    newsArr()
  }, []);
  return (
    <div className='user__status-container'>
      <div className='user__status-box'>
        <ul>
          <h4 className='user__status-about'>О себе</h4>
          <li>
            <p>{state.about}</p>
          </li>
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
