import { PRODUCTS } from './../products';
const html = document.querySelector('html');
const basket = document.querySelector('.logo-search-circle-text');
const allarm = document.querySelector('.allert');
const closeAlarm = (<HTMLElement>document.querySelector('.close'));

export class Basket {
	
	private _bascetArr: string[];
	basketAllarm: HTMLElement;	

	constructor(){
		this._bascetArr = [],
		(<HTMLDivElement>document.querySelector('.basket'))?.addEventListener('click', ()=> this.showBasket()) 
		this.basketAllarm = (<HTMLElement>document.querySelector('.basket__pay'));
	}

	set bascetArr(arr){
		if(arr){
			this._bascetArr = arr.map(el => el)
		}
	}

	get bascetArr(){
		return this._bascetArr
	}
    
	addInBasket(id:string,basketNum: HTMLElement){
		if(!this._bascetArr.includes(id) ){		
			if(this._bascetArr.length > 17) {
				this.addAllarm()
				return
			}	
			basketNum.classList.remove('hidden')
			this._bascetArr.push(id)
		}else{
			basketNum.classList.add('hidden')
			const index = this._bascetArr.indexOf(id)
			this._bascetArr.splice(index,1)
		}	
		this.addTextBasket()
	}

	addTextBasket(){
		if(basket){
			basket.textContent = this._bascetArr.length>0? `${this._bascetArr.length}`: '0'
		}
		
		if(this._bascetArr.length>=10){
			basket?.setAttribute('x','7')
		}else{
			basket?.setAttribute('x','9')
		}	
	}
	
  addAllarm(){
		allarm?.classList.remove('hidden')
		html?.classList.add('overflow')
		closeAlarm?.addEventListener('click', ()=>this.closeAllert())
    document.querySelector('.allert__reset')?.addEventListener('click', ()=> {
	  this.clearBasket()
	  this.closeAllert()
    })	
	}

	showBasket(){		
		this.basketAllarm?.classList.remove('hidden');
		const basketAllarmUl = (<HTMLElement>document.querySelector('.basket__pay-content'));
		const basketAllarmClose = (<HTMLButtonElement>document.querySelector('.basket__close'));
		if(basketAllarmClose){
			basketAllarmClose.addEventListener('click', (e)=>{
				this.closeBasket(e)
			})
		}
		if(basketAllarmUl){
			basketAllarmUl.innerHTML = '';
		}
		
		let count = 0;
		if(this._bascetArr.length){			
			this._bascetArr.forEach((el, i)=>{
				const prod = PRODUCTS.men.find(obj => obj.id == el);
				const li = document.createElement('li');	
				li.textContent = `${i+1}: ${prod?.name} Цена: ${prod?.price}`;
				count += +`${prod?.price}`;
				basketAllarmUl?.append(li)
			})
		}		
		basketAllarmUl?.append(document.createElement('li').textContent = `Итого: ${count}`);
	}

	closeBasket(e:MouseEvent){			
		this.basketAllarm?.classList.add('hidden');
		e.stopPropagation()
	}
	
	closeAllert(){
		allarm?.classList.add('hidden')
		html?.classList.remove('overflow')
	}
	
	clearBasket(){
		this._bascetArr.length = 0;
		basket?.setAttribute('x','9');
		if(basket){
			basket.textContent = (this._bascetArr.length || this._bascetArr.length == 0) ? `${this._bascetArr.length}`: '';
		}		
		document.querySelectorAll('.basket-add').forEach(el=> el.classList.add('hidden'))
	}	
}

