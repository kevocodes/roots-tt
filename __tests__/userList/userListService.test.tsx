import { getUsersList } from "@/services/lists.service";
import type { User } from "@/models/list.model";

describe("getUsersList (service)", () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });
  
  it("calls the API and returns parsed users", async () => {
    const users: User[] = [
      {
        id: "1",
        name: "Alice Johnson",
        avatar: "https://ex/a.jpg",
        createdAt: "2025-01-15T00:00:00.000Z",
      },
      {
        id: "2",
        name: "Bob Martin",
        avatar: "https://ex/b.jpg",
        createdAt: "2024-12-01T00:00:00.000Z",
      },
    ];

    // Mock the fetch response
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => users,
    });

    // Call the service
    const result = await getUsersList();

    // fetch should be called with the correct URL and options
    expect(fetch).toHaveBeenCalledWith(
      "https://6172cfe5110a740017222e2b.mockapi.io/elements",
      { cache: "no-store" }
    );

    // The response should be parsed correctly
    expect(result).toEqual(users);
  });
  
  it("throws when response is not ok", async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({ ok: false, status: 500 });
    await expect(getUsersList()).rejects.toThrow("Failed to fetch users");
  });
});
