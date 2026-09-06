//SEO COMPONENT

//EXPORT
export const seo = {

  //------------------------------------
  //Component UI
  renderUI() {

    //Build HTML view
    let ui = `
      <div class="flip-card position-relative" id="seo-card">
        <div class="flip-card-inner position-relative w-100 h-100">

          <div class="flip-card-front position-absolute w-100 h-100 
                      d-flex flex-column justify-content-center
                      align-items-center text-center p-3 rounded">
            
            <img src="Images/SEO image.jpg" alt="SEO" class="mb-2">
            <h4 class="fw-bold">Search Engine Optimisation</h4>
          </div>

          <div class="flip-card-back position-absolute w-100 h-100 p-3 rounded overflow-y-auto text-start">
            <h5 class="fw-bold mb-2">Search Engine Optimisation (SEO)</h5>

            <p class="fs-6 lh-base">
              SEO is about making a website easier to find through search engines such as Google. Some of the main things that can help are:
            </p>
            
            <ol class="fs-6">
              <li><strong>Descriptive titles & meta descriptions</strong> - Each page should have a title and description that clearly explain what the page is about.</li>
              <li><strong>Proper heading structure</strong> - Use <strong>h1, h2,</strong> and <strong>h3</strong> headings in a logical order to organise the content.</li>
              <li><strong>Image alt text</strong> - Descriptions for images help with accessibility and also give search engines more information about the images.</li>
              <li><strong>Mobile-friendly, fast pages</strong> - The site should work well on mobile devices and load quickly. Mobile performance is one of the factors Google considers when ranking pages.</li>
              <li><strong>Quality backlinks</strong> - Links from reputable websites can help build the site's authority.</li>
            </ol>

            <p class="fs-6 lh-base">
              For more information, visit the
              <a class="fw-bold" href="https://developers.google.com/search/docs/fundamentals/seo-starter-guide" target="_blank" rel="noopener">Google SEO Starter Guide →</a>
            </p>
            <br>
            
            <h6 class="fw-bold">SEO Plan</h6>
            <p class="fs-6 lh-base">
              For this site, I have added some descriptive title and meta description tags to each page so they match the actual content. I will make sure the images, including the research and product images, have a useful alt text included instead of relying on filenames.
            </p>

            <p class="fs-6 lh-base">
              I will make sure the headings are used in a logical order, with h1 for the main page title and h2 and h3 for the sections underneath it. The site is already designed to be responsive, so I will also keep an eye on loading times and how well it works on mobile devices.
            </p>
            
            <p class="fs-6 lh-base">
              I am not planning to focus much on backlinks because this is a student project rather than a live commercial website. For this project, making the site well structured, accessible, and easy for search engines to understand is a more useful starting point.
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
    document.getElementById('seo-card').addEventListener('click', function() {
       // Toggle('flipped')
      this.classList.toggle("flipped");
    });
  }
}