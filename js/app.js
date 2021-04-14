// Текущая дата календаря
const date = document.querySelector('.calendar').valueAsDate = new Date();

// Функция выводит текущую дату из календаря в строку Период
function formatDate(date) {
	let day = date.getDate();
	let month = date.getMonth();
	let year = date.getFullYear();
	return myDate = `${day}.${month + 1}.${year}`
}

//  Функция счетает Прогнозый период на выбранную дату
function calcToDay() {
	let toW_1 = 1100000;
	let toW_2 = 1250000;
	let toW_3 = 1300000;
	return sumToDay = Math.round((toW_1 + toW_2 + toW_3) / 3)
}

// Функция счетает потери по ТО и выводит все данные в таблицу
function calcTo() {
	let timeDown = document.querySelector('.downtime').value;
	const downTo = Math.round(calcToDay() / 12) * timeDown
	document.querySelector('.out-down-time').textContent = timeDown;
	document.querySelector('.sum-to').textContent = calcToDay();
	document.querySelector('.down-to').textContent = downTo;
	document.querySelector('.date').innerHTML = formatDate(new Date);
}

document.querySelector('.btn').addEventListener('click', calcTo);
