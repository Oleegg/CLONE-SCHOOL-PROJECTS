import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: ""//608dbb4973684ed6bd6f30c38b37c524
        });
    }
}

export default AppLoader;
