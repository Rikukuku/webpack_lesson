const componet = () => {
	const element = document.createElement('div')
	const array = ['Hello', 'Webpack', 'これはよくないで']
	element.innerHTML = _.join(array, ' ')
	return element
}

document.body.appendChild(componet())