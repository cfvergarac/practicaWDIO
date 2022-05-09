import homePage from '../pages/homePage';
//import { faker } from '@faker-js/faker';

describe('Home', ()=> {

before (async()=>{
  await homePage.open();

})

/*
beforeEach (async()=>{

})*/

after (async()=>{
     
})


afterEach (async()=>{

})

  it('Open URL && assert title', async()=>{
   //Open URL
   //await browser.url('https://practice.automationbro.com/');
  
   //Assert title
   await expect(browser).toHaveTitle('Practice E-Commerce Site – Automation Bro')
   }); 

   it('Click started button', async()=>{
    //Open URL
   
    //await $('#get-started').click();
    await homePage.btnGetStarted.click();
    //Assert title
    await expect(browser).toHaveUrlContaining('get-started');   
    }); 

   

});
