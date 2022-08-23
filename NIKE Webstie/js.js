/*-------------------------- navbar --------------------------*/

document.querySelector('#mune').onclick = () => {
document.querySelector('#mune').classList.toggle('fa-times');
document.querySelector('.links').classList.toggle('active');}

document.querySelectorAll('.links a').forEach(box => {
	box.onclick = () => {
		document.querySelector('#mune').classList.toggle('fa-times');
        document.querySelector('.links').classList.toggle('active');}})

/*-------------------------- landing --------------------------*/

document.querySelector('.landing .collect').onclick = () => {
	document.querySelector('.cll').style.display = 'block';}
	
document.querySelector('.cll span').onclick = () => {
	document.querySelector('.cll').style.display = 'none';}

let slides = document.querySelector('.items').children;
let nexts = document.querySelector('.rights');
let prevs = document.querySelector('.lefts');
let totals = slides.length;
let index = 0;

nexts.onclick = function(){next("next");}
prevs.onclick = function(){next("prev");}

function next(direction){
	
	if(direction == "next"){
		index++;
		if(index == totals){index = 0;}}
	
	else{
		if(index == 0){index = totals - 1;}
		else{index--;}}	
	
	for(let i = 0; i < slides.length; i++){
		slides[i].classList.remove('active');}
	
	slides[index].classList.add('active');}

/*-------------------------- men --------------------------*/

let preveiwContainer = document.querySelector('.products-preview');
let previewBox = preveiwContainer.querySelectorAll('.preview');

document.querySelectorAll('.men .boxs .box').forEach(product =>{
  product.onclick = () =>{
    preveiwContainer.style.display = 'flex';
    let name = product.getAttribute('data-name');
	  
    previewBox.forEach(preview =>{
      let target = preview.getAttribute('data-target');
      if(name === target){preview.classList.add('active');}})
}})

previewBox.forEach(close =>{
  close.querySelector('.fa-times').onclick = () =>{
    close.classList.remove('active');
    preveiwContainer.style.display = 'none';}});

/*-------------------------- WOMEN --------------------------*/

let preveiws = document.querySelector('.previews');
let viewBox = preveiws.querySelectorAll('.preview');

document.querySelectorAll('.wo .grop .team').forEach(product =>{
  product.onclick = () =>{
    preveiws.style.display = 'flex';
    let dname = product.getAttribute('data-name');
	  
    viewBox.forEach(preview =>{
      let dtarget = preview.getAttribute('data-target');
      if(dname === dtarget){preview.classList.add('active');}})
}})

viewBox.forEach(close =>{
  close.querySelector('.fa-times').onclick = () =>{
    close.classList.remove('active');
    preveiws.style.display = 'none';}});

/*-------------------------- kids --------------------------*/

document.querySelectorAll('.kids .boxs .box img').forEach(box => {
	box.onclick = () => {
		document.querySelector('.kids .show').style.display = 'block';
		document.querySelector('.kids .show img').src = box.getAttribute('src')}})
	
document.querySelector('.kids .show span').onclick = () => {
	document.querySelector('.kids .show').style.display = 'none';}

/*-------------------------- conect --------------------------*/

document.querySelector('.contact .form .btn').onclick = () => {
		document.querySelector('.contact .show').style.display = 'block';}
	
document.querySelector('.contact .show .pop button').onclick = () => {
	document.querySelector('.contact .show').style.display = 'none';}
