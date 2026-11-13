'use client';
import { useState, type FormEvent } from 'react';
import styles from './page.module.css';

// Property Type
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

// Search Type
type Search = {
  search: string;
  location: string;
  price: string;
  propertyType: string;
  propertyStatus: string;
};

// 1. Property Dataset
const properties: Property[] = [
  {
    id: 1,
    title: 'Luxury Apartment',
    location: 'Whitefield, Bangalore',
    price: 8500000,
    bedrooms: 3,
    bathrooms: 2,
    area: 1450,
    propertyType: 'Apartment',
    status: 'Ready',
    image: 'https://unsplash.com',
  },
  {
    id: 2,
    title: 'Modern Villa',
    location: 'Sarjapur, Bangalore',
    price: 15000000,
    bedrooms: 4,
    bathrooms: 3,
    area: 2400,
    propertyType: 'Villa',
    status: 'launch',
    image: 'https://unsplash.com',
  },
  {
    id: 3,
    title: 'Affordable 2BHK',
    location: 'Electronic City, Bangalore',
    price: 5500000,
    bedrooms: 2,
    bathrooms: 2,
    area: 1100,
    propertyType: 'Apartment',
    status: 'under',
    image: 'https://unsplash.com',
  },
  {
    id: 4,
    title: 'Premium Penthouse',
    location: 'Indiranagar, Bangalore',
    price: 22000000,
    bedrooms: 4,
    bathrooms: 4,
    area: 3000,
    propertyType: 'Penthouse',
    status: 'Ready',
    image: 'https://unsplash.com',
  },
  {
    id: 5,
    title: 'Compact Studio',
    location: 'Marathahalli, Bangalore',
    price: 3500000,
    bedrooms: 1,
    bathrooms: 1,
    area: 650,
    propertyType: 'Studio',
    status: 'launch',
    image: 'https://unsplash.com',
  },
  {
    id: 6,
    title: 'Skyline Residency 3BHK',
    location: 'Whitefield, Bangalore',
    price: 9800000,
    bedrooms: 3,
    bathrooms: 3,
    area: 1620,
    propertyType: 'Apartment',
    status: 'under',
    image: 'https://unsplash.com',
  },
  {
    id: 7,
    title: 'Greenwood Estate Villa',
    location: 'Sarjapur, Bangalore',
    price: 18500000,
    bedrooms: 4,
    bathrooms: 4,
    area: 2800,
    propertyType: 'Villa',
    status: 'Ready',
    image: 'https://unsplash.com',
  },
  {
    id: 8,
    title: 'TechPark Smart Studio',
    location: 'Electronic City, Bangalore',
    price: 3200000,
    bedrooms: 1,
    bathrooms: 1,
    area: 580,
    propertyType: 'Studio',
    status: 'Ready',
    image: 'https://unsplash.com',
  },
  {
    id: 9,
    title: '100 Feet Road Penthouse',
    location: 'Indiranagar, Bangalore',
    price: 19500000,
    bedrooms: 3,
    bathrooms: 3,
    area: 2550,
    propertyType: 'Penthouse',
    status: 'launch',
    image: 'https://unsplash.com',
  },
  {
    id: 10,
    title: 'Outer Ring Cozy 2BHK',
    location: 'Marathahalli, Bangalore',
    price: 6800000,
    bedrooms: 2,
    bathrooms: 2,
    area: 1180,
    propertyType: 'Apartment',
    status: 'Ready',
    image: 'https://unsplash.com',
  },
  {
    id: 11,
    title: 'ITPL View Studio',
    location: 'Whitefield, Bangalore',
    price: 4200000,
    bedrooms: 1,
    bathrooms: 1,
    area: 680,
    propertyType: 'Studio',
    status: 'launch',
    image: 'https://unsplash.com',
  },
  {
    id: 12,
    title: 'Lakeview Duplex Villa',
    location: 'Sarjapur, Bangalore',
    price: 16500000,
    bedrooms: 4,
    bathrooms: 3,
    area: 2500,
    propertyType: 'Villa',
    status: 'under',
    image: 'https://unsplash.com',
  },
  {
    id: 13,
    title: 'Phase 1 Budget 1BHK',
    location: 'Electronic City, Bangalore',
    price: 3800000,
    bedrooms: 1,
    bathrooms: 1,
    area: 720,
    propertyType: 'Apartment',
    status: 'Ready',
    image: 'https://unsplash.com',
  },
  {
    id: 14,
    title: 'Defence Colony Villa',
    location: 'Indiranagar, Bangalore',
    price: 24000000,
    bedrooms: 5,
    bathrooms: 5,
    area: 3500,
    propertyType: 'Villa',
    status: 'Ready',
    image: 'https://unsplash.com',
  },
  {
    id: 15,
    title: 'Spice Garden 3BHK',
    location: 'Marathahalli, Bangalore',
    price: 9200000,
    bedrooms: 3,
    bathrooms: 2,
    area: 1510,
    propertyType: 'Apartment',
    status: 'under',
    image: 'https://unsplash.com',
  },
  {
    id: 16,
    title: 'Varthur Road Penthouse',
    location: 'Whitefield, Bangalore',
    price: 17500000,
    bedrooms: 4,
    bathrooms: 4,
    area: 2650,
    propertyType: 'Penthouse',
    status: 'Ready',
    image: 'https://unsplash.com',
  },
  {
    id: 17,
    title: 'Wipro Gate 2BHK',
    location: 'Sarjapur, Bangalore',
    price: 7400000,
    bedrooms: 2,
    bathrooms: 2,
    area: 1210,
    propertyType: 'Apartment',
    status: 'launch',
    image: 'https://unsplash.com',
  },
  {
    id: 18,
    title: 'Neeladri Road Villa',
    location: 'Electronic City, Bangalore',
    price: 13500000,
    bedrooms: 3,
    bathrooms: 3,
    area: 2100,
    propertyType: 'Villa',
    status: 'Ready',
    image: 'https://unsplash.com',
  },
  {
    id: 19,
    title: 'HAL 2nd Stage Apartment',
    location: 'Indiranagar, Bangalore',
    price: 12500000,
    bedrooms: 3,
    bathrooms: 3,
    area: 1750,
    propertyType: 'Apartment',
    status: 'Ready',
    image: 'https://unsplash.com',
  },
  {
    id: 20,
    title: 'Kundalahalli Studio Loft',
    location: 'Marathahalli, Bangalore',
    price: 4100000,
    bedrooms: 1,
    bathrooms: 1,
    area: 640,
    propertyType: 'Studio',
    status: 'under',
    image: 'https://unsplash.com',
  },
  {
    id: 21,
    title: 'Prestige Park Villa',
    location: 'Whitefield, Bangalore',
    price: 19800000,
    bedrooms: 4,
    bathrooms: 4,
    area: 2950,
    propertyType: 'Villa',
    status: 'launch',
    image: 'https://unsplash.com',
  },
  {
    id: 22,
    title: 'Carmelaram Micro Studio',
    location: 'Sarjapur, Bangalore',
    price: 3600000,
    bedrooms: 1,
    bathrooms: 1,
    area: 600,
    propertyType: 'Studio',
    status: 'Ready',
    image: 'https://unsplash.com',
  },
  {
    id: 23,
    title: 'Infosys Gate 3BHK',
    location: 'Electronic City, Bangalore',
    price: 7900000,
    bedrooms: 3,
    bathrooms: 2,
    area: 1380,
    propertyType: 'Apartment',
    status: 'launch',
    image: 'https://unsplash.com',
  },
  {
    id: 24,
    title: 'CMH Road Executive Studio',
    location: 'Indiranagar, Bangalore',
    price: 4900000,
    bedrooms: 1,
    bathrooms: 1,
    area: 700,
    propertyType: 'Studio',
    status: 'Ready',
    image: 'https://unsplash.com',
  },
  {
    id: 25,
    title: 'Munnekollal Penthouse',
    location: 'Marathahalli, Bangalore',
    price: 15800000,
    bedrooms: 3,
    bathrooms: 3,
    area: 2300,
    propertyType: 'Penthouse',
    status: 'Ready',
    image: 'https://unsplash.com',
  },
  {
    id: 26,
    title: 'Hope Farm 2BHK',
    location: 'Whitefield, Bangalore',
    price: 6400000,
    bedrooms: 2,
    bathrooms: 2,
    area: 1140,
    propertyType: 'Apartment',
    status: 'Ready',
    image: 'https://unsplash.com',
  },
  {
    id: 27,
    title: 'Kaikondrahalli Penthouse',
    location: 'Sarjapur, Bangalore',
    price: 18200000,
    bedrooms: 4,
    bathrooms: 4,
    area: 2700,
    propertyType: 'Penthouse',
    status: 'under',
    image: 'https://unsplash.com',
  },
  {
    id: 28,
    title: 'Phase 2 Sky Penthouse',
    location: 'Electronic City, Bangalore',
    price: 12800000,
    bedrooms: 3,
    bathrooms: 3,
    area: 2050,
    propertyType: 'Penthouse',
    status: 'Ready',
    image: 'https://unsplash.com',
  },
  {
    id: 29,
    title: 'Ulsoor Border 2BHK',
    location: 'Indiranagar, Bangalore',
    price: 9600000,
    bedrooms: 2,
    bathrooms: 2,
    area: 1250,
    propertyType: 'Apartment',
    status: 'under',
    image: 'https://unsplash.com',
  },
  {
    id: 30,
    title: 'Brookefield Garden Villa',
    location: 'Marathahalli, Bangalore',
    price: 17900000,
    bedrooms: 4,
    bathrooms: 3,
    area: 2600,
    propertyType: 'Villa',
    status: 'launch',
    image: 'https://unsplash.com',
  },
  {
    id: 31,
    title: 'Kadugodi Metro 2BHK',
    location: 'Whitefield, Bangalore',
    price: 5900000,
    bedrooms: 2,
    bathrooms: 2,
    area: 1080,
    propertyType: 'Apartment',
    status: 'launch',
    image: 'https://unsplash.com',
  },
  {
    id: 32,
    title: 'Doddakannelli 3BHK',
    location: 'Sarjapur, Bangalore',
    price: 8900000,
    bedrooms: 3,
    bathrooms: 2,
    area: 1490,
    propertyType: 'Apartment',
    status: 'Ready',
    image: 'https://unsplash.com',
  },
  {
    id: 33,
    title: 'Bommasandra Compact Flat',
    location: 'Electronic City, Bangalore',
    price: 4400000,
    bedrooms: 2,
    bathrooms: 1,
    area: 920,
    propertyType: 'Apartment',
    status: 'Ready',
    image: 'https://unsplash.com',
  },
  {
    id: 34,
    title: 'Domlur Flyover 3BHK',
    location: 'Indiranagar, Bangalore',
    price: 14200000,
    bedrooms: 3,
    bathrooms: 3,
    area: 1850,
    propertyType: 'Apartment',
    status: 'Ready',
    image: 'https://unsplash.com',
  },
  {
    id: 35,
    title: 'Panathur Main Road 2BHK',
    location: 'Marathahalli, Bangalore',
    price: 6200000,
    bedrooms: 2,
    bathrooms: 2,
    area: 1120,
    propertyType: 'Apartment',
    status: 'launch',
    image: 'https://unsplash.com',
  },
  {
    id: 36,
    title: 'Brigade Corner Studio',
    location: 'Whitefield, Bangalore',
    price: 4600000,
    bedrooms: 1,
    bathrooms: 1,
    area: 690,
    propertyType: 'Studio',
    status: 'under',
    image: 'https://unsplash.com',
  },
  {
    id: 37,
    title: 'Bellandur Border Villa',
    location: 'Sarjapur, Bangalore',
    price: 19200000,
    bedrooms: 4,
    bathrooms: 4,
    area: 2850,
    propertyType: 'Villa',
    status: 'Ready',
    image: 'https://unsplash.com',
  },
  {
    id: 38,
    title: 'Electronic City Studio Pod',
    location: 'Electronic City, Bangalore',
    price: 2900000,
    bedrooms: 1,
    bathrooms: 1,
    area: 540,
    propertyType: 'Studio',
    status: 'launch',
    image: 'https://unsplash.com',
  },
  {
    id: 39,
    title: 'Old Madras Road Penthouse',
    location: 'Indiranagar, Bangalore',
    price: 18800000,
    bedrooms: 3,
    bathrooms: 4,
    area: 2450,
    propertyType: 'Penthouse',
    status: 'under',
    image: 'https://unsplash.com',
  },
];

const fallbackImages = [
  '/images/property1.png',
  '/images/property2.png',
  '/images/property3.png',
];

function getPropertyImage(property: Property) {
  if (property.image !== 'https://unsplash.com') {
    return property.image;
  }

  return fallbackImages[(property.id - 1) % fallbackImages.length];
}

export default function Page() {
  // 2. Search State
  const [search, setSearch] = useState<Search>({
    search: '',
    location: '',
    price: '',
    propertyType: '',
    propertyStatus: '',
  });

  // 3. Filtered Properties & UI State
  const [filteredProperties, setFilteredProperties] = useState<Property[]>([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

  // 4. Loading and Error
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Number of filters set inside the panel (shown as a badge)
  const activeFilters = [
    search.location,
    search.price,
    search.propertyType,
    search.propertyStatus,
  ].filter(Boolean).length;

  // 5. Handle Input Changes
  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setSearch((prev) => ({ ...prev, [name]: value }));
  }

  // Reset only the filters inside the panel
  function resetFilters() {
    setSearch((prev) => ({
      ...prev,
      location: '',
      price: '',
      propertyType: '',
      propertyStatus: '',
    }));
  }

  // 6. Search and Filter Function (Runs ONLY on submit)
  function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError('');
    setHasSearched(true);
    setShowFilters(false); // close panel after searching/applying

    try {
      const query = search.search.trim().toLowerCase();
      const maxPrice =
        search.price === '50l'
          ? 5_000_000
          : search.price === '1cr'
          ? 10_000_000
          : search.price === '2cr'
          ? 20_000_000
          : undefined;

      const result = properties.filter((property) => {
        const searchMatch =
          !query ||
          property.title.toLowerCase().includes(query) ||
          property.location.toLowerCase().includes(query);

        const locationMatch =
          !search.location ||
          property.location.toLowerCase().includes(search.location.toLowerCase());

        const priceMatch = maxPrice === undefined || property.price <= maxPrice;

        const typeMatch =
          !search.propertyType || property.propertyType === search.propertyType;

        const statusMatch =
          !search.propertyStatus || property.status === search.propertyStatus;

        return (
          searchMatch && locationMatch && priceMatch && typeMatch && statusMatch
        );
      });
      setFilteredProperties(result);
    } catch {
      setError('Something went wrong!');
    } finally {
      setLoading(false);
    }
  }

  function formatPrice(price: number) {
    if (price >= 10000000) {
      return `₹${(price / 10000000).toFixed(2)} Crores`;
    }
    return `₹${(price / 100000).toFixed(2)} Lakhs`;
  }

  // 7. UI
  return (
    <main className={styles.container}>
      {/* Search + Filter */}
      <form className={styles.searchWrapper} onSubmit={handleSearch}>
        <div className={styles.searchBox}>
          <div className={styles.searchField}>
            <input
              type="search"
              name="search"
              placeholder="Search property name or location..."
              value={search.search}
              onChange={handleChange}
            />

            <button
              type="button"
              className={styles.filterButton}
              onClick={() => setShowFilters((prev) => !prev)}
              aria-expanded={showFilters}
              aria-controls="filter-panel"
              aria-label={
                activeFilters > 0
                  ? `Filters, ${activeFilters} active`
                  : 'Filters'
              }
              title="Filters"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="4" y1="6" x2="20" y2="6" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="18" x2="20" y2="18" />
                <circle cx="9" cy="6" r="2.2" fill="currentColor" />
                <circle cx="15" cy="12" r="2.2" fill="currentColor" />
                <circle cx="8" cy="18" r="2.2" fill="currentColor" />
              </svg>
              {activeFilters > 0 && (
                <span className={styles.filterBadge}>{activeFilters}</span>
              )}
            </button>
          </div>

          <button className={styles.searchButton} type="submit">
            Search
          </button>
        </div>

        {/* Filter panel */}
        {showFilters && (
          <div id="filter-panel" className={styles.filterPanel}>
            <div className={styles.filterHeader}>
              <h3>Filters</h3>
              <button
                type="button"
                className={styles.resetButton}
                onClick={resetFilters}
              >
                Reset
              </button>
            </div>

            <div className={styles.filterGrid}>
              <div className={styles.filterGroup}>
                <label htmlFor="location">Location</label>
                <select
                  id="location"
                  name="location"
                  value={search.location}
                  onChange={handleChange}
                >
                  <option value="">All Locations</option>
                  <option value="Whitefield">Whitefield</option>
                  <option value="Sarjapur">Sarjapur</option>
                  <option value="Electronic City">Electronic City</option>
                  <option value="Indiranagar">Indiranagar</option>
                  <option value="Marathahalli">Marathahalli</option>
                </select>
              </div>

              <div className={styles.filterGroup}>
                <label htmlFor="price">Max Price</label>
                <select
                  id="price"
                  name="price"
                  value={search.price}
                  onChange={handleChange}
                >
                  <option value="">All Prices</option>
                  <option value="50l">Under 50 Lakhs</option>
                  <option value="1cr">Under 1 Crore</option>
                  <option value="2cr">Under 2 Crores</option>
                </select>
              </div>

              <div className={styles.filterGroup}>
                <label htmlFor="propertyType">Property Type</label>
                <select
                  id="propertyType"
                  name="propertyType"
                  value={search.propertyType}
                  onChange={handleChange}
                >
                  <option value="">All Property Types</option>
                  <option value="Apartment">Apartment</option>
                  <option value="Villa">Villa</option>
                  <option value="Penthouse">Penthouse</option>
                  <option value="Studio">Studio</option>
                </select>
              </div>

              <div className={styles.filterGroup}>
                <label htmlFor="propertyStatus">Project Status</label>
                <select
                  id="propertyStatus"
                  name="propertyStatus"
                  value={search.propertyStatus}
                  onChange={handleChange}
                >
                  <option value="">All Project Status</option>
                  <option value="launch">New Launch</option>
                  <option value="Ready">Ready To Move</option>
                  <option value="under">Under Construction</option>
                </select>
              </div>
            </div>

            <button type="submit" className={styles.applyFilterButton}>
              Apply Filters
            </button>
          </div>
        )}
      </form>

      {/* Results Section (Only shown after submitting a search) */}
      {hasSearched && (
        <>
          <div className={styles.resultHeader}>
            <span>{filteredProperties.length} Properties Found</span>
          </div>

          {loading && <p>Loading properties...</p>}
          {error && <p className={styles.error}>{error}</p>}

          {!loading && filteredProperties.length === 0 && (
            <div className={styles.noResults}>
              <h3>No Properties Found</h3>
              <p>Try changing your search filters.</p>
            </div>
          )}

          {/* Property Cards */}
          <div className={styles.propertyGrid}>
            {filteredProperties.map((property) => (
              <div className={styles.propertyCard} key={property.id}>
                <div className={styles.propertyImage}>
                  <img src={getPropertyImage(property)} alt={property.title} />
                  <span className={styles.propertyType}>
                    {property.propertyType}
                  </span>
                  <span className={styles.propertyStatus}>
                    {property.status === 'launch'
                      ? 'New Launch'
                      : property.status === 'Ready'
                      ? 'Ready To Move'
                      : 'Under Construction'}
                  </span>
                </div>
                <div className={styles.propertyContent}>
                  <p className={styles.location}>📍 {property.location}</p>
                  <h2>{property.title}</h2>
                  <h3 className={styles.price}>{formatPrice(property.price)}</h3>
                  <div className={styles.propertyDetails}>
                    <span>🛏 {property.bedrooms} Beds</span>
                    <span>🚿 {property.bathrooms} Baths</span>
                    <span>📐 {property.area} Sq.ft</span>
                  </div>
                  <button className={styles.viewButton}>View Details →</button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </main>
  );
}