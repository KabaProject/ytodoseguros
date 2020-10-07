const tabs = document.getElementsByClassName("tab");

tabOnClick(tabs[0]);

for(let i = 0; i < tabs.length; i++){
	addTabEvents(tabs[i], tabs);
}

function addTabEvents(tab, tabs){
	tab.addEventListener("click", function(e){

		tabToNormal(tabs);
		tabOnClick(tab);
	});
	return false;
}

function tabOnClick(tab){
	
	const styles = tab.style;
	

	if (styles.animationName === 'tab-normal-active') {
		styles.animationName = 'tab-active-normal';
	}else{
		styles.animationName = 'tab-normal-active';
	}
}

function tabToNormal(tabs){
	for(let i = 0; i < tabs.length; i++){
		if (tabs[i].style.animationName === 'tab-normal-active'){
			tabs[i].style.animationName = 'tab-active-normal';
		}
	}
}
