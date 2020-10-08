const tabs = document.getElementsByClassName("tab");
const insDescrs = document.getElementsByClassName("ins-desc");

tabOnClick(tabs[0]);
insDescrShow(insDescrs[0]);

for(let i = 0; i < tabs.length; i++){
	addTabEvents({
		tab: tabs[i],
		tabs: tabs,
		insDescr: insDescrs[i],
		insDescrs: insDescrs
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

function insDescrShow(insDescr){
	const styles = insDescr.style;
	styles.display = 'flex';

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
			insDescrs[i].style.display = 'none';
		}
	}
}