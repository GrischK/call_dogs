import { getDogs } from "./api";

export const fetchDogs = async (setDogs) => {
  try {
    const dogsData = await getDogs();
    setDogs(dogsData);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
