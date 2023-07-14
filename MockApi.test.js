const getFirstAlbumTitle = require("./MockApi");
const axios = require("axios");

jest.mock("axios");

it("returns the title of the first album", async () => {
  axios.get.mockResolvedValue({
    data: [
      {
        userId: 1,
        id: 1,
        title: "quidem molestiae enim",
      },
      {
        userId: 1,
        id: 2,
        title: "Album: The Sequel",
      },
      {
        userId: 1,
        id: 3,
        title: "omnis laborum odio"
      },
    ],
  });

  const title = await getFirstAlbumTitle();
  console.log(title,"......>>>>>>>>")
  expect(title).toEqual("Album: The Sequel");
});