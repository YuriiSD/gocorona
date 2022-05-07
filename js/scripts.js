// Custom Scripts
// Custom scripts

// Мобильное меню бургер
function burgerMenu() {
	const burger = document.querySelector('.burger')
	const menu = document.querySelector('.menu__list')
	const body = document.querySelector('body')
	burger.addEventListener('click', () => {
		if (!menu.classList.contains('active')) {
			menu.classList.add('active')
			burger.classList.add('active-burger')
			body.classList.add('locked')
		} else {
			menu.classList.remove('active')
			burger.classList.remove('active-burger')
			body.classList.remove('locked')
		}
	})
	// Вот тут мы ставим брейкпоинт навбара
	window.addEventListener('resize', () => {
		if (window.innerWidth > 991.98) {
			menu.classList.remove('active')
			burger.classList.remove('active-burger')
			body.classList.remove('locked')
		}
	})
}
burgerMenu()

// Main Page Scripts
if (document.querySelector('.main__body')) {

	// Модальное окно
	function bindModal(trigger, modal, close) {
		trigger = document.querySelector(trigger),
			modal = document.querySelector(modal),
			close = document.querySelector(close)

		const iframe = document.querySelector(".youtube__iframe")
		trigger.addEventListener('click', e => {
			e.preventDefault()
			modal.style.display = 'flex'
			document.querySelector("body").style.overflow = "hidden"
			// iframe.src = "https://www.youtube.com/embed/CiKULopMtKk?autoplay=1"
			iframe.src = "https://www.youtube.com/embed/jlCFcieKZf8?autoplay=1"
		});
		close.addEventListener('click', () => {
			modal.style.display = 'none'
			document.querySelector("body").style.overflow = "visible"
			iframe.src = ""
		});
		modal.addEventListener('click', e => {
			if (e.target === modal) {
				modal.style.display = 'none'
				document.querySelector("body").style.overflow = "visible"
				iframe.src = ""
			}
		})
	}
	bindModal('.play__btn', '.modal__wrapper', '.modal__close')
	// AOS Animation
	AOS.init();
}

//  Num counter
function numCounter(selector, number, time, step) {
	const counter = document.querySelector(selector)

	let res = 0

	const allTime = Math.round(time / (number / step))

	let interval = setInterval(() => {
		res = res + step

		if (res === number) {
			clearInterval(interval)
		}
		counter.innerHTML = res
	}, allTime)
}

numCounter('#count', 78, 3000, 1)
numCounter('#med', 10000, 3600, 125)

