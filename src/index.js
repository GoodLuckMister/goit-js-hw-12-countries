import './styles.css';

fetch('https://restcountries.eu/rest/v2/name/ukraine')
  .then(response => response.json())
  .then(console.log);
