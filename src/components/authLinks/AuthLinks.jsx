"use client";

import React, { useState } from "react";
import styles from "./authLinks.module.css";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

const AuthLinks = () => {
  const [open, setOpen] = useState(false);

  const { status } = useSession();
  return (
    <>
      {status === "unauthenticated" ? (
        <Link className="hover1" href="/login">
          Đăng nhập
        </Link>
      ) : (
        <>
          <Link className="hover1" href="/write">
            Write
          </Link>
          <span className={styles.links} onClick={signOut}>
            Đăng xuất
          </span>
        </>
      )}

      <div className={styles.burger} onClick={() => setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>

      {open && (
        <div className={styles.reponsiveMenu}>
          <Link className="hover1" href="/">
            Giới thiệu
          </Link>
          <Link className="hover1" href="/">
            Khóa học
          </Link>
          <Link className="hover1" href="/">
            Blog
          </Link>
        </div>
      )}
    </>
  );
};

export default AuthLinks;
