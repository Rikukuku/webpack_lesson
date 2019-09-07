import _ from 'lodash'
import './style.css'

const componet = () => {
	const element = document.createElement('div')
	const array = ['Hello', 'Webpack', 'good']
	element.innerHTML = _.join(array, ' ')
	return element
}

document.body.appendChild(componet())
document.body.classList.add('haikei')