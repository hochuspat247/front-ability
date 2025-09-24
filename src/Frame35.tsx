import styles from './Frame35.module.css';

const Frame35 = () => {
  return (
    <div id="victories" className={styles.groupParent}>
      <div className={styles.textContent}>
        <div className={styles.qualityPlantsAnd}>Победы</div>
        <div className={styles.weOfferA}>Проект победил в конкурсе «Кубанская школа инноваторов» по направлению «Здравоохранение, биомедицина, фармацевтика» рынок НТИ HealthNet.</div>
      </div>
      <img className={styles.victoryImage} src="/image (1).png" alt="Победы" />
    </div>
  );
};

export default Frame35;
