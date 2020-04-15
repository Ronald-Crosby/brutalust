const headerTag = document.querySelectorAll("h1");
const h2Tag = document.querySelectorAll("h2");
const charactersList = `1234567890!@£$%^&*()_+[]{};./<>?:"|"§±€#`.split('')

const runRandom = tag => {
	const originalContent = tag.dataset.original
	let newContent = ''

	let num = 0

	const writeWord = setInterval(() => {
		num++
		newContent = originalContent.substring(0, num)
		if (originalContent == tag.innerHTML) {
			clearInterval(writeWord)
			clearInterval(generateRandomCharacters)
		}
	}, 100)

	const generateRandomCharacters = setInterval(() => {
		tag.innerHTML = newContent

		for (i = newContent.length; i < originalContent.length; i++) {
			const randomNum = Math.floor(Math.random() * charactersList.length)
			const randomCharacter = charactersList[randomNum]
			tag.innerHTML = tag.innerHTML + randomCharacter
		}
	}, 50)
}

const observer = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		console.log(entry)
		if (entry.intersectionRatio > 0.5) {
			runRandom(entry.target)
		}
	})
}, {
	threshold: [0, 0.5, 1]
})

headerTag.forEach((tag) => {
	tag.dataset.original = tag.innerHTML
	observer.observe(tag)
});
