import axios from "axios";

// The getRecipes method retrieves recipes from the server
// It accepts a "query" or term to search the recipe api for
export default {
  getRecipes: function(query) {
    return axios.get("/api/recipes", { params: { q: query } });
  },
  getBooks:function(){
    // return axios.get("https://www.googleapis.com/books/v1/volumes?q=title:"+query);
    return axios.get("/api/books/"); 
  },
  searchBooks:function(query){
    // return axios.get(`/api/search?q=${query}`)
    // return axios.get("/api/search?q=" +query);
    return axios.post("/search/"+query);
  }
};
