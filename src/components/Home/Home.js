import React from 'react';
// import PropTypes from 'prop-types';
import styles from './Home.module.css';

const Home = () => (
  <section className={styles.home}>
    <h1 className={styles.home__header}>Welcome to our page</h1>
    <p className={styles.home__p}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit ex atque
      numquam nobis at placeat mollitia id voluptas dolores, maxime alias est
      beatae ducimus laudantium quod iste error hic harum perferendis quae?
      Illum quas maxime earum, perspiciatis, accusamus, quod velit voluptatum
      aspernatur deleniti dignissimos adipisci vitae atque voluptatibus eaque
      incidunt!
    </p>
    <p className={styles.home__p}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit ex atque
      numquam nobis at placeat mollitia id voluptas dolores, maxime alias est
      beatae ducimus laudantium quod iste error hic harum perferendis quae?
      Illum quas maxime earum, perspiciatis, accusamus, quod velit voluptatum
      aspernatur deleniti dignissimos adipisci vitae atque voluptatibus eaque
      incidunt!
    </p>
  </section>
);

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
