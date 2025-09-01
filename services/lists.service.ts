import { User } from "@/models/list.model";

const FETCH_URL = "https://6172cfe5110a740017222e2b.mockapi.io/elements";

export async function getUsersList(): Promise<Array<User>> {
  const response = await fetch(`${FETCH_URL}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }

  return response.json();
}
