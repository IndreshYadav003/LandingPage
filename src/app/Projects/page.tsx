import PropertyCard from "../components/PropertyCard"
export default function Page() {

 const propertyData = {
  id: "988f5dcb-aed7-4dcc-a720-a18f356d0c5f",
  name: "Mantri Espana",
  description: "Some awesome property",

  minPrice: 14000000,
  maxPrice: 30000000,

  landAreaSqft: 80000,
  status: "Pending approval",
  projectStatus: "Upcoming",

  totalFloors: 24,
  projectType: "Bungalow",
  numberOfUnits: 185,

  city: "Bengaluru",
  locality: "Bellandur",
  subLocality: "",

  segment: "Ultra-luxury",
  constructionType: "Precast Concrete Construction",
  developerCategory: "Luxury & High-End Developers",

  location: {
    lat: 12.9243,
    lng: 77.6789
  },

  projectUnits: null,
  address: "",

  assets: [
    {
      type: "project",
      label: "Project photos",
      url: "https://storage.googleapis.com/property-artifacts/property/988f5dcb-aed7-4dcc-a720-a18f356d0c5f/image/mantri-espana-bangalore.jpg"
    },
    {
      type: "project",
      label: "Project photos",
      url: "https://storage.googleapis.com/property-artifacts/property/988f5dcb-aed7-4dcc-a720-a18f356d0c5f/image/mantri-espana.jpg"
    },
    {
      type: "documents",
      label: "Documents",
      url: "https://storage.googleapis.com/property-artifacts/property/988f5dcb-aed7-4dcc-a720-a18f356d0c5f/image/brochure_compressed.pdf"
    }
  ],

  builder: {
    id: "06b08357-42b8-4caf-a531-39f71fc1444d",
    createdAt: "2025-04-05T10:13:05.253135Z",
    updatedAt: "2025-04-05T10:13:05.253135Z",

    name: "Lazy Developer",
    email: "info@lazy.dev",
    status: "active",
    phone: "7338305986",

    corporateAddress: "HSR Layout, Bengaluru 560102",

    citiesAvailable: ["Bengaluru"],

    completedProjects: 25,
    ongoingProjects: 10,
    totalProjects: 35,

    description:
      "A leading real estate developer in Bangalore, Lazy Developer specializes in residential and commercial projects that combine modern design with sustainable practices. Known for timely delivery and high-quality construction, the developer has built a strong reputation across the city's prime locations. With a focus on customer satisfaction and innovation, they continue to shape Bangalore’s urban landscape."
  },

  rtbEnabled: true
};

  return (
    <><PropertyCard property={propertyData}/></>
  )
}
