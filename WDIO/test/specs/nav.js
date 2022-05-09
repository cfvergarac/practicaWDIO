
import HomePage from '../pages/HomePage';

describe('Navigation menu', ()=> {
    it('Get text of all menu items', async()=>{
     
        //await browser.url('/');   
       await HomePage.open();

        const expectedLinks= [
        "Home",
        "About",
        "Shop",
        "Blog",
        "Contact",
        "My account", 
        ];

        const actualLinks = [];

        //const navLinks = await $('#primary-menu').$$('li[id*=menu]');
        const navLinks = await HomePage.navComponent.linksNavmenu;

        for(const link of navLinks){
            actualLinks.push(await link.getText());
        }

        await expect(expectedLinks).toEqual(actualLinks);

     }); 

  
  });
  