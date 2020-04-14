const headerTag = document.querySelectorAll("h1");
const h2Tag = document.querySelectorAll("h2");

const runRandom = tag => {
	const originalContent = tag.innerHTML
	let newContent = ''

	let num = 0

	const writeWord = setInterval(() => {
		num++
		newContent = originalContent.substring(0, num)
		if (originalContent == tag.innerHTML) {
			clearInterval(writeWord)
		}
	}, 100)

	const generateRandomCharacters = setInterval(() => {
		tag.innerHTML = newContent

		for (i = newContent.length; i < originalContent.length; i++) {
			tag.innerHTML = tag.innerHTML + '.'
		}

		if (tag.innerHTML == originalContent) {
			clearInterval(generateRandomCharacters)
		}
	}, 50)
}

headerTag.forEach((tag) => {
  runRandom(tag)
});
