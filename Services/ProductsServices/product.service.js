import BaseUrl from "../BaseUrl.ts";

class ProductServices {
  getAllProducts( searchText , productGroup) {
    return BaseUrl.get(`/getAllProducts/${searchText}${productGroup ? `/${productGroup}` : null}`);
  }
  getAllProductGroups(){
    return BaseUrl.get("/getAllProductGroups" );
  }
}

export default new ProductServices();