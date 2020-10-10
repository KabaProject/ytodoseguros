const tabs = document.getElementsByClassName("tab");
const insDescrs = document.getElementsByClassName("ins-desc");
const insTl = gsap.timeline();


tabOnClick(tabs[0]);
insDescrShow(insDescrs[0]);

for(let i = 0; i < tabs.length; i++){
	addTabEvents({
		tab: tabs[i],
		tabs: tabs,
		insDescr: insDescrs[i],
		insDescrs: insDescrs,
	});
}

function addTabEvents({tab, tabs, insDescr, insDescrs}){
	tab.addEventListener("click", function(e){

		tabToNormal(tabs);
		tabOnClick(tab);
		
		insDescrHide(insDescrs);
		insDescrShow(insDescr);
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

function insDescrShow(insDescr, isFirst){
	const styles = insDescr.style;
	const content = insDescr.getElementsByClassName("ins-desc__content")[0];
	const image = insDescr.getElementsByClassName("ins-desc__img")[0];
	

	styles.display = 'flex';


	insTl.from(image, {
			opacity: 0,
			x: 250,
			duration: 0.7
		})
		.from(content, {
			opacity: 0,
			x: -200,
			duration: 1	
		});


	console.log("clicked");
}

function tabToNormal(tabs){
	for(let i = 0; i < tabs.length; i++){
		if (tabs[i].style.animationName === 'tab-normal-active'){
			tabs[i].style.animationName = 'tab-active-normal';
		}
	}
}

function insDescrHide(insDescrs){
	for(let i = 0; i < insDescrs.length; i++){
		if (insDescrs[i].style.display === 'flex'){

			const content = insDescrs[i].getElementsByClassName("ins-desc__content")[0];
			const image = insDescrs[i].getElementsByClassName("ins-desc__img")[0];

			insDescrs[i].style.display = 'none';
		}
	}
}
