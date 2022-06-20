import React from 'react';
import Signup from '../signup/Signup';
import Signin from '../signin/Signin';
import './Main.modules.css';

const Main = () => {

  const links = document.querySelectorAll("a.cipher");
  const solveMilliseconds = 800;
  const characterSelectionMilliseconds = 40;
  const delayMilliseconds = 250;
  const characters = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890*#@/*!%&^"];
  
  const randomArrayElement = (arr) => {
    return arr[(arr.length * Math.random()) | 0];
  };
  
  links.forEach((element) => {
    element.addEventListener("mouseenter", (e) => {
      const element = e.target;
      scrambleText(element);
      e.preventDefault();
    });
  });
  
  function scrambleText(element) {
    if (element.classList.contains("active") == false) {
      let delay = 0;
      const elementText = element.innerText;
      const elementCharacters = [...elementText];
      const lockMilliseconds =
        delayMilliseconds * elementCharacters.length + solveMilliseconds;
  
      element.classList.add("active");
  
      setTimeout(() => {
        element.classList.remove("active");
      }, lockMilliseconds);
  
      elementCharacters.forEach((character, index) => {
        setTimeout(
          () => {
            let intervalId = setInterval(() => {
              const randomCharacter = randomArrayElement(characters);
              element.innerText = replaceCharacter(
                element.innerText,
                index,
                randomCharacter
              );
  
              setTimeout(() => {
                clearInterval(intervalId);
                element.innerText = replaceCharacter(
                  element.innerText,
                  index,
                  elementCharacters[index]
                );
              }, solveMilliseconds);
            }, characterSelectionMilliseconds);
          },
          delay === 0 ? (delay += 1) : (delay += delayMilliseconds)
        );
      });
    }
  }
  
  function replaceCharacter(str, index, chr) {
    return `${str.substring(0, index)}${chr}${str.substring(index + 1)}`;
  }
  

  return (
    <> 
    <Signup/>
    <Signin/>
    
    <nav className='navMain'>
      <a className="cipher navMain" href="#openAuth">Авторизация</a>
      <hr/>
      <a className="cipher navMain" href="#openRega">Регистрация</a>
    </nav>
    
       
        <div class="row rowBackground skew">
  <div class="column">
    <h2>Title</h2>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum consectetur facilis laboriosam cum soluta. Facilis eos, eveniet repellendus eius saepe perferendis! Dolores minus ratione accusantium? Et modi mollitia, temporibus hic voluptate nulla architecto atque asperiores, exercitationem repellendus at? In esse debitis aspernatur fuga error quae dolorum harum sit! Voluptatibus, quos.</p>
  </div>
</div>

<div class="row">
  <div class="column">
    <h2>Title</h2>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum consectetur facilis laboriosam cum soluta. Facilis eos, eveniet repellendus eius saepe perferendis! Dolores minus ratione accusantium? Et modi mollitia, temporibus hic voluptate nulla architecto atque asperiores, exercitationem repellendus at? In esse debitis aspernatur fuga error quae dolorum harum sit! Voluptatibus, quos.</p>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum consectetur facilis laboriosam cum soluta. Facilis eos, eveniet repellendus eius saepe perferendis! Dolores minus ratione accusantium? Et modi mollitia, temporibus hic voluptate nulla architecto atque asperiores, exercitationem repellendus at? In esse debitis aspernatur fuga error quae dolorum harum sit! Voluptatibus, quos.</p>
  </div>
</div>

<div class="row rowBackground skew">
  <div class="column">
    <div class="media">
      <div class="mediaImg">
        <img src="//picsum.photos/1170/2532" alt=""/>
      </div>
      <div class="mediaContent">
        <h2>Title</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum consectetur facilis laboriosam cum soluta. Facilis eos, eveniet repellendus eius saepe perferendis! Dolores minus ratione accusantium? Et modi mollitia, temporibus hic voluptate nulla architecto atque asperiores, exercitationem repellendus at? In esse debitis aspernatur fuga error quae dolorum harum sit! Voluptatibus, quos.</p>
      </div>
    </div>
  </div>
</div>
      
</>
  )
};

export default Main;
