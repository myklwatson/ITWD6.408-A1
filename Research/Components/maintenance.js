//MAINTENANCE COMPONENT

//EXPORT
export const maintenance = {
 
  //------------------------------------
  //Component UI
  renderUI() {

    //Build HTML view
    let ui = `
      <div class="flip-card position-relative" id="maintenance-card">
        <div class="flip-card-inner position-relative w-100 h-100">

        <div class="flip-card-front position-absolute w-100 h-100 
                  d-flex flex-column justify-content-center
                  align-items-center text-center p-3 rounded">
          
          <img src="Images/web performance and maintenace.jpg" alt="Web Performance and Maintenance" class="mb-2">
          <h4 class="fw-bold">Performance & Maintenance</h4>
        </div>

        <div class="flip-card-back position-absolute w-100 h-100 p-3 rounded overflow-y-auto text-start">
          <h5 class="fw-bold mb-2">Performance & Maintenance</h5>

          <p class="fs-6 lh-base">
            Website performance is basically how quickly a site loads and how well it responds when someone uses it. A slow website can make it frustrating to use and can also affect things like search rankings. Maintenance is about regularly checking the site, fixing problems, and keeping everything up to date.
          </p>
          <br>
        
          <h6 class="fw-bold">Reducing Load Time</h6>
          <p class="fs-6 lh-base">
            Some of the main ways to improve loading times are:

          <ol class="fs-6">
            <li><strong>Compress</strong> and resize images so the browser does not have to download unnecessarily large files.</li>
            <li><strong>Minify</strong> CSS and JavaScript to reduce the size of the files being loaded.</li>
            <li><strong>Use browser caching</strong> so returning visitors do not have to download everything again.</li>
            <li><strong>Use a Content Delivery Network (CDN)</strong> to serve files from servers closer to the user.</li>
            <li><strong>Reduce HTTP requests</strong> by limiting the number of separate files the browser needs to load.</li>
          </ol>
          </p>
          <br>

          <h6 class="fw-bold mt-2">Maintenance Tasks</h6>
          <p class="fs-6 lh-base">
          I would also need to regularly:

          <ol class="fs-6">
            <li><strong>Update software and plugins</strong> to keep them working and secure.</li>
            <li><strong>Back up the site</strong> so it can be restored if something goes wrong.</li>
            <li><strong>Check for broken links</strong> and fix them when necessary.</li>
            <li><strong>Monitor speed and uptime</strong> to make sure the site is still performing properly.</li>
            <li><strong>Check security certificates</strong> and renew them when needed.</li>
          </ol>
          </p>
          <br>

          <p class="fs-6 lh-base">
            For more information, visit the 
          <a class="fw-bold" href="https://web.dev/learn/performance" target="_blank" rel="noopener">web.dev Performance Resources →</a>
          </p>
        
          <br>
          <h6 class="fw-bold">Performance Testing</h6>
          <p class="fs-6 lh-base">
            I tested the Research page using Google Chrome's Lighthouse tool. It scored 64/100 for Performance, 89 for Accessibility, 100 for Best Practices, and 91 for SEO. The Total Blocking Time was 0 ms and the Cumulative Layout Shift was 0, which were both good results. This means the page is not significantly blocking interaction and the layout stays stable while it loads. <br>
            <br>
            The main problem was the loading time. The Largest Contentful Paint was 6.5 seconds and the Speed Index was 13.2 seconds, which are both quite slow. The six research images are probably the main reason for this, as they have not been properly optimised yet. 
          </p>
          <p class="fs-6 lh-base">
            To improve performance further, I could: compress the product and research images further before uploading; minify the CSS and JavaScript files before publishing; and reduce the number of separate JS files loaded per page by combining related scripts where practical.
          </p>
          </div>

        </div>
      </div>
    `;

    //Return HTML view
    return ui;
  },

  addEvent() {
    // Flip Card On Click
    document.getElementById('maintenance-card').addEventListener('click', function() {
      // Toggle('flipped')
      this.classList.toggle("flipped");
    });
  },


}