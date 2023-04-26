import BaseUrl from "../BaseUrl.ts";

class UserService {
  getAllUsers() {
    return BaseUrl.get("/users");
  }

  create(data) {
    return BaseUrl.post("/register", data);
  }
  
  login(data) {
    return BaseUrl.post("/login", data);
  }
  addFriend(data) {
    return BaseUrl.post("/addFriend", data);
  }
  removeFriend(data) {
    return BaseUrl.post("/removeFriend", data);
  }
  currentUserInfo(data) {
    return BaseUrl.post("/currentUserInfo", data);
  }

  updateProfileChanges(data){
    return BaseUrl.post("updateProfileChanges" , data);
  }
}

export default new UserService();