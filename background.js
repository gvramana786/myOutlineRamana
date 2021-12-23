/*
Outlines present tab and updates in the same tab.
*/

function myOutlineRamana() {
	//console.log("injecting");     
	browser.tabs.query({'active': true,  'currentWindow': true}, function (tabs) {
        url = tabs[0].url;
        console.log(url);
		urlpart = url;
		outline = "https://outline.com/";
		
		let position = urlpart.search("https://"); //returns -1 if not found

		
		if (position<0) //http page
		{
			console.log('http');
			//urlpart = urlpart.replace("http://", "https://outline.com/");		
			outline = outline.concat(urlpart);		
		}
		else //https page
		{
			console.log('https');
			//urlpart = urlpart.replace("https://", "https://outline.com/");		
			outline = outline.concat(urlpart);		
		}	
		
		console.log(outline);						
		
		//For outline in the same tab
		browser.tabs.update({     
	      "url": outline
		});   
		
		//For outline in a new tab		
		/*
		browser.tabs.create({     
	      "url": urlpart
		});   
		*/
		
    });	
}
	
/*
Add myOutlineRamana() as a listener to clicks on the browser action.
*/
browser.browserAction.onClicked.addListener(myOutlineRamana);
 
/*
Author: G Venkata Ramana
Email: gvramana786@gmail.com
SourceCode: https://github.com/gvramana786/myOutlineRamana
*/