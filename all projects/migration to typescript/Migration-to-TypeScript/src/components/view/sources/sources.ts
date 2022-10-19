import { checkNull } from '../news/news';
import './sources.css';

export interface ISourcesData{
	category?: string
	country?: string
	description?: string
	id?: string
	language?: string
	name?: string
	url?: string
}

class Sources {

  public draw(data: ISourcesData[]) {	
	  const fragment = document.createDocumentFragment();
		const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;					
		data.forEach((item) => {
			const sourceClone = sourceItemTemp.content.cloneNode(true) as DocumentFragment;	
			(checkNull(sourceClone.querySelector('.source__item-name'))as HTMLElement).textContent = item.name as string;
			(checkNull(sourceClone.querySelector('.source__item')) as HTMLElement).setAttribute('data-source-id', item.id as string);	
			fragment.append(sourceClone);
	  });	
		(checkNull(document.querySelector('.filtred-btn')) as HTMLElement).append(fragment);				
  }
		
}

export default Sources;
