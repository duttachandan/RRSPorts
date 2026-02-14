const API_URL = import.meta.env.VITE_API_URL;

export const getSports = async () => {
  const response = await fetch(`${API_URL}/api/admin/sports`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText || "Failed to fetch sports");
  }

  return await response.json();
};


export const getMatches = async (sport = null, status = null) => {
  let url = `${API_URL}/api/admin/matches?page=0&size=50`;

  if (sport) url += `&sport=${sport}`;
  if (status) url += `&status=${status}`;

  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText || "Failed to fetch matches");
  }

  return await response.json();
};
