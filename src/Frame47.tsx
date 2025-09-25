import styles from './Frame47.module.css';

const Frame47 = () => {
  return (
    <div className={styles.component1Parent}>
      <video 
        className={styles.backgroundVideo}
        autoPlay 
        loop 
        muted 
        playsInline
        src="/6fb0aedec6a6955bba34b2ab3b827584.mp4"
      />
      <div className={styles.component1}>
        <div className={styles.lineParent}>
          <div className={styles.frameChild} />
          <img className={styles.frameItem} src="/graphics.svg" alt="Community" />
        </div>
        <div className={styles.subscribeToTheContainer}>
          <p className={styles.subscribeToThe}>Приложение предоставляет систему
          рекомендаций по посещению врачей и управлению медицинской информацией</p>
        </div>
        <div className={styles.frameParent}>
          <div className={styles.instanceParent}>
            <div className={styles.homeWrapper}>
              <a className={styles.home} href="https://www.rustore.ru/catalog/app/com.alexej123.ability.possibility" target="_blank" rel="noopener noreferrer">RusStore</a>
            </div>
            <div className={styles.homeWrapper}>
              <a className={styles.home} href="https://ability.lexxv.ru/welcome" target="_blank" rel="noopener noreferrer">Веб-приложение</a>
            </div>
          </div>
          <div className={styles.frameInner} />
          <div className={styles.allRightReserved}>ООО "Абилити" ИНН 2312330921</div>   
          <div className={styles.fasieSection}>
            <div className={styles.fasieText}>Разработано при поддержке</div>
            <img className={styles.fasieLogo} src="/FASIE.SVG" alt="FASIE" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frame47;
