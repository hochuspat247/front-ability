import styles from './Frame10.module.css';

const Frame10 = () => {
  return (
    <div id="about" className={styles.frameParent}>
      <div className={styles.leftSection}>
        <div className={styles.title}>О проекте</div>
        <div className={styles.subtitle}>Цель</div>
        <div className={styles.description}>Создать цифровую платформу для управления здоровьем, помогающую пользователям следить за своим состоянием, выявлять заболевания и контролировать медицинские показатели</div>
      </div>
      <div className={styles.videoSection}>
        <video 
          className={styles.video} 
          autoPlay 
          loop 
          muted 
          playsInline
          src="/0a6d772584cc9521079aec41282eb5d7.mp4"
        >
          <img className={styles.video} src="/Vector.svg" alt="Plant vector" />
        </video>
      </div>
    </div>
  );
};

export default Frame10;
