import BaseUrl from "../BaseUrl.ts";

class ProductServices {
  getAllProducts( searchText , productGroup , pageNumber) {
    return BaseUrl.get(`/getAllProducts/${searchText ? searchText : "null"}${productGroup ? `/${productGroup}` :  "/null"}${pageNumber ? `/${pageNumber}` :  "/1"}`);
  }
  getAllProductGroups(){
    return BaseUrl.get("/getAllProductGroups" );
  }
}

export default new ProductServices();