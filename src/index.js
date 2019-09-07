import _ from 'lodash'
import './style.css'
import logo from './logo.png'

const componet = () => {
	const element = document.createElement('div')
	const array = ['Hello', 'Webpack', 'good']
	element.innerHTML = _.join(array, ' ')
	return element
}

document.body.appendChild(componet())
document.body.classList.add('haikei')

const image = new Image()
console.log(logo)
image.src = logo
document.body.appendChild(image)
