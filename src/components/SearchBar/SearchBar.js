import styles from "./SearchBar.module.css";

export default function SearchBar() {
  return (
    <div className={styles.SearchBar}>
      <div className={styles.SearchBarSortOptions}>
        <ul>
          <li>Best Match</li>
          <li>Highest Rated</li>
          <li>Most Reviewed</li>
        </ul>
      </div>
      <div className={styles.SearchBarFields}>
        <input type="text" name="businesses" placeholder="Search Businesses" />
        <input type="text" name="location" placeholder="Where?" />
      </div>
      <div className={styles.SearchBarSubmit}>
        <a>Let's Go</a>
      </div>
    </div>
  );
}
