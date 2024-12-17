import Image from "next/image";
import React from "react";
import styles from "../styles/Motion.module.css"; // CSS 모듈을 불러옵니다

const Motion = () => {
  return (
    <div className={styles.giftContainer}>
      {/* 강아지 아이콘 */}
      <div className={styles.jumpingWrapper}>
        <Image
          src="/images/common/pet.png"
          alt="Pet"
          width={100}
          height={100}
          className={styles.jumpingImage} // 애니메이션 적용할 className
        />
      </div>

      {/* 회색 줄 */}
      <div className={styles.grayLine}></div>
    </div>
  );
};

export default Motion;
