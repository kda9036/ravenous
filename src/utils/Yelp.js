const apiKey =
  "Yqcru0tlMJtoTM4iKal9KNR_Kjs_JaIqwSIkIL03mD6YCZ6VxtvzFt0h3HD1BakgnNsNzhHxiKKn9YhjQ_vT3A6co4135O_gi9_4Lu-yj9UN6cl0DD5S6w2IlN-zZnYx";

const Yelp = {
  async search(term, location, sortBy) {
    const response = await fetch(
      `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      }
    );
    const jsonResponse = await response.json();
    if (jsonResponse.businesses) {
      return jsonResponse.businesses.map((business) => ({
        id: business.id,
        imageSrc: business.image_url,
        name: business.name,
        address: business.location.address1,
        city: business.location.city,
        state: business.location.state,
        zipCode: business.location.zip_code,
        category: business.categories[0].title,
        rating: business.rating,
        reviewCount: business.review_count,
      }));
    }
  },
};

export default Yelp;
