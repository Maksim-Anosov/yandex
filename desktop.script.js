const products = document.querySelectorAll(".product");
const cartList = document.querySelector(".cart");
const dropzone = document.querySelector(".cart-img");
const buttonPay = document.querySelector(".pay");

products.forEach((product) => {
	product.addEventListener("dragstart", (e) => {
		e.dataTransfer.setData("text/plain", product.firstElementChild.alt);
	});
});

dropzone.addEventListener("dragover", (e) => {
	e.preventDefault();
});

dropzone.addEventListener("drop", (e) => {
	const data = e.dataTransfer.getData("text/plain");
	const elem = document.querySelector(`.${data}`).parentNode;
	const inCart = cartList.children.length;

	elem.style = `position: absolute; left: ${
		inCart * 2.5
	}vh; bottom: 0; z-index: ${inCart}`;

	cartList.appendChild(elem);

	if (inCart + 1 >= 3) {
		buttonPay.style = "display: block";
	}
});

buttonPay.addEventListener("click", () => {
	window.location.href = "https://lavka.yandex.ru/";
});
