import NavComponent from './components/nav-comp';

class HomePage{

    open(){
        return browser.url('/');
    }

    get btnGetStarted(){
        return $('#get-started');
    }

    get imageLogo(){
        return $('//img[@alt="Practice E-commerce Site"]');
    }

    get navComponent(){
        return NavComponent;
    }


}

export default new HomePage();