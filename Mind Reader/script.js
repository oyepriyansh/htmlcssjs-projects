const step1 = document.getElementById('step1');
const step2 = document.getElementById('step2');
const step3 = document.getElementById('step3');

const numberInput = document.getElementById('number');

const resultElement = document.getElementById('result');

function showLoading() {
	step1.classList.add('hide');
	step2.classList.remove('hide');
	setTimeout(showResult, 6000);
}

function showResult() {
	step2.classList.add('hide');
	step3.classList.remove('hide');
	resultElement.textContent = numberInput.value;
}
