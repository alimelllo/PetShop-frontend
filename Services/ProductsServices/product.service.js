import BaseUrl from "../BaseUrl.ts";

class ProductServices {
  getAllProducts( searchText , productGroup , pageNumber) {
    return BaseUrl.get(`/getAllProducts/${searchText ? searchText : "null"}${productGroup ? `/${productGroup}` :  "/null"}${pageNumber ? `/${pageNumber}` :  "/1"}`);
  }
  getAllProductGroups(){
    return BaseUrl.get("/getAllProductGroups" );
  }
  getAllProductIds(){
    return BaseUrl.get("/getAllProductIds");
  }
  GetAllProductImages( productId ){
    return BaseUrl.get(`/GetAllProductImages/${productId}`)
  }
  getProductById ( productId ){
    return BaseUrl.get(`/getProductById/${productId}`)
  }
}

export default new ProductServices();