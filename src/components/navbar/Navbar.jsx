import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "../themeToggle/ThemeToggle";
import AuthLinks from "../authLinks/AuthLinks";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <span className="hover2">rimdasilva</span>
      </div>
      <div className={styles.links}>
        <Link href="/" className={`${styles.link} hover1`}>
          Giới thiệu
        </Link>
        <Link href="/" className={`${styles.link} hover1`}>
          Khóa học
        </Link>
        <Link href="/" className={`${styles.link} hover1`}>
          Blog
        </Link>
      </div>
      <div className={styles.auth}>
        <ThemeToggle />
        <AuthLinks />
      </div>
    </div>
  );
};

export default Navbar;
