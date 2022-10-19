import { ISourcesData } from './../view/sources/sources';
import AppController from '../controller/controller';
import { AppView, IDataSources } from '../view/appView';

class App {

  controller: AppController;
	view: AppView;

  constructor() {
    this.controller = new AppController();
    this.view = new AppView();
  }

  public start() {
		const controller = this.controller;
		const view = this.view;				
		const burger = document.querySelector('.hamburger') as HTMLElement;
		const buttonsBurger = document.querySelector('.buttons-burger') as HTMLElement;
		const filtrBtn = document.querySelector('.filtred-btn') as HTMLElement
		const categoryArr = ['general', 'business', 'technology', 'sports', 'entertainment', 'health', 'science']
		burger.addEventListener('click', turnBurger);							
		categoryArr.forEach(el=>{
		  const btn = document.createElement('div') as HTMLDivElement;					
			btn.classList.add('btn-burger');
			const text = document.createElement('span') as HTMLSpanElement;
			text.classList.add('btn-burger-text');
			text.textContent = el;
			btn.append(text);
			btn.addEventListener('click', ()=> {
				turnBurger();
				addBtns(el)
			});
			  buttonsBurger.append(btn);
		});			
		function turnBurger(){
			if(burger.classList.contains('turn')){
				burger.classList.remove('turn');
				buttonsBurger.classList.remove('turn');
				document.querySelector('.filtred-btn')?.classList.remove('hiden')
				document.querySelector('.news')?.classList.add('hiden')
			}else{
				burger.classList.add('turn');
				buttonsBurger.classList.add('turn');
			}
		}		
		function addBtns(el: string):void{
	    while(filtrBtn?.firstChild){
				filtrBtn.removeChild(filtrBtn.firstChild);
			}				
		  controller.getSources((data) =>{ 
			  for(let i = 0; i < (data as IDataSources )['sources'].length; i++){
				  if((data as IDataSources )['sources'][i].category == el){
					  const data1 = data?.sources.filter(o=>o.category==el) as ISourcesData[]			
					  view.drawSources( data1)
					  break		
			}}})			
		}
			(document.querySelector('.filtred-btn') as HTMLElement).addEventListener('click', (e) => this.controller.getNews(e, (data) => {
				this.view.drawNews(data)
				document.querySelector('.filtred-btn')?.classList.add('hiden')
				document.querySelector('.news')?.classList.remove('hiden')
			}));			
		}	
		
}

export default App;
