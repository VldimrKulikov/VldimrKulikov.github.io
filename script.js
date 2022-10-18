function multiply(){
	var num1,num2,result;
	num1=document.getElementById('prices').value;
	num1=parseInt(num1);
	num2=document.getElementById('kolv').value;
	num2=parseInt(num2);
	result=num1*num2;
	if (isNaN(result)){
		result="Ошибка";
	document.getElementById('out').innerHTML=result;}
	document.getElementById('out').innerHTML=result;
}
window.addEventListener('DOMContentLoaded', function (event) {
	console.log("DOM fully loaded and parsed");
	let b = document.getElementById("buttoprices");
	b.addEventListener('click', click1);
})

function updatePrice() {
	let s = document.getElementsByName("Types");
	let select = s[0];
	let price = 0;
	let prices = getPrices();
	let priceIndex = parseInt(select.value) - 1;
	if (priceIndex >= 0) {
			price = prices.Typess[priceIndex];
	}
	let radioDiv = document.getElementById("radios");
	if (select.value == "2") {
			radioDiv.style.display = "block";
	} else {
			radioDiv.style.display = "none";
	}
	let radios = document.getElementsByName("Radiobut");
	radios.forEach(function (radio) {
			if (radio.checked) {
					let optionPrice = prices.Radiobut[radio.value];
					if (optionPrice !== undefined) {
							price *= optionPrice;
					}
			}
	});
	let checkDiv = document.getElementById("checkboxes");
	if (select.value == "3") {
			checkDiv.style.display = "block";
	} else {
			checkDiv.style.display = "none";
	}
	let checkboxes = document.querySelectorAll("#checkboxes input");
	checkboxes.forEach(function (checkbox) {
			if (checkbox.checked) {
					let propPrice = prices.prodProperties[checkbox.name];
					if (propPrice !== undefined) {
							price += propPrice;
					}
			}
	});
	let lastprice = document.getElementById("lastprice");
	let k = document.getElementById("input").value;
	if (k.match(/^[0-9]+$/) != null) {
			lastprice.innerHTML = price * k + " руб";
	} else if (k == "0") {
			lastprice.innerHTML = 0 + " руб";
	} else {
			lastprice.innerHTML = "Ошибка";
			alert("Ошибка");
	}
}
function getPrices() {
	return {
			Typess: [50000, 100000, 20000],
			Radiobut: {
					Radiobut_optioprices: 1,
					Radiobut_optiokolv: 2,
			},
			prodProperties: {
					komp1: 300,
					komp2: 5000,
					komp3: 3000,
			}
	};
}
window.addEventListener("DOMContentLoaded", function (event) {
	let radioDiv = document.getElementById("radios");
	radioDiv.style.display = "none";
	let s = document.getElementsByName("Types");
	let select = s[0];
	select.addEventListener("change", function (event) {
			let target = event.target;
			console.log(target.value);
			updatePrice();
	});
	let radios = document.getElementsByName("Radiobut");
	radios.forEach(function (radio) {
			radio.addEventListener("change", function (event) {
					let r = event.target;
					console.log(r.value);
					updatePrice();
			});
	});
	let checkboxes = document.querySelectorAll("#checkboxes input");
	checkboxes.forEach(function (checkbox) {
			checkbox.addEventListener("change", function (event) {
					let c = event.target;
					console.log(c.name);
					console.log(c.value);
					updatePrice();
			});
	});
	let inputs = document.getElementById("input");
	input.addEventListener("change", function (event) 
{
			let r = event.target;
			console.log(r.value);
			updatePrice();
	});
	updatePrice();
});
