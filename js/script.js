document.addEventListener('DOMContentLoaded', function() {

	var contactLink = document.querySelector(".contacts-button");
	var contactPopup = document.querySelector(".modal-contacts");
	var contactClose = contactPopup.querySelector(".modal-close");

	var contactForm = contactPopup.querySelector(".contacts-form");
	var contactName = contactPopup.querySelector("[name=name]");
	var contactEmail = contactPopup.querySelector("[name=email]");
	var isStorageSupport = true;
	var storageName = "";

	try {
		storageName = localStorage.getItem("name");
	} catch (err) {
		isStorageSupport = false;
	}

	contactLink.addEventListener("click", function (evt) {
		evt.preventDefault();
		contactPopup.classList.add("modal-show");
		if (storageName) {
			contactName.value = storageName;
			contactEmail.focus();
		} else {
			contactName.focus();
		}
	});

	contactClose.addEventListener("click", function (evt) {
		evt.preventDefault();
		contactPopup.classList.remove("modal-show");
		contactPopup.classList.remove("modal-error");
	});

	contactForm.addEventListener("submit", function (evt) {
		if (!contactName.value || !contactEmail.value) {
			evt.preventDefault();
			contactPopup.classList.remove("modal-error");
			contactPopup.offsetWidth = contactPopup.offsetWidth;
			contactPopup.classList.add("modal-error");
		} else {
			if (isStorageSupport) {
				localStorage.setItem("name", contactName.value);
			}
		}
	});

	window.addEventListener("keydown", function (evt) {
		if (evt.keyCode === 27) {
			evt.preventDefault();
			if (contactPopup.classList.contains("modal-show")) {
				contactPopup.classList.remove("modal-show");
				contactPopup.classList.remove("modal-error");
			}
		}
	});


	var mapLink = document.querySelector(".contacts-button-map");
	var mapPopup = document.querySelector(".modal-map");
	var mapClose = mapPopup.querySelector(".modal-close");

	mapLink.addEventListener("click", function (evt) {
		evt.preventDefault();
		mapPopup.classList.add("modal-show");
	});

	mapClose.addEventListener("click", function (evt) {
		evt.preventDefault();
		mapPopup.classList.remove("modal-show");
	});

	window.addEventListener("keydown", function (evt) {
		if (evt.keyCode === 27) {
			evt.preventDefault();
			if (mapPopup.classList.contains("modal-show")) {
				mapPopup.classList.remove("modal-show");
			}
		}
	});


	var orderLink = document.querySelector(".user-orders");
	var orderPopup = document.querySelector(".modal-order");
	var orderClose = orderPopup.querySelector(".modal-close");

	orderLink.addEventListener("click", function (evt) {
		evt.preventDefault();
		orderPopup.classList.add("modal-show");
	});

	orderClose.addEventListener("click", function (evt) {
		evt.preventDefault();
		orderPopup.classList.remove("modal-show");
	});

	window.addEventListener("keydown", function (evt) {
		if (evt.keyCode === 27) {
			evt.preventDefault();
			if (orderPopup.classList.contains("modal-show")) {
				orderPopup.classList.remove("modal-show");
			}
		}
	});
});