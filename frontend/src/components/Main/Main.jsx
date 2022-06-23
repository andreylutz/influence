import React from 'react';
import Signup from '../Signup/Signup';
import Signin from '../Signin/Signin';
import styles from './Main.module.css';

const Main = () => {

  return (
    <div className={styles.main}>
      <span className={styles.influnce}>INFLUENCE</span>
      <Signup />
      <Signin />

      <nav className={styles.navMain}>
        <a className={styles.cipher} id={styles.navTwo} href="#openAuth">
          Авторизация
        </a>
        <hr />
        <a className={styles.cipher} id={styles.nav} href="#openRega">
          Регистрация
        </a>
      </nav>
      <div className={`${styles.row} ${styles.rowBackground} ${styles.skew}`}>
        <div className={styles.column}>
          <h2 className={styles.titles}>Title</h2>
          <p className={styles.texts}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum consectetur facilis laboriosam cum soluta. Facilis eos, eveniet repellendus eius saepe perferendis! Dolores minus ratione accusantium? Et modi mollitia, temporibus hic voluptate nulla architecto atque asperiores, exercitationem repellendus at? In esse debitis aspernatur fuga error quae dolorum harum sit! Voluptatibus, quos.</p>
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.column}>
          <h2 className={styles.titles}>Title</h2>
          <p className={styles.texts}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum consectetur facilis laboriosam cum soluta. Facilis eos, eveniet repellendus eius saepe perferendis! Dolores minus ratione accusantium? Et modi mollitia, temporibus hic voluptate nulla architecto atque asperiores, exercitationem repellendus at? In esse debitis aspernatur fuga error quae dolorum harum sit! Voluptatibus, quos.</p>
          <p className={styles.texts}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum consectetur facilis laboriosam cum soluta. Facilis eos, eveniet repellendus eius saepe perferendis! Dolores minus ratione accusantium? Et modi mollitia, temporibus hic voluptate nulla architecto atque asperiores, exercitationem repellendus at? In esse debitis aspernatur fuga error quae dolorum harum sit! Voluptatibus, quos.</p>
        </div>
      </div>
      <div className={`${styles.row} ${styles.rowBackground} ${styles.skew}`}>
        <div className={styles.column}>
          <h2 className={styles.titles}>Title</h2>
          <p className={styles.texts}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum consectetur facilis laboriosam cum soluta. Facilis eos, eveniet repellendus eius saepe perferendis! Dolores minus ratione accusantium? Et modi mollitia, temporibus hic voluptate nulla architecto atque asperiores, exercitationem repellendus at? In esse debitis aspernatur fuga error quae dolorum harum sit! Voluptatibus, quos.</p>
        </div>
      </div>
      {/* <div className={`${styles.row} ${styles.rowBackground} ${styles.skew}`}>
        <div className={styles.column}>
          <div className={styles.media}>
            <div className={styles.mediaImg}>
              <img className={styles.buteful} src="//picsum.photos/1170/2532" alt="" />
            </div>
            <div className={styles.mediaContent}>
              <h2 className={styles.titles}>Title</h2>
              <p className={styles.texts}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum consectetur facilis laboriosam cum soluta. Facilis eos, eveniet repellendus eius saepe perferendis! Dolores minus ratione accusantium? Et modi mollitia, temporibus hic voluptate nulla architecto atque asperiores, exercitationem repellendus at? In esse debitis aspernatur fuga error quae dolorum harum sit! Voluptatibus, quos.</p>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  )
};

export default Main;
