import { useState, useEffect } from 'react';
import styles from './Frame1.module.css';
import Frame10 from './Frame10';
import Frame3 from './Frame3';
import Frame4 from './Frame4';
import Frame11 from './Frame11';
import Frame35 from './Frame35';
import Frame5 from './Frame5';
import Frame47 from './Frame47';

const Frame1 = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Закрытие меню при клике вне его
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMobileMenuOpen && !(event.target as Element).closest(`.${styles.frameParent}`)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);
  return (
    <>
      <div 
        className={styles.subtractParent}
        style={{
          backgroundImage: 'url(/689944009a4daa0411936100b3d82ebf.jpg)',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <video 
          className={styles.backgroundVideo}
          autoPlay 
          loop 
          playsInline
          preload="auto"
          onError={(e) => {
            console.log('Video error:', e);
            // Скрываем видео при ошибке
            e.currentTarget.style.display = 'none';
          }}
        >
          <source src="/6fb0aedec6a6955bba34b2ab3b827584.mp4" type="video/mp4" />
          Ваш браузер не поддерживает видео.
        </video>
        <div className={styles.instanceWrapper}>
          <div className={styles.thParent}>
          <div className={styles.grow}>Abili</div> 
            <div className={styles.th}>ty</div>
          </div>
          <div className={styles.wereYourOnline}>Рекомендательная система по выявлению заболеваний на ранних стадиях диагностики</div>
        </div>
        <div className={styles.plantique}>{`Приложение `}</div>
        <div className={styles.frameParent}>
          <img className={styles.groupChild} src="/graphics.svg" alt="Logo" />
          <div className={styles.mobileMenuToggle} onClick={toggleMobileMenu}>
            <div className={`${styles.burgerIcon} ${isMobileMenuOpen ? styles.active : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div 
            className={`${styles.navigationContainer} ${isMobileMenuOpen ? styles.active : ''}`}
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                setIsMobileMenuOpen(false);
              }
            }}
          >
            <div className={styles.leftNavGroup}>
              <a href="#partners" className={styles.homeWrapper} onClick={() => setIsMobileMenuOpen(false)}>
                <div className={styles.home}>Партнеры проекта</div>
              </a>
              <a href="#victories" className={styles.homeWrapper} onClick={() => setIsMobileMenuOpen(false)}>
                <div className={styles.home}>Победы</div>
              </a>
            </div>
            <div className={styles.rightNavGroup}>
              <a href="#about" className={styles.homeFrame} onClick={() => setIsMobileMenuOpen(false)}>
                <div className={styles.home}>О проекте</div>
              </a>
              <a href="#results" className={styles.frameDiv} onClick={() => setIsMobileMenuOpen(false)}>
                <div className={styles.home}>Наши результаты</div>
              </a>
              <a href="#audience" className={styles.subtractParentHomeWrapper} onClick={() => setIsMobileMenuOpen(false)}>
                <div className={styles.home}>Целевая аудитория</div>
              </a>
            </div>
          </div>
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.userStatsContainer}>
            <div className={styles.groupWrapper}>
              <div className={styles.plantsParent}>
                <div className={styles.plants}>14658</div>
                <div className={styles.weWantOur}>Заинтересованных пользователей</div>
              </div>
            </div>
            <div className={styles.carouselContainer}>
              <div className={styles.carouselTrack}>
                <img className={styles.carouselImage} src="https://i.pinimg.com/1200x/03/d1/d5/03d1d597e5f65299ca779e9ae0c7b174.jpg" alt="User 1" />
                <img className={styles.carouselImage} src="https://i.pinimg.com/736x/59/48/55/594855be61147449210bb74a5fefea8b.jpg" alt="User 2" />
                <img className={styles.carouselImage} src="https://i.pinimg.com/1200x/64/80/42/648042f234c90accc85e3dc8937ddad3.jpg" alt="User 3" />
                <img className={styles.carouselImage} src="https://i.pinimg.com/1200x/a0/da/68/a0da681623dbb21b5e5c82fbbe17b5c1.jpg" alt="User 4" />
                <img className={styles.carouselImage} src="https://i.pinimg.com/736x/47/81/ad/4781ad4bb7d6387f13d67ba2eb366e0d.jpg" alt="User 5" />
                <img className={styles.carouselImage} src="https://i.pinimg.com/1200x/e5/56/b8/e556b88b52027e4ce45adf72a69b1108.jpg" alt="User 6" />
                {/* Дублируем изображения для бесшовной прокрутки */}
                <img className={styles.carouselImage} src="https://i.pinimg.com/1200x/03/d1/d5/03d1d597e5f65299ca779e9ae0c7b174.jpg" alt="User 1" />
                <img className={styles.carouselImage} src="https://i.pinimg.com/736x/59/48/55/594855be61147449210bb74a5fefea8b.jpg" alt="User 2" />
                <img className={styles.carouselImage} src="https://i.pinimg.com/1200x/64/80/42/648042f234c90accc85e3dc8937ddad3.jpg" alt="User 3" />
              </div>
            </div>
          </div>
          <a 
            href="https://www.rustore.ru/catalog/app/com.alexej123.ability.possibility" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.shopTropicalPlantsWrapper}
          >
            <div className={styles.shopTropicalPlants}>Скачать приложение</div>
            <div className={styles.uiIconarrowDownlightWrapper}>
              <img className={styles.uiIconarrowDownlight} src="/UI icon/arrow_down/light.svg" alt="Arrow down" />
            </div>
          </a>
        </div>
      </div>
      <Frame10 />
      <Frame3 />
      <Frame4 />
      <Frame11 />
      <Frame35 />
      <Frame5 />
      <Frame47 />
    </>
  );
};

export default Frame1;