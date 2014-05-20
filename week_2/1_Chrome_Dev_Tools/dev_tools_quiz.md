#### Include an inline screenshot of your codeschool's points from the profile page: http://postimg.org/image/v5ddh33bp/

<!-- Modify the Markdown to include your answers. Don't delete the questions! -->

##QUIZ
* Explain which tabs support the following actions and how.
  * Realtime editing of HTML and CSS  
  
    The elements and source tab: you can either edit the source file, or you can edit parts of the css and html in the elements tab.

  * Javascript Debugging  
  
    The console tab: It displays all the html and javascript errors and warnings in the files you're working with.

  * Performance Optimization  
  
    The network tab:  It displays the time it takes to load certain assets and perform tasks.  From here, you can determine where performance bottlenecks exist.

* What's the quick key for your OS to spawn the Dev Tools inspector?  
 
  command + option + I

* Go to http://www.postmachina.com/ and analyze and tweak this nicely designed page.
  * What is the current background color for the page?  (Surprisingly, it's not just black!)
 
    0b0f11
  
  * Tweak the background color to white.
  * Tweak the height of the side bar that contains the logo.  Shrink it down to 85px.
  * Roll over the navigation links.  When you hover over them, they dissapear.  Let's change the hover color to black instead.
  * Now take a screenshot of your new (and maybe not so improved) design.  It should match this screenshot: http://postimg.org/image/5ak1jkpl5/
  * Upload your own image to the web using an image hosting service.  It should match the image above. The last nav link in the image above is black because the mouse was hovering there when the screenshot was taken. Do the same, and don't take a screenshot of your whole desktop, just the browser window. (This is part of the challenge.)  
  
    http://postimg.org/image/3mdlcmc8n/

* For the postmachina website, why can't you tweak the color of the text "The most important things are not things"?  Please explain.  
    
    Because it's a .gif image, not actual html text.

* Go to www.ticketswizard.com and analyze the page.  
  * What is the largest image on the website?
 
    By dimension or by bits?  By dimension, probably the banner in the header.  By bits, see below ...

  * Explain how you would find out this information, and list the URL of offending image here and how big it is.  
  
    Go to network, clear the current waterfall, load the page, filter by size, scroll down to find the first and largest image.  Here it is: http://s7.addthis.com/static/btn/v2/lg-share-en.gif

* Test the www.ticketswizard.com website with google's [PageSpeed Insights](http://www.ticketswizard.com/).  (You can also download the chrome plugin).  What is the lowest hanging fruit to optimize the website?  How many kilobytes of data can be eliminated?  
   
    The images.  It says you can reduce the size by 885.9KiB (39% reduction).
