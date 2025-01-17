const cartList = document.querySelector(".cart");
const dropzone = document.querySelector(".cart-img");
const buttonPay = document.querySelector(".pay");
const cart = document.querySelector(".cart-img");

let initialX = 0;
let initialY = 0;

document.addEventListener("pointerdown", (e) => {
	if (e.target.dataset.dnd) {
    const { target } = e;
		const { left, top } = target.getBoundingClientRect();
		const { x, y } = e;
		initialX = x - left;
		initialY = y - top;

		target.style.position = "absolute";
		target.style.left = `${left}px`;
		target.style.top = `${top}px`;
		target.classList.add("draggable");
	}
});

document.addEventListener("pointermove", (e) => {
	if (e.target.classList.contains("draggable")) {
		const x = e.pageX - initialX;
		const y = e.pageY - initialY;
		e.target.style.left = `${x}px`;
		e.target.style.top = `${y}px`;
	}
});

document.addEventListener("pointerup", (e) => {
	const { target } = e;

	if (target.classList.contains("draggable")) {
		const { left, top, right, bottom } = cart.getBoundingClientRect();
		const currentPositionX = Math.floor(
			Number(target.style.left.split("px")[0])
		);
		const currentPositionY = Math.floor(
			Number(target.style.top.split("px")[0])
		);

		if (
			currentPositionX >= left &&
			currentPositionX <= right &&
			currentPositionY >= top &&
			currentPositionY <= bottom
		) {
			const inCart = cartList.children.length;
			target.style = `position: absolute; left: ${
				inCart * 2
			}vh; bottom: 0; z-index: ${inCart}`;
			target.classList.remove("draggable");
			cartList.appendChild(target.parentNode);

			if (inCart + 1 >= 3) {
				buttonPay.style = "display: block";
			}
		} else {
			target.removeAttribute("style");
			target.classList.remove("draggable");
		}
	}
});

buttonPay.addEventListener("click", () => {
	window.location.href = "https://lavka.yandex.ru/";
});
