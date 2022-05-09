class NavComponent{

    get linksNavmenu(){
        return $$('#primary-menu li[id*=menu]');
    }

    get FirstNavMenuList(){
        return $('#primary-menu li');
    }

}

export default new NavComponent();