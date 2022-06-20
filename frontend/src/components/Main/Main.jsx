import React from 'react';
import Signup from '../signup/Signup';
import Signin from '../signin/Signin';
import styles from './Main.module.css';

const Main = () => {
  // ===================================>ОТКЛЮЧИЛ АНИМАЦИЮ<=====================================
  // const links = document.querySelectorAll("a.cipher");
  // const solveMilliseconds = 800;
  // const characterSelectionMilliseconds = 40;
  // const delayMilliseconds = 500;
  // const characters = [..."ABJPQRSZ1234567890*#@/*!%&^"];

  // const randomArrayElement = (arr) => {
  //   return arr[(arr.length * Math.random()) | 0];
  // };

  // links.forEach((element) => {
  //   element.addEventListener("mouseenter", (e) => {
  //     const element = e.target;
  //     scrambleText(element);
  //     e.preventDefault();
  //   });
  // });

  // function scrambleText(element) {
  //   if (element.classList.contains("active") == false) {
  //     let delay = 0;
  //     const elementText = element.innerText;
  //     const elementCharacters = [...elementText];
  //     const lockMilliseconds =
  //       delayMilliseconds * elementCharacters.length + solveMilliseconds;

  //     element.classList.add("active");

  //     setTimeout(() => {
  //       element.classList.remove("active");
  //     }, lockMilliseconds);

  //     elementCharacters.forEach((character, index) => {
  //       setTimeout(
  //         () => {
  //           let intervalId = setInterval(() => {
  //             const randomCharacter = randomArrayElement(characters);
  //             element.innerText = replaceCharacter(
  //               element.innerText,
  //               index,
  //               randomCharacter
  //             );

  //             setTimeout(() => {
  //               clearInterval(intervalId);
  //               element.innerText = replaceCharacter(
  //                 element.innerText,
  //                 index,
  //                 elementCharacters[index]
  //               );
  //             }, solveMilliseconds);
  //           }, characterSelectionMilliseconds);
  //         },
  //         delay === 0 ? (delay += 1) : (delay += delayMilliseconds)
  //       );
  //     });
  //   }
  // }

  // function replaceCharacter(str, index, chr) {
  //   return `${str.substring(0, index)}${chr}${str.substring(index + 1)}`;
  // }
  // ===================================>ОТКЛЮЧИЛ АНИМАЦИЮ<=====================================

  return (
    <>
      <h1 className={styles.influnce}>INFLUENCE</h1>
      <Signup />
      <Signin />

      <nav className={styles.navMain}>
        <a className={styles.cipher} id={styles.navTwo} href="#openAuth">Авторизация</a>
        <hr />
        <a className={styles.cipher} id={styles.nav} href="#openRega">Регистрация</a>
      </nav>
      <div className={`${styles.row} ${styles.rowBackground} ${styles.skew}`}>
        <div className={styles.column}>
          <h2>Title</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum consectetur facilis laboriosam cum soluta. Facilis eos, eveniet repellendus eius saepe perferendis! Dolores minus ratione accusantium? Et modi mollitia, temporibus hic voluptate nulla architecto atque asperiores, exercitationem repellendus at? In esse debitis aspernatur fuga error quae dolorum harum sit! Voluptatibus, quos.</p>
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.column}>
          <h2>Title</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum consectetur facilis laboriosam cum soluta. Facilis eos, eveniet repellendus eius saepe perferendis! Dolores minus ratione accusantium? Et modi mollitia, temporibus hic voluptate nulla architecto atque asperiores, exercitationem repellendus at? In esse debitis aspernatur fuga error quae dolorum harum sit! Voluptatibus, quos.</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum consectetur facilis laboriosam cum soluta. Facilis eos, eveniet repellendus eius saepe perferendis! Dolores minus ratione accusantium? Et modi mollitia, temporibus hic voluptate nulla architecto atque asperiores, exercitationem repellendus at? In esse debitis aspernatur fuga error quae dolorum harum sit! Voluptatibus, quos.</p>
        </div>
      </div>

      <div className={`${styles.row} ${styles.rowBackground} ${styles.skew}`}>
        <div className={styles.column}>
          <div className={styles.media}>
            <div className={styles.mediaImg}>
              <img src="//picsum.photos/1170/2532" alt="" />
            </div>
            <div className={styles.mediaContent}>
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
