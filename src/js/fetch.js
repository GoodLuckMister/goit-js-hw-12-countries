export default class CountryApiService {
  constructor() {}

  fetchArticles(t) {
    return fetch(`https://restcountries.eu/rest/v2/name/${t}`).then(
      response => {
        return response.json();
      },
    );
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    return (this.searchQuery = newQuery);
  }
}
