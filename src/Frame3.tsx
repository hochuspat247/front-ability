import styles from './Frame3.module.css';

const Frame3 = () => {
  return (
    <div id="results" className={styles.frameParent}>
      <div className={styles.resultsHeader}>
        <div className={styles.resultsTitle}>Наши результаты</div>
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.instanceParent}>
          <div className={styles.homeWrapper}>
            <div className={styles.home}>3 члена команды</div>
          </div>
          <div className={styles.homeContainer}>
            <div className={styles.home}>4 партнера</div>
          </div>
          <div className={styles.homeContainer}>
            <div className={styles.home}>30 публикаций</div>
          </div>
          <div className={styles.homeContainer}>
            <div className={styles.home}>817 пользователей приложения</div>
          </div>
        </div>
        <div className={styles.homeContainer}>
          <div className={styles.home}>Ability</div>
        </div>
      </div>
      <div className={styles.frameContainer}>
        <div 
          className={styles.frameWrapper}
          style={{
            backgroundImage: 'url(/rftia.jpg)'
          }}
        >
          <div className={styles.frameParent2}>
            <div className={styles.frameParent3}>
              <div className={styles.petFriendlyPlantsParent}>
                <b className={styles.petFriendlyPlants}>Мочалова Екатерина Алексеевна</b>
              </div>
            </div>
            <div className={styles.lineParent}>
              <div className={styles.frameItem} />
              <div className={styles.instanceWrapper}>
                <div className={styles.frameParent4}>
                  <img className={styles.instanceChild} src="/source/2373.jpg" alt="Plant family" />
                  <div className={styles.piperaceaca}>Project manager</div>
                </div> 
                <div className={styles.frameParent4}>
                  <img className={styles.instanceChild} src="/source/2373.jpg" alt="Plant family" />
                  <div className={styles.piperaceaca}>Аналитик</div>
                </div>
              </div>
            </div>    
          </div>
        </div>
        <div 
          className={styles.frameWrapper2}
          style={{
            backgroundImage: 'url(/nastia.jpg)'
          }}
        >
          <div className={styles.frameParent5}>
            <div className={styles.frameParent3}>
              <div className={styles.orchidsWrapper}>
                <b className={styles.petFriendlyPlants}>Кулягина Анастасия Павловна</b>
              </div>
            </div>
            <div className={styles.lineParent}>
              <div className={styles.frameItem} />
              <div className={styles.instanceWrapper}>
                <div className={styles.frameParent4}>
                  <img className={styles.instanceChild} src="/source/3959.jpg" alt="Plant family" />
                  <div className={styles.piperaceaca}>Frontend</div>
                </div>
                <div className={styles.frameParent4}>
                  <img className={styles.instanceChild} src="/source/3959.jpg" alt="Plant family" />
                  <div className={styles.piperaceaca}>Дизайнер</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div 
          className={styles.frameWrapper3}
          style={{
            backgroundImage: 'url(/leha.jpg)'
          }}
        >
          <div className={styles.frameParent5}>
            <div className={styles.frameParent3}>
              <div className={styles.orchidsWrapper}>
                <b className={styles.petFriendlyPlants}>Воробьев Алексей Дмитриевич</b>
              </div>
            </div>
            <div className={styles.lineParent}>
              <div className={styles.frameItem} />
              <div className={styles.instanceWrapper}>
                <div className={styles.frameParent4}>
                  <img className={styles.instanceChild} src="/source/44290.jpg" alt="Plant family" />
                  <div className={styles.piperaceaca}>Backend</div>
                </div>
                <div className={styles.frameParent4}>
                  <img className={styles.instanceChild} src="/source/44290.jpg" alt="Plant family" />
                  <div className={styles.piperaceaca}>DevOps</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div 
          className={styles.frameWrapper4}
          style={{
            backgroundImage: 'url(/source/close-up-abstract-green-leaf-texture-nature-background-tropical-leaves.jpg)'
          }}
        >
          <div className={styles.frameParent6}>
            <div className={styles.frameParent7}>
              <div className={styles.joinTeamParent}>
                <b className={styles.joinTeam}>Хочу стать членом команды</b>
              </div>
            </div>
            <div className={styles.lineParent}>
              <div className={styles.frameItem} />
              <div className={styles.buttonCenterWrapper}>
                <a 
                  className={styles.applyButton} 
                  href="https://t.me/katerina_makone" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Отправить заявку
                </a>
              </div>
            </div>    
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frame3;
