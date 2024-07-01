import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <section className="section">
      <div className={`card ${styles.footer}`}>
        <div className={`${styles.footerTop}`}>
          <div className={styles.footerBrand}>
            <Link href="#" className="logo">
              <h2 className={`${styles.logoText} hover3`}>rimdasilva</h2>
            </Link>

            <p className={styles.footerText}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate inventore cum sint? Nobis aut doloremque modi repellat!
              Quos rem sed distinctio necessitatibus, inventore, ad ab hic culpa
              labore repellendus molestias!
            </p>
          </div>

          <div className={styles.footerList}>
            <p className={styles.footerListTitle}>Categories</p>

            <ul>
              <li className={`${styles.footerLink} hover3`}>
                <Link href="#">C#</Link>
              </li>

              <li className={`${styles.footerLink} hover3`}>
                <Link href="#">.Net Core</Link>
              </li>

              <li className={`${styles.footerLink} hover3`}>
                <Link href="#">SQL</Link>
              </li>

              <li className={`${styles.footerLink} hover3`}>
                <Link href="#">DevOps</Link>
              </li>

              <li className={`${styles.footerLink} hover3`}>
                <Link href="#">Design</Link>
              </li>

              <li className={`${styles.footerLink} hover3`}>
                <Link href="#">Khác</Link>
              </li>
            </ul>
          </div>

          <div className={styles.footerList}>
            <p className={styles.footerListTitle}>Newsletter</p>

            <p className={styles.footerText}>
              Sign up to be first to receive the latest stories inspiring us,
              case studies, and industry news.
            </p>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p className={styles.copyright}>
            &copy; Developed by{" "}
            <Link href="#" className={styles.copyrightLink}>
              rimdasilva.
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
