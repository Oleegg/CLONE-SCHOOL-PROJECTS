import News from './news/news';
import Sources, { ISourcesData } from './sources/sources';

export interface IDataSources{
	sources:[
		{category: string;
			country: string;
			description: string;
			id: string;
			language: string;
			name: string;
			url: string;
		}
	],
	status: string
}

export interface IDataArticles{
  articles:[
		{source: {
			id: string
			name: string
		}
			author: string
			content: string
			description: string
			publishedAt: string
			title: string
			url: string
			urlToImage: string}
	],
	status: string,
	totalResults:number
}

export class AppView {
	
  news: News;
	sources: Sources;

  constructor() {
    this.news = new News();
    this.sources = new Sources();	
  }
		
  public drawNews(data?:Partial<IDataArticles>) {			
    const values = data?.articles ? data?.articles : [];
    this.news.draw(values);				
  }

  public drawSources(data?:ISourcesData[]) {		
    const values = data ?  data : [];
    this.sources.draw(values);
  }
		
}

export default AppView;
