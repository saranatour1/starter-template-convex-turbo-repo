import Image from "next/image";
import { Button } from "@repo/ui/components/ui/button";
import styles from "./page.module.css";
import { Messages } from "./Messages";

export default function Home() {
  return (
    <div className={styles.page}>
      <Messages />
    </div>
  );
}
