import { basketPay } from './../index';
import  { Options, API }  from 'nouislider';
import * as noUiSlider from 'nouislider';
import { addCard, filterArrColor, filterArrBrand, filterProd, filterArrSize, filterArrPopular, sortAs, findeFilter } from './card';
import './filter.scss';

//============variables=============
type VariablesObj = {
	actionsColor: string[]
	actionsFirms: string[]
	actionsSize: string[]
	popular: string[]
}
const objVariables: VariablesObj ={
	actionsColor:[],
	actionsFirms:[],
	actionsSize:[],
	popular: [] 
}

export let findeText = <string>'';
export let sortAction = <string>'az';
export let isOpenFilters = <boolean>false;



const list = document.querySelector('.select') as HTMLInputElement ;
const search = document.querySelector('.search__text') as HTMLInputElement;
//==========search================

search.oninput = function() {
		findeText = search.value
		checkAllFilters()
};

//============sort============
(document.querySelector('.filter__reset-all') as HTMLElement)?.addEventListener('click', ()=>{
	sortAction = 'az';
	list.value = 'az';
	basketPay.clearBasket();	
	clearSettings();
	checkAllFilters()
	localStorage.clear();	
});

(document.querySelector('.filter__reset') as HTMLButtonElement)?.addEventListener('click', ()=>	clearSettings())

function clearSettings(){
	const checkBoxes = document.querySelectorAll("input[type=checkbox]") as NodeListOf<HTMLInputElement>;
	checkBoxes.forEach(el  => el.checked = false);
	rangeSliderPrice.noUiSlider?.set([1,200]);
	rangeSliderYear.noUiSlider?.set([2014,2022]);	
	objVariables.actionsColor.length = 0;
	objVariables.actionsFirms.length = 0;
	objVariables.actionsSize.length = 0;
	objVariables.popular.length = 0;
	search.value = '';
	findeText = '';
	checkAllFilters();
}

list?.addEventListener('change', ()=> {
	sortAction = list.value
	checkAllFilters()
})

//===============filter===============
interface TargetElement extends HTMLElement {
	noUiSlider?: API;
}

const rangeSliderPrice = document.querySelector('.filter__range-slider-price') as TargetElement;
const rangeSliderYear = document.querySelector('.filter__range-slider-year') as TargetElement;

export function addRangeSliders(){
	addRangeSlider(rangeSliderPrice, {
		start: [1, 200],
		tooltips: true,
		connect: true,
		range: {
				min: 1,
				max: 200,
		},	
		step: 1,	
		format: {			
			to: function (value) {
					return Math.floor(value);
			},			
			from: function (value) {
					return Number(value.replace(',-', ''));
			}
	  }	
	})
	
	addRangeSlider(rangeSliderYear, {
		start: [2014, 2022],
		tooltips: true,
		connect: true,
		range: {
				min: 2014,
				max: 2022,
		},		
		step: 1,
		format: {	
		to: function (value) {
			return Math.floor(value);
		},			
		from: function (value) {
				return Number(value.replace(',-', ''));
		}		
	}
})
	rangeSliderYear.noUiSlider?.on('change', () => checkAllFilters())
  rangeSliderPrice.noUiSlider?.on('change', () => checkAllFilters()	)
}

function addRangeSlider(el: HTMLElement,param: Options) {
	noUiSlider.create(el, param)
}

//=======ceckboxes=============

const checkboxBlock = document.querySelector('.filter__meaning')
checkboxBlock?.addEventListener('change', e=> {
	checkAllFilters(e)})

function changeActions(el: HTMLInputElement, arr:string[]){
	if(el.checked){
		arr.push(el.id);
	}else{
		arr.splice(arr.indexOf(el.id),1);		
	}		
}

export function checkAllFilters(e?: Event){
	if(e){
		const element = e?.target as HTMLInputElement
		if(element.classList.contains('color')){
			changeActions(element, objVariables.actionsColor)				
		}
		if(element.classList.contains('firms')){
			changeActions(element, objVariables.actionsFirms)
		}
		if(element.classList.contains('size')){		
			changeActions(element, objVariables.actionsSize)	
		}	
		if(element.classList.contains('popular')){
			changeActions(element, objVariables.popular)
		}
	}
	
	let x = filterArrColor(objVariables.actionsColor)	
	x = filterArrBrand(x, objVariables.actionsFirms)	
	x = filterArrSize(x, objVariables.actionsSize)
	x = filterArrPopular(x, objVariables.popular)
	const priceValue = rangeSliderPrice.noUiSlider?.get() as (string | number)[] 
	const yearValue = rangeSliderYear.noUiSlider?.get() as (string | number)[] 
	x = filterProd(x, yearValue, 'year',priceValue , 'price')	
	x = sortAs(x)
	if(findeText){
		if(findeText.length){
			x = findeFilter(x)
		}
	}
	
	addCard(x, 'men')
}

//==============localstorage================================

window.addEventListener('beforeunload', () => {	
		localStorage.setItem('objVariables', JSON.stringify(objVariables));
		localStorage.setItem('findeText' , findeText ? findeText : '');
		localStorage.setItem('sortAction' , sortAction ? sortAction : 'az');
		localStorage.setItem('rangePrice' , JSON.stringify(rangeSliderPrice.noUiSlider?.get()));
		localStorage.setItem('rengeYear' , JSON.stringify(rangeSliderYear.noUiSlider?.get()));
		localStorage.setItem('bascetArr', JSON.stringify(basketPay.bascetArr))	
		localStorage.setItem('isOpenFilters', JSON.stringify(isOpenFilters))	
});

window.addEventListener('load', ()=>{		
	const objVariables1 = JSON.parse(<string>localStorage.getItem('objVariables'))
	const findeText1 = <string>localStorage.getItem('findeText')
	const sortAction1 = <string>localStorage.getItem('sortAction')
	const rangePrice1 = JSON.parse(<string>localStorage.getItem('rangePrice'))	
	const rengeYear1 = JSON.parse(<string>localStorage.getItem('rengeYear'))	
	const bascetArr1 = JSON.parse(<string>localStorage.getItem('bascetArr'))	
	const isOpenFilters1 = JSON.parse(<string>localStorage.getItem('isOpenFilters'))	
	detVariables(objVariables1, findeText1, sortAction1, rangePrice1, rengeYear1, bascetArr1,isOpenFilters1)
})

function detVariables(objVariables1: VariablesObj, findeText1: string , sortAction1:string ,rangePrice1:string[],rengeYear1:string[], bascetArr1:string[],isOpenFilters1:boolean){
  if(objVariables1){
		objVariables.actionsColor.length = 0;
		objVariables.actionsFirms.length = 0;
		objVariables.actionsSize.length = 0;
		objVariables.popular.length = 0;		
		if(objVariables1.actionsColor.length){
			objVariables1.actionsColor.forEach(el => objVariables.actionsColor.push(el))
		}
		if(objVariables1.actionsFirms.length){
			objVariables1.actionsFirms.forEach(el =>objVariables.actionsFirms.push(el))
		}
		if(objVariables1.actionsSize.length){
			objVariables1.actionsSize.forEach(el =>objVariables.actionsSize.push(el))
		}
		if(objVariables1.popular.length){
			objVariables1.popular.forEach(el =>objVariables.popular.push(el))
		}
	}	
	
	findeText = findeText1 ? findeText1 : '';
	search.value = findeText1 ? findeText1 : '';
	sortAction = sortAction1 ? sortAction1 : 'az';
	list.value = sortAction1 ? sortAction1 : 'az';
	isOpenFilters = isOpenFilters1;
	rangeSliderPrice.noUiSlider?.set(rangePrice1);
	rangeSliderYear.noUiSlider?.set(rengeYear1);
	basketPay.bascetArr = bascetArr1;
	basketPay.addTextBasket();
	checkAllFilters();
	checkenCheckbox()
	if(isOpenFilters){
		showFilters(true)
	}
	
}

function checkenCheckbox(){
  if(objVariables.actionsColor.length){
		const colorInputs = document.querySelectorAll('.color') as NodeListOf<HTMLInputElement>;
		objVariables.actionsColor.forEach(el => {
			for(let i = 0; i < colorInputs.length; i++){
				if(colorInputs[i].id == el){
					colorInputs[i].checked = true
				}				
			}			
		})	
  }
	if(objVariables.actionsFirms.length){
		const brandInputs = document.querySelectorAll('.firms') as NodeListOf<HTMLInputElement>;
		objVariables.actionsFirms.forEach(el => {
			for(let i = 0; i < brandInputs.length; i++){
				if(brandInputs[i].id == el){
					brandInputs[i].checked = true
				}				
			}			
		})	
  }
	if(objVariables.actionsSize.length){
		const sizeInputs = document.querySelectorAll('.size') as NodeListOf<HTMLInputElement>;
		objVariables.actionsSize.forEach(el => {
			for(let i = 0; i < sizeInputs.length; i++){
				if(sizeInputs[i].id == el){
					sizeInputs[i].checked = true
				}				
			}			
		})	
  }
	if(objVariables.popular.length){
		const popularCheckbox = document.querySelector('.popular') as HTMLInputElement;
		objVariables.popular.forEach(el => {			
				if(popularCheckbox.id == el){
					popularCheckbox.checked = true								
			}			
		})	
  }	
}

//=====================================

const hideFilter = <HTMLElement>document.querySelector('.men__header-filter');
const mainFilter = <HTMLElement>document.querySelector('.men__main-filter');
const mainContent = <HTMLElement>document.querySelector('.men__main-content');

if(hideFilter){
	hideFilter.addEventListener('click', ()=> showFilters());
}

function showFilters( mod?:boolean){		
	if(mainFilter){
		if(mainFilter.classList.contains('hide-filter')){
			mainFilter.classList.remove('hide-filter');		
			mainContent.classList.remove('hide-filter');
			if(!mod){
				isOpenFilters = !isOpenFilters;
			}				
		}else{
			mainFilter.classList.add('hide-filter');		
			mainContent.classList.add('hide-filter');
			if(!mod){
			isOpenFilters = !isOpenFilters;	
			}
		}
	}	
}

export default showFilters