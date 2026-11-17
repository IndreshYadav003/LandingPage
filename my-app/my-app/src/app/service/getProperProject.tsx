import api from "../lib/axios";

const getAuthHeaders = () => {
  if (typeof window === "undefined") {
    return {};
  }

  const token = window.localStorage.getItem("token");

  return token ? { Authorization: `Bearer ${token}` } : {};
};

export const getPopularProjects = async () => {
  try {
    const response = await api.get("/api/projects/popular", {
      params: {
        "query[latitude]": 12.97,
        "query[longitude]": 77.59,
        "query[radius]": 50000,
        "pagination[page]": 1,
        "pagination[perPage]": 10,
      },
      headers: getAuthHeaders(),
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};

api.interceptors.response.use(
  (response) => {
    console.log("Response Recived");
    return response.data;
  },
  (error) => {
    console.log("Api Error", error);
    return Promise.reject(error);
  }
);