import _ from 'lodash'

const componet = () => {
	const element = document.createElement('div')
	const array = ['Hello', 'Webpack', 'これはよくないで', 'そんなことないよ']
	element.innerHTML = _.join(array, ' ')
	return element
}

document.body.appendChild(componet())