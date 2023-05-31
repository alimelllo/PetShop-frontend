import BaseUrl from "../BaseUrl.ts";

class UserService {
 
  create(data) {
    return BaseUrl.post("/register", data);
  }
  
  login(data) {
    return BaseUrl.post("/login", data);
  }
 

}

export default new UserService();