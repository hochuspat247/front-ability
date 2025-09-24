import { useState } from 'react';
import styles from './Frame5.module.css';

const Frame5 = () => {
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setExpandedItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  return (
    <div className={styles.instanceParent}>
      <div className={styles.frameWrapper}>
        <div 
          className={styles.orderingForDeliveryParent}
          onClick={() => toggleItem(0)}
        >
          <div className={styles.orderingForDelivery}>Перспективы развития проекта</div>
          <div className={styles.iconOutlinedDirectionsWrapper}>
            <img 
              className={`${styles.iconOutlinedDirections} ${expandedItems.includes(0) ? styles.arrowRotated : ''}`} 
              src="/UI icon/arrow_down/light.svg" 
              alt="" 
            />
          </div>
        </div>
        {expandedItems.includes(0) && (
          <div className={styles.weOfferPottingOnInStorePWrapper}>
            <div className={styles.weOfferPottingContainer}>
              <p className={styles.weOfferPotting}>В 2025-2026 году планируется: интеграция с медицинскими сервисами, персонализация, улучшение интерфейса, расширение географии.</p>
            </div>
          </div>
        )}
      </div>
      
      <div className={styles.frameParent}>
        <div 
          className={styles.orderingForDeliveryParent}
          onClick={() => toggleItem(1)}
        >
          <div className={styles.orderingForDelivery}>Влияние «Ability» на качество жизни пользователей</div>
          <div className={styles.iconOutlinedDirectionsContainer}>
            <img 
              className={`${styles.instanceParentIconOutlinedDirections} ${expandedItems.includes(1) ? styles.arrowRotated : ''}`} 
              src="/UI icon/arrow_down/light.svg" 
              alt="" 
            />
          </div>
        </div>
        {expandedItems.includes(1) && (
          <div className={styles.weOfferPottingOnInStorePWrapper}>
            <div className={styles.weOfferPottingContainer}>
              <p className={styles.weOfferPotting}>💡 Осознанность в вопросах здоровья</p>
              <p className={styles.weOfferPotting}>🩺 Меньше риска осложнений</p>
              <p className={styles.weOfferPotting}>📊 Привычка контролировать здоровье</p>
            </div>
          </div>
        )}
      </div>
      
      <div className={styles.frameWrapper}>
        <div 
          className={styles.orderingForDeliveryParent}
          onClick={() => toggleItem(2)}
        >
          <div className={styles.orderingForDelivery}>Отзывы пользователей</div>
          <div className={styles.iconOutlinedDirectionsWrapper}>
            <img 
              className={`${styles.iconOutlinedDirections} ${expandedItems.includes(2) ? styles.arrowRotated : ''}`} 
              src="/UI icon/arrow_down/light.svg" 
              alt="" 
            />
          </div>
        </div>
        {expandedItems.includes(2) && (
          <div className={styles.weOfferPottingOnInStorePWrapper}>
            <div className={styles.weOfferPottingContainer}>
              <p className={styles.weOfferPotting}>«Теперь я не забываю сдавать анализы и принимать витамины — всё в одном приложении» (Анна, 26 лет)</p>
              <p className={styles.weOfferPotting}>«Мне удобно вести показатели ребёнка и мужа» (Ирина, 34 года)</p>
            </div>
          </div>
        )}
      </div>
      
      <div className={styles.frameWrapper}>
        <div 
          className={styles.orderingForDeliveryParent}
          onClick={() => toggleItem(3)}
        >
          <div className={styles.orderingForDelivery}>Количественные результаты</div>
          <div className={styles.iconOutlinedDirectionsWrapper}>
            <img 
              className={`${styles.iconOutlinedDirections} ${expandedItems.includes(3) ? styles.arrowRotated : ''}`} 
              src="/UI icon/arrow_down/light.svg" 
              alt="" 
            />
          </div>
        </div>
        {expandedItems.includes(3) && (
          <div className={styles.weOfferPottingOnInStorePWrapper}>
            <div className={styles.weOfferPottingContainer}>
              <p className={styles.weOfferPotting}>72% участников стали чаще контролировать медицинские показатели</p>
              <p className={styles.weOfferPotting}>38% пользователей выполняют рекомендации по профилактике заболеваний</p>
              <p className={styles.weOfferPotting}>Среднее время на поиск анализов сократилось с 15 до 4 минут</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Frame5;
