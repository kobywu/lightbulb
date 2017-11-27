// JavaScript is capitalized using "camel case": https://en.wikipedia.org/wiki/Camel_case

// If you want to change an element that is NOT the element just clicked on, you need to identify it by it's "id" (if it's a single element) or by it's "class" (if you're changing multiple elements):
// getElementById() = https://www.w3schools.com/jsref/met_document_getelementbyid.asp
// getElementsByClassName() = https://www.w3schools.com/jsref/met_element_getelementsbyclassname.asp

// Once you've identified the elements you want to change, you can use the "classList" (to change classes) or "innerHTML" (to change the text):
// classList = https://www.w3schools.com/jsref/prop_element_classlist.asp
// innerHTML = https://www.w3schools.com/jsref/prop_html_innerhtml.asp

function on(elem){
	elem.classList.toggle("on_white");
	document.getElementById("white-background").classList.toggle("white");
}

function uv(elem){
	elem.classList.toggle("on_purple");
	document.getElementById("purple-background").classList.toggle("purple");
}

function blue(elem){
	document.getElementById("blue-background").classList.toggle("blue");
}
