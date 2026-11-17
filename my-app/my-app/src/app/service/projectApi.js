
import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

const getAuthHeaders = () => {
  if (typeof window === "undefined") {
    return {};
  }

  const token = window.localStorage.getItem("token");

  return token ? { Authorization: `Bearer ${token}` } : {};
};

export const getPopularProjects = async ({
  latitude = 12.97,
  longitude = 77.59,
  radius = 50000,
  page = 1,
  perPage = 10,
} = {}) => {
  try {
    if (!baseURL) {
      throw new Error("NEXT_PUBLIC_API_BASE_URL is missing");
    }

    const response = await axios.get(
      `${baseURL.replace(/\/+$/, "")}/api/projects/popular`,
      {
        params: {
          "query[latitude]": latitude,
          "query[longitude]": longitude,
          "query[radius]": radius,
          "pagination[page]": page,
          "pagination[perPage]": perPage,
        },
        headers: getAuthHeaders(),
      }
    );

    console.log("API RESPONSE:", response.data);

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("API STATUS:", error.response?.status);
      console.error("API ERROR DATA:", error.response?.data);
      console.error("API URL:", error.config?.url);
    } else {
      console.error("ERROR:", error);
    }

    throw error;
  }
};
