import Link from "next/link";
import styles from "./card.module.css";
import Image from "next/image";

const Card = ({ key, item }) => {
  return (
    <div className={styles.container} key={key}>
      <div className={styles.card}>
        <div className={styles.imageContainer}>
          <Image src="/csharpPost.jpg" alt="" layout="fill" objectFit="cover" />
        </div>
        <div className={styles.cardContent}>
          <dir className={styles.cardBadges}>
            {item.categories.map((category) => (
              <Link href="#" className={`${styles.cardBadge}`}>
                <span>{category.title}</span>
              </Link>
            ))}
          </dir>

          <h3 className={`${styles.cardTitle} hover2`}>
            <Link href="#" className="link">
              {item.title}
            </Link>
          </h3>

          <p className={styles.cardText}>{item.description}</p>

          <div className="card-wrapper">
            <div className={styles.cardTag}>
              {item.categories.map((category) => (
                <a href="#" className="span hover2">
                  {category.tagName}
                </a>
              ))}
            </div>

            <div className={styles.cardTag}>
              <ion-icon name="time-outline" aria-hidden="true"></ion-icon>
              <span className="span">3 giờ trước</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
