import axios from "axios";
import getFirstAlbumTitle from "./MockApi";

jest.mock("axios");

describe("axios tests with mocking", () => {
  test("should fetch posts", async () => {
    const fakeResp = [
      {
        userId: 1,
        id: 1,
        title: "quidem molestiae enim",
      },
    ];

    axios.get.mockRejectedValue("Network error: Something went wrong");
    axios.get.mockResolvedValue({ data: fakeResp });

    const result = await getFirstAlbumTitle();
    expect(result).toBe("quidem molestiae enim");
  });
});
