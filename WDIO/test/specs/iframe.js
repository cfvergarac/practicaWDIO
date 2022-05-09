describe('iframe', ()=> {
    it('Working with iframe', async()=>{
    
        await browser.url('https://practice.automationbro.com/iframe-sample/');
        const iframe = await $('#advanced_iframe');
        await browser.switchToFrame(iframe);    
        await expect($('#site-logo')).toExist();
        await browser.switchToParentFrame();
     }); 
  
  });