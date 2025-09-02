import { act, render, screen } from "@testing-library/react";

jest.mock("@/services/lists.service", () => ({ getUsersList: jest.fn() }));
import ListPage from "@/app/list/page";
import { getUsersList } from "@/services/lists.service";

describe("ListPage (server)", () => {
  beforeEach(() => (getUsersList as jest.Mock).mockReset());

  it("renders heading and calls the service once", async () => {
    (getUsersList as jest.Mock).mockReturnValueOnce(new Promise(() => {}));

    await act(async () => {
      render(await ListPage());
    });

    expect(
      screen.getByRole("heading", { name: /roots\s*list/i })
    ).toBeInTheDocument();
    expect(getUsersList).toHaveBeenCalledTimes(1);
  });
});
