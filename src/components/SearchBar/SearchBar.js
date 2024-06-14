import styles from "./SearchBar.module.css";

const sortByOptions = {
  "Best Match": "best_match",
  "Highest Rated": "rating",
  "Most Reviewed": "review_count",
};

export default function SearchBar() {
  const renderSortByOption = () => {
    return Object.keys(sortByOptions).map((sortByOption) => {
      let sortByOptionValue = sortByOptions[sortByOption];
      return <li key={sortByOptionValue}>{sortByOption}</li>;
    });
  };

  return (
    <div className={styles.SearchBar}>
      <div className={styles.SearchBarSortOptions}>
        <ul>{renderSortByOption()}</ul>
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
