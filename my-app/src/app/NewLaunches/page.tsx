import styles from "./page.module.css";

// 1. Define TypeScript type
type Property = {
  id: number;
  title: string;
  location: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  area: number;
  propertyType: string;
  status: string;
  image: string;
};

export default function Page() {

  // 2. Demo dataset
  const properties: Property[] = [
    {
      id: 1,
      title: "Luxury Apartment",
      location: "Whitefield, Bangalore",
      price: 8500000,
      bedrooms: 3,
      bathrooms: 2,
      area: 1450,
      propertyType: "Apartment",
      status: "For Sale",
      image:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9"
    },
    {
      id: 2,
      title: "Modern Villa",
      location: "Sarjapur, Bangalore",
      price: 15000000,
      bedrooms: 4,
      bathrooms: 3,
      area: 2400,
      propertyType: "Villa",
      status: "For Sale",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
    },
    {
      id: 3,
      title: "Affordable 2BHK",
      location: "Electronic City, Bangalore",
      price: 5500000,
      bedrooms: 2,
      bathrooms: 2,
      area: 1100,
      propertyType: "Apartment",
      status: "For Rent",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"
    },
    {
      id: 4,
      title: "Premium Penthouse",
      location: "Indiranagar, Bangalore",
      price: 22000000,
      bedrooms: 4,
      bathrooms: 4,
      area: 3000,
      propertyType: "Penthouse",
      status: "For Sale",
      image:
        "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea"
    },
    {
      id: 5,
      title: "Compact Studio",
      location: "Marathahalli, Bangalore",
      price: 3500000,
      bedrooms: 1,
      bathrooms: 1,
      area: 650,
      propertyType: "Studio",
      status: "For Rent",
      image:
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0"
    }
  ];

  // 3. Return JSX
  return (
    <section className={styles.propertySection}>

      <div className={styles.propertyHeading}>
        <span>A FRESH BEGINNING</span>
        <h1>Explore new Launches</h1>
        <p>The deck settles when you arrive. The price stay on the card. Hover a project for a closer look.</p>
      </div>

      <div className={styles.propertyGrid}>

        {properties.map((property) => (
          <div className={styles.propertyCard} key={property.id}>

            <div className={styles.propertyImage}>
              <img
                src={property.image}
                alt={property.title}
              />

              <span className={styles.propertyType}>
                {property.propertyType}
              </span>

              <span className={styles.propertyStatus}>
                {property.status}
              </span>
            </div>

            <div className={styles.propertyContent}>

              <h2>{property.title}</h2>

              <p className={styles.location}>
                📍 {property.location}
              </p>

              <h3>
  ₹{(property.price < 10000000 
    ? property.price / 100000 
    : property.price / 10000000
  ).toLocaleString('en-IN', { maximumFractionDigits: 2 })}{' '}
  {property.price < 10000000 ? 'Lakhs' : 'Crores'}
</h3>


              <div className={styles.propertyDetails}>
                <span>🛏 {property.bedrooms} Beds</span>
                <span>🚿 {property.bathrooms} Baths</span>
                <span>📐 {property.area} Sq.ft</span>
              </div>

              <button className={styles.viewButton}>
                View Details →
              </button>

            </div>
          </div>
        ))}

      </div>
    </section>
  );
}

