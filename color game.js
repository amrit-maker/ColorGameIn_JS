// GET ALL THE REFRENCE
const colorDisplay = document.querySelector('#colorDisplay');
const container = document.querySelectorAll('.container');
const circles = document.querySelectorAll('.circles')
const message = document.querySelector('#message')
const heading = document.querySelector('.heading');
const reset = document.querySelector('#reset');
const easyBtn = document.querySelector('#easyBtn');
const hardBtn = document.querySelector('#hardBtn');

let Total_circles = 6
let colors = give_rand_color(Total_circles)
let pickedColor = pick_color()
let random_color = []
colorDisplay.innerText = pickedColor

reset.addEventListener('click', () => {
	heading.style.background = 'steelblue'
	message.innerText = ''
	colors = give_rand_color(6)
	pickedColor = pick_color()
	colorDisplay.innerText = pickedColor
	for(let i = 0; i < circles.length; i++){
		circles[i].style.background = colors[i]
	}	
})

easyBtn.addEventListener('click', () => {
	heading.style.background = 'steelblue'
	message.innerText = ''
	hardBtn.classList.remove('selected')
	easyBtn.classList.add('selected')
	Total_circles = 3
	colors = give_rand_color(Total_circles)
	pickedColor = pick_color()
	colorDisplay.innerText = pickedColor
	for(let i = 0; i < circles.length; i++){
		if(colors[i]){
			circles[i].style.background = colors[i]
		}else{
			circles[i].style.display = 'none'
		}
	}	
})

hardBtn.addEventListener('click', () => {
	message.innerText = ''
	heading.style.background = 'steelblue'
	easyBtn.classList.remove('selected')
	hardBtn.classList.add('selected')
	Total_circles = 3
	colors = give_rand_color(Total_circles)
	pickedColor = pick_color()
	colorDisplay.innerText = pickedColor
	for(let i = 0; i < circles.length; i++){
			circles[i].style.background = colors[i]
			circles[i].style.display = 'block'
	}	
})

function check_color(){
	
}
function check_color(){
	for(let i = 0; i < circles.length; i++){
		circles[i].style.background = colors[i]
		circles[i].addEventListener('click', function() {
			correct_color = this.style.background
			console.log(pickedColor,correct_color)
			if(this.style.background === pickedColor){
				message.innerText = 'correct'
				change_color(correct_color)
				heading.style.background = correct_color
			}else{
				message.innerText = 'Try again'
				this.style.background = '#232323'
			}
		})
	}
}

check_color()
function change_color(color){
	for(let i = 0; i < circles.length; i++){
		circles[i].style.background = color
	}

}
function pick_color(){
	let random_color = Math.floor(Math.random() * colors.length)
	return colors[random_color]
}

function give_rand_color(num){
	let arr = []
	for(let i = 0; i < num; i++){
		arr.push(gen_rand_color())
	}
	return arr
}

function gen_rand_color(){
	let R = Math.floor(Math.random() * 256)
	let G = Math.floor(Math.random() * 256)
	let B = Math.floor(Math.random() * 256)
	rand_color = `rgb(${R}, ${G}, ${B})`
	return rand_color
}

function gen_rand_color(){
	let R = Math.floor(Math.radnom() * 256)
	let G = Math.floor(Math.random() * 256)
	let B = Math.floor(Math.random() * 256)
}

