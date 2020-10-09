const brands = document.getElementsByClassName('brands')[0];
const brandsBtn = document.getElementsByClassName('brands__button')[0];

brandsBtn.addEventListener('click', function(e){
	brandsOnClick(brands, brandsBtn);
});

function brandsOnClick(brands, button){

	 const styles = brands.style;

	 if (styles.animationName === 'brands-open'){
	 	styles.animationName = 'brands-close';
	 	button.innerHTML = 'Ver todas la alianzas'
	 }else{
	 	styles.animationName = 'brands-open';
	 	button.innerHTML = 'Ver menos';
	 }
}