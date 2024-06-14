import Business from "../Business/Business";
import styles from "./BusinessList.module.css";

const businessList = [1, 2, 3];

export default function BusinessList() {
  return (
    <div className={styles.BusinessList}>
      {businessList.map(() => (
        <Business />
      ))}
    </div>
  );
}
