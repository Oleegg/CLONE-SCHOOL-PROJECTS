import './news.css';

export type DataNews = {
	source: {
		id: string
	  name: string
	};
	author: string;
	content: string;
	description: string;
	publishedAt: string;
	title: string;
	url: string;
	urlToImage: string;
}

export function checkNull<T>(el: T):T | Error {
	if(el===null){
		throw new Error(`${el} == null`);						
	}else{
		return el;
	}
}

class News {
	
  public draw(data: DataNews[]) {									
		const news = data.length >= 10 ? data.filter((_item, idx) =>  idx < 10) : data;				
    const fragment = document.createDocumentFragment();
    const newsItemTemp  = checkNull(document.querySelector('#newsItemTemp')) as HTMLTemplateElement;	
    news.forEach((item, idx) => {	
		  const	newsClone = newsItemTemp.content.cloneNode(true) as DocumentFragment ;	
        if (idx % 2) (checkNull(newsClone.querySelector('.news__item')) as HTMLElement).classList.add('alt');
        (checkNull(newsClone.querySelector('.news__meta-photo')) as HTMLElement).style.backgroundImage = `url(${
        item.urlToImage || 'img/news_placeholder.jpg'})`;
        (checkNull(newsClone.querySelector('.news__meta-author')) as HTMLElement).textContent = item.author || item.source.name;
        (checkNull(newsClone.querySelector('.news__meta-date')) as HTMLElement).textContent = item.publishedAt
          .slice(0, 10)
          .split('-')
          .reverse()
          .join('-');
        (checkNull(newsClone.querySelector('.news__description-title')) as HTMLElement).textContent = item.title;
        (checkNull(newsClone.querySelector('.news__description-source')) as HTMLElement).textContent = item.source.name;
        (checkNull(newsClone.querySelector('.news__description-content') )as HTMLElement).textContent = item.description;
        (checkNull(newsClone.querySelector('.news__read-more a')) as HTMLElement).setAttribute('href', item.url);
        fragment.append(newsClone);					
        });
        (checkNull(document.querySelector('.news')) as HTMLElement).innerHTML = '';
        (checkNull(document.querySelector('.news')) as HTMLElement).appendChild(fragment);
    }

}

export default News;
