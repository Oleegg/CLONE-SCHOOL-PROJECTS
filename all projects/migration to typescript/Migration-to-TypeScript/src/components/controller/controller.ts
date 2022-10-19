import { IDataArticles, IDataSources } from './../view/appView';
import AppLoader from './appLoader';

class AppController extends AppLoader {

  public getSources(callback :(data?:IDataSources)=> void) {
    super.getResp(
      {
        endpoint: 'sources',
      },
      callback
    );
  }

  public getNews(e:Event , callback:(data?:IDataArticles)=>void) {
    let target = <HTMLElement>e.target;
		const newsContainer = <HTMLElement>e.currentTarget;	
    while (target !== newsContainer) {
      if (target.classList.contains('source__item')) {
        const sourceId = target.getAttribute('data-source-id') as string;
          if (newsContainer.getAttribute('data-source') !== sourceId) {
						newsContainer.setAttribute('data-source', sourceId);
              super.getResp(
                {
                  endpoint: 'everything',
                  options: {
                    sources: sourceId,
                  },
                },
                callback
              );
          }
          return;
      }
      target = target.parentNode as HTMLElement;
    }
  }
	
}

export default AppController;
