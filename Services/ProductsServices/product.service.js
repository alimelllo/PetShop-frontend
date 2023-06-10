import BaseUrl from "../BaseUrl.ts";

class ProductServices {
  getAllProducts( searchText , productGroup) {
    return BaseUrl.get(`/getAllProducts/${searchText ? searchText : "null"}${productGroup ? `/${productGroup}` :  ""}`);
  }
  getAllProductGroups(){
    return BaseUrl.get("/getAllProductGroups" );
  }
}

export default new ProductServices();