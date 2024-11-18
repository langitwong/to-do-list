let input = document.getElementById('input_field');
let button = document.getElementById('add_btn');
let todoContainer = document.getElementById('list');

button.addEventListener('click', function(){
	let paragraph = document.createElement('p');
	paragraph.classList.add('paragraph-styling');
	paragraph.innerText = input.value;
	todoContainer.appendChild(paragraph);
	input.value = "";
	paragraph.addEventListener('click', function(){
		paragraph.style.textDecoration = "line-through";
	});
	paragraph.addEventListener('dblclick', function(){
		paragraph.remove();
	});
});
