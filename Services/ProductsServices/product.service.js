import BaseUrl from "../BaseUrl.ts";

class ProductServices {
  getAllProducts( searchText ) {
    return BaseUrl.get(`/getAllProducts/${searchText}`);
  }
}

export default new ProductServices();