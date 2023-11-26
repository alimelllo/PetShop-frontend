import BaseUrl from "../BaseUrl.ts";

class FactorServices {
  Createfactor( data ) {
    return BaseUrl.post(`/Createfactor` , data);
  }
  Payment( data ) {
    return BaseUrl.post(`/Payment` , data);
  }
}

export default new FactorServices();