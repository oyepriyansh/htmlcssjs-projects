const from = document.querySelector('.search__form');
const input = document.querySelector('#search');
const clearBtn = document.querySelector('.cross__icon');

from.addEventListener('submit', (e) => {
	e.preventDefault();
	window.location = `https://www.google.com/search?q=${input.value}`;
});

clearBtn.addEventListener('click', () => (input.value = ''));
