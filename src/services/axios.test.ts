import mockAxios from "jest-mock-axios";
import { BASE_URL, fetchList } from "./axios";

describe("axios fetch lists", () => {
    afterEach(() => {
        mockAxios.reset();
    });
    describe("when API call is successful", () => {
        it("should return list", async () => {
            const lists = [
                {
                    userId: 1,
                    id: 1,
                    title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
                    body: 'quia et suscipit\n' +
                        'suscipit recusandae consequuntur expedita et cum\n' +
                        'reprehenderit molestiae ut ut quas totam\n' +
                        'nostrum rerum est autem sunt rem eveniet architecto'
                }
            ]

            mockAxios.get.mockResolvedValueOnce(lists);
            const result = await fetchList();

            expect(mockAxios.get).toHaveBeenCalledWith(`${BASE_URL}posts?_limit=1`);
            expect(result).toEqual(lists);
        })
    })
    describe("when API call fails", () => {
        it("should return empty users list", async () => {
          // given
          const message = "Network Error";
          mockAxios.get.mockRejectedValueOnce(new Error(message));
    
          // when
          const result = await fetchList();
    
          // then
          expect(mockAxios.get).toHaveBeenCalledWith(`${BASE_URL}posts?_limit=1`);
          expect(result).toEqual([]);
        });
      });

})