import { basketPay } from './../index';
import { sortAction, findeText } from './filter';
import { IImages, IProductDiscription, PRODUCTS, IProducts } from "../products";
import { addStar } from "./stars";

export type KeyObj = keyof IProductDiscription;
type KeyArr = keyof IProducts;

const arrManCreat = PRODUCTS.men.map(el => {
	if(el.discount){
		el.oldPrice = el.price;
		el.price = Math.round(el.price - (el.price /100 * +el.discount.slice(1,3)));
	}
	el.sizes = el.sizes.map(str => (str as string).slice(0,-4));
	return el
}) as IProductDiscription[];

export function filterArrColor(action: string[]){
	const arrColorFilter = arrManCreat.filter(el => {
		if(!action.length) return true
		for(let i = 0; i < action.length; i++){
		 if(el.images[0].color == action[i]) 
			return true
		}
	})
	return arrColorFilter
}

export function filterArrBrand(arr:IProductDiscription[], action:string[]){
	const arrFirmsFilter = arr.filter(el =>{
		if(!action.length) return true
		for(let i = 0; i < action.length; i++){
			if(el.brand.slice(0, 3)==action[i].slice(0,3)){
				return true
			}
		}
	})
	return arrFirmsFilter
}

export function filterArrSize(arr:IProductDiscription[], action:string[]){
	const arrSizeFilter = arr.filter(el =>{
		if(!action.length) return true
		for(let i = 0; i < action.length; i++){
			for(let k = 0; k < el.sizes.length; k++){
				if(el.sizes[k] == action[i]){
					return true
				}
			}
			
		}
	})
	return arrSizeFilter
}

export function filterArrPopular(arr:IProductDiscription[], action:string[]){
	const arrPopFilter = arr.filter(el =>{
		if(!action.length) return true
		for(let i = 0; i < action.length; i++){
			if(+el.rating == +action[i].slice(-1)){
				return true
			}
		}
	})
	return arrPopFilter
}
		
export function filterProd(arr: IProductDiscription[],value1: (string | number)[], str1: KeyObj, value2: (string | number)[], str2: KeyObj){	
	const [a,b] = value1
	const [c,d] = value2	
	const arrMan = arr.filter(el=> (((+el[str1] >= +a) && (+el[str1] <= +b)) && ((+el[str2] >= +c) && (+el[str2] <= +d))))
	return arrMan
}

export function sortAs(arr: IProductDiscription[]){
	let mod: boolean;
	let x: KeyObj ;
	
	if(sortAction == 'az'){
		mod = true;
		x = 'name'
	}else if(sortAction == 'za'){
		mod = false;
		x = 'name'
	}else if(sortAction == 'priceUp'){
		mod = true;
		x = 'price'
	}else if(sortAction == 'priceDown'){
		mod = false;
		x = 'price'
	}else if(sortAction == 'yearUp'){
		mod = true;
		x = 'year'
	}else if(sortAction == 'yearDown'){
		mod = false;
		x = 'year'
	}
		return arr.sort((a , b) => {		
			if(x == 'name'){
				if(mod){
					return (a[x] > b[x]) ? 1 : -1	
				}else{
					return (a[x] < b[x]) ? 1 : -1		
				}	
			}else{
				if(mod){					
					return (+a[x] > +b[x]) ? 1 : -1	
				}else{
					return (+a[x] < +b[x]) ? 1 : -1		
				}	
			}		
	})			
}

export function findeFilter(arr:IProductDiscription[]){
 const arrFinde = arr.filter(el => {
		if(el.name.toLowerCase().includes(findeText.toLowerCase()))	{
			return true
		}	
	})
	return arrFinde
}	

export function addCard(arr: IProductDiscription[] , m: KeyArr){
	
	const menMain = document.querySelector(`.${m}__main-content`) as HTMLElement;
	menMain.innerHTML = '';
	if(!arr.length){
		menMain.classList.add('big-text')
		menMain.innerHTML = `<div class = "big-text__text">Извините, совпадений не обнаружено</div>`; return
	}
	menMain.classList.remove('big-text')
	arr.forEach(el=>{
		const card = document.createElement('div');
		card.classList.add('card'); 		
		const sail = document.createElement('div');
		sail.classList.add('sail');
		const addBasket = document.createElement('div')
		addBasket.classList.add('basket-add')
		addBasket.classList.add('hidden')
		const sailText = document.createElement('span');
		sailText.classList.add('sail__text');
		sailText.textContent = el.discount ? el.discount : ''  as string | null;
		const photo = document.createElement('div');
		photo.classList.add('photo');
		photo.style.backgroundImage = `url(https://training.cleverland.by/shop${(el.images as IImages[])[0].url})`;
		const additionally = document.createElement('div');
		additionally.classList.add('card__text-additionally')
		const cardText = document.createElement('div');
		cardText.classList.add('card__text');
		const textUp = document.createElement('div')
		textUp.classList.add('card__text-up')
		const name = document.createElement('h3');
		name.classList.add('card__text-name');
		name.textContent = el.name;
		const colorElement = document.createElement('p');
		colorElement.classList.add('card__text-color');
		colorElement.textContent = `Color: ${el.images[0].color}`;
		const brandElement = document.createElement('p');
		brandElement.classList.add('card__text-brand');
		brandElement.textContent = `Brand: ${el.brand}`;
		const theNumber = document.createElement('p') 
		theNumber.classList.add('card__text-number')
		theNumber.textContent = `left in stock: ${el.the_number}`
		textUp.append(name)
		additionally.append(theNumber)
		additionally.append(colorElement)
		additionally.append(brandElement)
		const cardTextWrapp = document.createElement('div');
		cardTextWrapp.classList.add('card__text-bottom');
		const price = document.createElement('div');
		price.classList.add('card__text-price');
		if(el.discount){
			sail.style.backgroundColor = 'red';
			const sailPrice = document.createElement('span');
			sailPrice.style.textDecoration = 'line-through';
			sailPrice.textContent = `${el.oldPrice}`;			
			price.textContent += `${el.price}$  `;
			sailPrice.style.fontWeight = 'normal';
			price.append(sailPrice);			  
		}else{
			price.textContent = `${el.price}$`;
		}
		price.style.fontWeight = 'bold';		
		const stars = document.createElement('div');
		for(let i = 0,k=el.rating-1; i < 5 ; i++){			
			const star = addStar(i,k)
			stars.append(star)
		}
		const year = document.createElement('div');
		year.classList.add('card__text-year');
		year.textContent = `${el.year }`;			
		if(basketPay.bascetArr.length){
			if(basketPay.bascetArr.includes(el.id)){
				addBasket.classList.remove('hidden')
			}			
		}
		cardTextWrapp.append(price);		
		additionally.append(year);
		cardTextWrapp.append(stars);
		cardText.append(textUp);
		cardText.append(cardTextWrapp);
		cardText.append(additionally);
		sail.append(sailText);
		card.append(sail);
		card.append(addBasket);
		card.append(photo);
		card.append(cardText);
		
		card.addEventListener('click', ()=>basketPay.addInBasket(el.id, addBasket))
		menMain.append(card);
	})
}	
