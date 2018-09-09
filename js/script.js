document.addEventListener('DOMContentLoaded', function() {

	var contactLink = document.querySelector(".contacts-button");
	var contactPopup = document.querySelector(".modal-contacts");

	if (contactPopup) {
		var contactClose = contactPopup.querySelector(".modal-close");

		var contactForm = contactPopup.querySelector(".contacts-form");
		var contactName = contactPopup.querySelector("[name=name]");
		var contactEmail = contactPopup.querySelector("[name=email]");
		var contactLetter = contactPopup.querySelector("[name=text]");
		var isStorageSupport = true;
		var storageName = "";
		var storageEmail = "";

		try {
			storageName = localStorage.getItem("name");
			storageEmail = localStorage.getItem("email");
		} catch (err) {
			isStorageSupport = false;
		}

		contactLink.addEventListener("click", function (evt) {
			evt.preventDefault();
			contactPopup.classList.add("modal-show");
			if (storageName && !storageEmail) {
				contactName.value = storageName;
				contactEmail.focus();
			} else if (storageName && storageEmail) {
				contactName.value = storageName;
				contactEmail.value = storageEmail;
				contactLetter.focus();
			} else {
				contactName.focus();
			}
		});

		//Закрытие модального окна
		contactClose.addEventListener("click", function (evt) {
			evt.preventDefault();
			contactPopup.classList.remove("modal-show");
			contactPopup.classList.remove("modal-error");
		});

		//Проверка заполнения полей перед отправкой формы
		contactForm.addEventListener("submit", function (evt) {
			if (!contactName.value || !contactEmail.value || !contactLetter.value) {
				evt.preventDefault();
				contactPopup.classList.remove("modal-error");
				contactPopup.offsetWidth = contactPopup.offsetWidth;
				contactPopup.classList.add("modal-error");
			} else {
				if (isStorageSupport) {
					localStorage.setItem("name", contactName.value);
					localStorage.setItem("email", contactEmail.value);
				}
			}
		});

		//Метод закрытия модального окна при нажатии клавиши ESC
		window.addEventListener("keydown", function (evt) {
			if (evt.keyCode === 27) {
				evt.preventDefault();
				if (contactPopup.classList.contains("modal-show")) {
					contactPopup.classList.remove("modal-show");
					contactPopup.classList.remove("modal-error");
				}
			}
		});
	}


	var mapLink = document.querySelector(".contacts-button-map");
	var mapPopup = document.querySelector(".modal-map");

	if (mapPopup) {
		var mapClose = mapPopup.querySelector(".modal-close");

		mapLink.addEventListener("click", function (evt) {
			evt.preventDefault();
			mapPopup.classList.add("modal-show");
		});

		//Закрытие модального окна
		mapClose.addEventListener("click", function (evt) {
			evt.preventDefault();
			mapPopup.classList.remove("modal-show");
		});

		//Метод закрытия модального окна при нажатии клавиши ESC
		window.addEventListener("keydown", function (evt) {
			if (evt.keyCode === 27) {
				evt.preventDefault();
				if (mapPopup.classList.contains("modal-show")) {
					mapPopup.classList.remove("modal-show");
				}
			}
		});
	}


	var orderLink = document.querySelectorAll(".basket-button");
	var orderPopup = document.querySelector(".modal-order");
	var basketPopup = document.querySelector(".shop-basket");
	var basketCount = document.querySelector(".basket-count");

	if (orderPopup) {
		var orderClose = orderPopup.querySelector(".modal-close");

		for (var i = 0; i < orderLink.length; i++) {
			orderLink[i].addEventListener("click", function (evt) {
				evt.preventDefault();
				orderPopup.classList.add("modal-show");

				//При добавлении товара в корзину, добавляем класс для стилизации
				basketPopup.classList.add("basket-active");

				//При нажатии на кнопке "Купить", добовляем товар в корзину
				basketCount.innerHTML = Number(basketCount.innerHTML) + 1;
			});
		}

		//Закрытие модального окна
		orderClose.addEventListener("click", function (evt) {
			evt.preventDefault();
			orderPopup.classList.remove("modal-show");
		});

		//Метод закрытия модального окна при нажатии клавиши ESC
		window.addEventListener("keydown", function (evt) {
			if (evt.keyCode === 27) {
				evt.preventDefault();
				if (orderPopup.classList.contains("modal-show")) {
					orderPopup.classList.remove("modal-show");
				}
			}
		});
	}


	//Оживление слайдера
	var slides = document.querySelectorAll('.sliders-list .slider-item');
	var next = document.getElementById('next');
	var previous = document.getElementById('previous');
	var currentSlide = 0;

	if (next || previous) {

		function nextSlide() {
			goToSlide(currentSlide+1);
			ShowSlides(currentSlide);
		}

		function previousSlide() {
			goToSlide(currentSlide-1);
			ShowSlides(currentSlide);
		}

		function goToSlide(n) {
			slides[currentSlide].className = 'slider-item';
			currentSlide = (n+slides.length)%slides.length;
			slides[currentSlide].className = 'slider-item slide-showing';
		}

		next.onclick = function() {
			nextSlide();
		};

		previous.onclick = function() {
			previousSlide();
		};

		var dots = document.querySelectorAll('.dot-button');

		for(let i = 0; i < dots.length; i++) {
			dots[i].addEventListener('click', function(evt) {
				evt.preventDefault();
				ShowSlides(i);
				goToSlide(i);
			});
		}

		function ShowSlides(n) {
			for (let i = 0; i < dots.length; i++) {
				dots[i].classList.remove('active-dot');
			}
			dots[n].classList.add('active-dot');
		};
	}
});