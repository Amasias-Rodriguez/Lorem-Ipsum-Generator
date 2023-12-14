const getLoremIpsum = numberOfParagraphs => {
    fetch(`https://baconipsum.com/api/?type=all-meat&paras=${numberOfParagraphs}`)
        .then(response => response.json())
        .then(loremIpsumTextArray => {
            updateResult(loremIpsumTextArray);
        })
}

const updateResult = textArray => {
    const resultElement = document.getElementById('result')
    resultElement.innerHTML = '';
    resultElement.innerHTML = textArray
        .map(paragraph => `<p>${paragraph}</p>`)
        .join('');
    resultElement.classList.add('show');
};



const getLoremIpsumBtnElement = document.getElementById('getLoremIpsum')
const paragraphsCountElement = document.getElementById('paragraphsCount');

getLoremIpsumBtnElement.addEventListener('click', () => {
    getLoremIpsum(parseInt(paragraphsCountElement.value))
    paragraphsCountElement.value = '';
})
