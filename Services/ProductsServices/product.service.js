import BaseUrl from "../BaseUrl.ts";

class ProductServices {
  getAllProducts() {
    return BaseUrl.get("/getAllProducts");
  }
}

export default new ProductServices();