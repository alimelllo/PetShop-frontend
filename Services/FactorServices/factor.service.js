import BaseUrl from "../BaseUrl.ts";

class FactorServices {
  Createfactor( data ) {
    return BaseUrl.post(`/Createfactor` , data);
  }
  Payment( data ) {
    return BaseUrl.post(`/Payment` , data);
  }
  getAllFactorIds() {
    return BaseUrl.get(`/getAllFactorIds`);
  }
  GetFactorById ( factorId ){
    return BaseUrl.get(`/getFactorById/${factorId}`)
  }
}

export default new FactorServices();