let heading = document.querySelector('h1');
let clickCount = 0;
heading.onclick = function() {
	clickCount += 1;
	heading.textContent = 'Heading'+clickCount.toString();
}
