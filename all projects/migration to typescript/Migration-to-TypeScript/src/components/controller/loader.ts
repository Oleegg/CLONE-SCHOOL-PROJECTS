import { IDataArticles} from '../view/appView';
import { ISourcesData } from '../view/sources/sources';

interface ISour{
	status: string;
	sources: ISourcesData [];
}

enum myTupleErr {AutentificationError = 401, NotFound = 404};

class Loader {

  public baseLink: string;
	public options: { apiKey: string };

  constructor(baseLink:string, options:{apiKey:string}) {
    this.baseLink = baseLink;
    this.options = options;
  }
		
  public getResp(
    {endpoint = '', options = {} },
    callback = () => {
      console.error('No callback for GET response');
    }
  ): void {		
    this.load('GET', endpoint, callback, options);
  }

  private errorHandler(res:Response) {						
    if (!res.ok) {
      if (res.status === myTupleErr.NotFound || res.status === myTupleErr.AutentificationError)
      console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
      throw Error(res.statusText);
    }
    return res;
  }

  private makeUrl(options:{[sources:string]:string}, endpoint:string) {						
    const urlOptions = { ...this.options, ...options } as {[key:string]: string};
    let url = `${this.baseLink}${endpoint}?`;
      Object.keys(urlOptions).forEach((key) => {
        url += `${key}=${urlOptions[key]}&`;
      });
    return url.slice(0, -1);
  }

  private load(method:string, endpoint:string, callback:(data:IDataArticles|ISour)=>void, options = {}) {
    fetch(this.makeUrl(options, endpoint), { method })
    .then(this.errorHandler)
    .then((res) => res.json())
    .then((data:IDataArticles|ISour) => callback(data))
    .catch((err: Error) => console.error(err));
  }		
	
}

export default Loader;
