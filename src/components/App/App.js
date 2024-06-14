import styles from "./App.module.css";
import BusinessList from "../BusinessList/BusinessList";

function App() {
  return (
    <div className={styles.App}>
      <BusinessList />
    </div>
  );
}

export default App;
