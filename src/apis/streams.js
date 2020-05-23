import axios from "axios";

export default axios.create({
  baseURL: "https://streams-test-api.herokuapp.com"
});
