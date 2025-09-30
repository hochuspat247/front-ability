import styles from './Frame11.module.css';

const Frame11 = () => {
  return (
    <div id="partners" className={styles.frameParent}>
      <div className={styles.newPlantsParent}>
        <div className={styles.newPlants}>Партнеры проекта</div>
      </div>
      <div className={styles.instanceParent}>
        <div 
          className={styles.frameWrapper}
          style={{
            backgroundImage: 'url(/01af8cd02f01a026e5850c43d9aee0ff.jpg)'
          }}
        >
          <div className={styles.frameGroup}>
            <div className={styles.instanceWrapper}>
              <a href="https://files.sberdisk.ru/s/R8ZKMbHMJOvHBFx" target="_blank" rel="noopener noreferrer">
                <img className={styles.frameChild} src="/UI icon/arrow_down/light.svg" alt="профессиональные врачи" />
              </a>
            </div>
            <div className={styles.calatheaParent}>
              <b className={styles.calathea}>профессиональные врачи</b>
              <div className={styles.loremIpsumDolor}>Окулова Наталья Владимировна

Дерматолог, аллерголог. Стаж
работы - 27 лет.</div>
            </div>
          </div>
        </div>
        <div 
          className={styles.frameContainer}
          style={{
            backgroundImage: 'url(https://i.pinimg.com/736x/0d/3c/b2/0d3cb245ae06e56a52f83be6b5ea40f3.jpg)'
          }}
        >
          <div className={styles.frameGroup}>
            <div className={styles.instanceWrapper}>
              <a href="https://files.sberdisk.ru/s/R8ZKMbHMJOvHBFx" target="_blank" rel="noopener noreferrer">
                <img className={styles.frameChild} src="/UI icon/arrow_down/light.svg" alt="ООО Барсик" />
              </a>
            </div>
            <div className={styles.calatheaParent}>
              <b className={styles.calathea}>ООО "Барсик"</b>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.instanceParent}>
        <div 
          className={styles.frameWrapper2}
          style={{
            backgroundImage: 'url(https://i.pinimg.com/1200x/f5/20/b6/f520b66c60c58f2d57047eaa7f21fa6a.jpg)'
          }}
        >
          <div className={styles.frameGroup}>
            <div className={styles.instanceWrapper}>
              <a href="https://files.sberdisk.ru/s/R8ZKMbHMJOvHBFx" target="_blank" rel="noopener noreferrer">
                <img className={styles.frameChild} src="/UI icon/arrow_down/light.svg" alt="ООО Интел" />
              </a>
            </div>
            <div className={styles.calatheaParent}>
              <b className={styles.calathea}>ООО "Интел"</b>
            </div>
          </div>
        </div>
        <div 
          className={styles.frameWrapper}
          style={{
            backgroundImage: 'url(https://i.pinimg.com/1200x/5f/e8/4b/5fe84b13eda11d3e06c2ad644c0431dc.jpg)'
          }}
        >
          <div className={styles.frameGroup}>
            <div className={styles.instanceWrapper}>
              <a href="https://files.sberdisk.ru/s/R8ZKMbHMJOvHBFx" target="_blank" rel="noopener noreferrer">
                <img className={styles.frameChild} src="/UI icon/arrow_down/light.svg" alt="ООО Евро-Продукт-К" />
              </a>
            </div>
            <div className={styles.calatheaParent}>
              <b className={styles.calathea}>ООО "Евро-Продукт-К"</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frame11;
