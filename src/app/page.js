import Image from "next/image";
import styles from "./page.module.css";
import Recipes from "./components/recepies";

export default function Home() {
  return (
    <main className={styles.main}>
      <Recipes />
    </main>
  );
}
