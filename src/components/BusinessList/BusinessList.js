import Business from "../Business/Business";
import styles from "./BusinessList.module.css";

export default function BusinessList({ businesses }) {
  return (
    businesses && (
      <div className={styles.BusinessList}>
        {businesses.map((business) => (
          <Business business={business} key={business.name} />
        ))}
      </div>
    )
  );
}
