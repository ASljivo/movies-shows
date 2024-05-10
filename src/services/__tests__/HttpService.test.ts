import axios from "axios";
import HttpService from "services/HttpService";

jest.mock("axios", () => {
  return {
    create: jest.fn(() => ({
      get: jest.fn(),
      interceptors: {
        request: { use: jest.fn(), eject: jest.fn() },
        response: { use: jest.fn(), eject: jest.fn() },
      },
    })),
  };
});

describe("Test HttpService", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("get", async () => {
    axios.get = jest.fn().mockResolvedValue({
      data: {},
    });
    HttpService.category = "movie";
    HttpService.get("test", 1);
    const getAll = jest.spyOn(HttpService, "get").mockImplementation();

    expect(getAll).toHaveBeenCalledTimes(0);
  });

  it("getTopRated", async () => {
    axios.get = jest.fn().mockResolvedValue({
      data: {},
    });
    HttpService.category = "movie";
    axios.get = jest.fn().mockResolvedValue({
      data: {},
    });
    HttpService.getTopRated();
    const getTopRated = jest
      .spyOn(HttpService, "getTopRated")
      .mockImplementation();

    expect(getTopRated).toHaveBeenCalledTimes(0);
  });

  it("getById", async () => {
    HttpService.category = "movie";
    HttpService.getById("1");
    const getById = jest.spyOn(HttpService, "getById").mockImplementation();
    axios.get = jest.fn().mockResolvedValue({
      data: {},
    });
    expect(getById).toHaveBeenCalledTimes(0);
  });
});
