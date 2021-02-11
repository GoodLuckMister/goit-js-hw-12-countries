import './styles.css';
import countryCardTmp from './templates/country.hbs';
import debounce from 'lodash.debounce';

const refs = {
  cardContainer: document.querySelector('.js-card__container'),
  inputRef: document.querySelector('.js__input'),
};

refs.inputRef.addEventListener('input', onSearch);

function onSearch(e) {
  e.preventDefault();
  const inputText = refs.inputRef.value;

  fetchCountryByName(inputText)
    .then(renderCountryCard)
    .catch(error => console.log(error));
}

function fetchCountryByName(countryName) {
  return fetch(`https://restcountries.eu/rest/v2/name/${countryName}`).then(
    response => {
      return response.json();
    },
  );
}

function renderCountryCard(country) {
  const markup = countryCardTmp(country);
  refs.cardContainer.innerHTML = markup;
}
