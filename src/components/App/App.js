import { useState } from "react";
import styles from "./App.module.css";
import BusinessList from "../BusinessList/BusinessList";
import SearchBar from "../SearchBar/SearchBar";
import Yelp from "../../utils/Yelp";

// const business = {
//   imageSrc: "https://content.codecademy.com/programs/react/ravenous/pizza.jpg",
//   name: "MarginOtto Pizzeria",
//   address: "1010 Paddington Way",
//   city: "Flavortown",
//   state: "NY",
//   zipCode: "10101",
//   category: "Italian",
//   rating: 4.5,
//   reviewCount: 90,
// };

// const businesses = [business, business, business, business, business];

function App() {
  const [businesses, setBusinesses] = useState([]);

  const searchYelp = async (term, location, sortBy) => {
    const searchedBusinesses = await Yelp.search(term, location, sortBy);
    setBusinesses(searchedBusinesses);
  };

  return (
    <div className={styles.App}>
      <h1>Ravenous</h1>
      <SearchBar searchYelp={searchYelp} />
      <BusinessList businesses={businesses} />
    </div>
  );
}

export default App;
