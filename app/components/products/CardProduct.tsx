"use client";
import { useState } from "react";
import styles from "./cardProduct.module.css";

interface props {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const CardProducts: React.FC<props> = (props) => {
  const [data, setData] = useState(null);
  const handleViewUser = (user: any) => {
    return setData(user);
  };
  return (
    <>
      <div className={styles.card}>
        <h1>{props.id}</h1>
        <p>{props.title}</p>
        <p>{props.body}</p>
        <button onClick={() => handleViewUser(props.userId)}>View User</button>
        <div className={styles.userId}>{data}</div>
      </div>
    </>
  );
};

export default CardProducts;
