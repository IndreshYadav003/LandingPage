// export default function Page() {
//   return (
//     <>first</>
//   )
// }

import "./page.css";

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
    <section className="property-section">

      <div className="property-heading">
        <span>OUR PROPERTIES</span>
        <h1>Featured Projects</h1>
        <p>Price ,plase and stage , before anyone has your number</p>
      </div>

      <div className="property-grid">

        {properties.map((property) => (
          <div className="property-card" key={property.id}>

            <div className="property-image">
              <img
                src={property.image}
                alt={property.title}
              />

              <span className="property-type">
                {property.propertyType}
              </span>

              <span className="property-status">
                {property.status}
              </span>
            </div>

            <div className="property-content">

              <h2>{property.title}</h2>

              <p className="location">
                📍 {property.location}
              </p>

              <h3>
                ₹{property.price.toLocaleString("en-IN")}
              </h3>

              <div className="property-details">
                <span>🛏 {property.bedrooms} Beds</span>
                <span>🚿 {property.bathrooms} Baths</span>
                <span>📐 {property.area} Sq.ft</span>
              </div>

              <button className="view-btn">
                View Details →
              </button>

            </div>
          </div>
        ))}

      </div>
    </section>
  );
}


// "use client";

// import axios from "axios";
// import { useEffect, useState } from "react";

// export default function Page() {
//   const [properties, setProperties] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const getProperties = async () => {
//       try {
//         const response = await axios.get(
//           "https://databasesample.com/mock/property-listings/properties"
//         );

//         setProperties(response.data);
//       } catch (error) {
//         console.error("API Error:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     getProperties();
//   }, []);

//   if (loading) return <h2>Loading...</h2>;

//   return (
//     <div>
//       {properties.map((property) => (
//         <div key={property.id} style={{borderBlockStartWidth:"4px",
//         backgroundColor:"lightgray",display:"block",textJustify:"center",
//         }} >
//           <h2>{property.address}</h2>
//           <p>{property.property_type}</p>
//           <p>Bedrooms: {property.bedrooms}</p>
//           <p>Bathrooms: {property.bathrooms}</p>
//         </div>
//       ))}
//     </div>
//   );
// }