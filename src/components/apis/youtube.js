import axios from "axios";

const KEY = "AIzaSyDE2TdZrIAbV5GtZE6eNMA12ANUjr4vzYE";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: "5",
    key: KEY
  }
});
