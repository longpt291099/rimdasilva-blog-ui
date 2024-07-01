"use client";

import React, { useEffect, useState } from "react";
import styles from "./navbar.module.css";
import Link from "next/link";
import ThemeToggle from "../themeToggle/ThemeToggle";
import AuthLink from "../authLinks/AuthLink";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Divider } from "@mui/material";

const Navbar = () => {
  /* ---------------- Change background header ------------------ */

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(`.${styles.header}`);
      if (window.scrollY >= 80) {
        header.classList.add(styles.scrollHeader);
      } else {
        header.classList.remove(styles.scrollHeader);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener khi component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* ---------------- Toggle menu ------------------ */
  const [Toggle, showMenu] = useState(false);

  useEffect(() => {
    document.body.style.overflow = Toggle ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto"; // Khôi phục khi component bị unmount
    };
  }, [Toggle]);

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} wrapper`}>
        <Link href="/" className={`${styles.navLogo} hover2`}>
          rimdasilva
        </Link>
        <div
          className={
            Toggle
              ? `${styles.navMenu} ${styles.showMenu}`
              : `${styles.navMenu}`
          }
        >
          <div className={styles.navLinks}>
            <ul className={`${styles.navList} ${styles.grid}`}>
              <li className={`${styles.navItem} hover1`}>
                <i className={`uil uil-estate ${styles.navIcon}`}></i>
                <Link href="/" className={`${styles.link} hover1`}>
                  <span>Giới thiệu</span>
                </Link>
              </li>
              <li className={`${styles.navItem} hover1`}>
                <i className={`uil uil-user ${styles.navIcon}`}></i>
                <Link href="#about" className={`${styles.link} hover1`}>
                  Khóa học
                </Link>
              </li>
              <li className={`${styles.navItem} hover1`}>
                <i className={`uil uil-file-alt ${styles.navIcon}`}></i>
                <Link href="#skills" className={`${styles.link} hover1`}>
                  <span>Blog</span>
                </Link>
              </li>
            </ul>
          </div>

          <div className={styles.navClose}>
            <CloseIcon onClick={() => showMenu(!Toggle)} />
          </div>
        </div>

        <div className={styles.auth}>
          <AuthLink />
          <ThemeToggle />
        </div>

        <div className={styles.navToggle} onClick={() => showMenu(!Toggle)}>
          <MenuIcon />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
