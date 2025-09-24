import styles from './Frame4.module.css';

const Frame4 = () => {
  return (
    <div id="audience" className={styles.frameParent}>
      <div className={styles.newPlantsParent}>
        <div className={styles.newPlants}>Целевая аудитория</div>
      </div>
      <div className={styles.bringNatureInsider}>Это не просто приложение — это инструмент формирования новой культуры: культуры осознанного отношения к своему здоровью, где профилактика и контроль становятся нормой, а не экстренной мерой.</div>
      <div className={styles.frameGroup}>
        <div className={styles.instanceParent}>
          <div className={styles.rectangleParent}>
            <video className={styles.instanceChild} autoPlay loop muted playsInline>
              <source src="/b9b01fadbae11cd2e110b02f1948a8fc.mp4" type="video/mp4" />
            </video>
            <div className={styles.frameContainer}>
              <div className={styles.frameDiv}>
                <div className={styles.peperomiaPlantsParent}>
                  <div className={styles.peperomiaPlants}>Студенты</div>
                  <div className={styles.moistButWellDrained}>Интересы: Поддержание здоровья для активного образа жизни, инновации</div>
                </div>
                <b className={styles.b}>Возраст:18–25 лет</b>
              </div>
            </div>
            <div className={styles.iconOutlinedActionMaiWrapper}>
              <img className={styles.iconOutlinedActionMai} src="/icon/outlined/action/main/heart.svg" alt="Add to cart" />
            </div>
          </div>
          <div className={styles.rectangleParent}>
            <video className={styles.instanceChild} autoPlay loop muted playsInline>
              <source src="/107e28bd42983e223e0fe7b2f6fd4f2e.mp4" type="video/mp4" />
            </video>
            <div className={styles.frameContainer}>
              <div className={styles.frameDiv}>
                <div className={styles.peperomiaPlantsParent}>
                  <div className={styles.peperomiaPlants}>Занятые профессионалы</div>
                  <div className={styles.moistButWellDrained}>Интересы: Баланс между работой и здоровьем, использующие  цифровые решения</div>
                </div>
                <b className={styles.b}>Статус: Работающие специалисты</b>
              </div>
            </div>
            <div className={styles.iconOutlinedActionMaiWrapper}>
              <img className={styles.iconOutlinedActionMai} src="/icon/outlined/action/main/heart.svg" alt="Add to cart" />
            </div>
          </div>
          <div className={styles.rectangleParent}>
            <video className={styles.instanceChild} autoPlay loop muted playsInline>
              <source src="/521c1d0c2dfb19634473340e5144c15f.mp4" type="video/mp4" />
            </video>
            <div className={styles.frameContainer}>
              <div className={styles.frameDiv}>
                <div className={styles.peperomiaPlantsParent}>
                  <div className={styles.peperomiaPlants}>Родители</div>
                  <div className={styles.moistButWellDrained}>Интересы: Забота о здоровье  семьи, контроль анализов и прием лекарств</div>
                </div>
                <b className={styles.b}>Возраст: 25–50 лет</b>
              </div>
            </div>
            <div className={styles.iconOutlinedActionMaiWrapper}>
              <img className={styles.iconOutlinedActionMai} src="/icon/outlined/action/main/heart.svg" alt="Add to cart" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frame4;
