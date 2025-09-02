import { act, render, screen } from "@testing-library/react";

jest.mock("@/services/lists.service", () => ({ getUsersList: jest.fn() }));
import ListPage from "@/app/list/page";
import { getUsersList } from "@/services/lists.service";

describe("ListPage (server)", () => {
  // Reset the mock before each test
  beforeEach(() => (getUsersList as jest.Mock).mockReset());

  it("renders heading and calls the service once", async () => {
    (getUsersList as jest.Mock).mockReturnValueOnce(new Promise(() => {}));

    await act(async () => {
      render(await ListPage());
    });

    // Heading should be rendered
    expect(
      screen.getByRole("heading", { name: /roots\s*list/i })
    ).toBeInTheDocument();

    // Service should be called 1 time
    expect(getUsersList).toHaveBeenCalledTimes(1);
  });
});
