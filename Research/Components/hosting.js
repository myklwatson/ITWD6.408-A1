//WEB HOSTING COMPONENT

//EXPORT
export const hosting = {

  //------------------------------------
  //Component UI
  renderUI() {

    //Build HTML View
    let ui = `
      <div class="flip-card position-relative" id="hosting-card">
        <div class="flip-card-inner position-relative w-100 h-100">

        <div class="flip-card-front position-absolute w-100 h-100 
                    d-flex flex-column justify-content-center align-items-center 
                    text-center p-3 rounded">

          <img src="Images/web hosting.jpg" alt="Web Hosting" class="mb-2">
          <h4 class="fw-bold">Web Hosting</h4>
        </div>

        <div class="flip-card-back position-absolute w-100 h-100 p-3 rounded overflow-y-auto text-start">
          <h5 class="fw-bold mb-2">Web Hosting</h5>

          <p class="fs-6 lh-base">
          Web hosting is what makes a website's files available online. When choosing a hosting provider, there are a few things I would consider:
          </p>

          <ol class="fs-6">
            <li><strong>Uptime guarantee</strong> - The site should be available most of the time. Around 99.9% uptime is a good target.</li>
            <li><strong>Server location & speed</strong> - A server that is closer to the users can help the site load faster.</li>
            <li><strong>Scalability</strong> - There should be options to upgrade if the site starts getting more traffic.</li>
            <li><strong>Security features</strong> - Useful features include SSL, backups, and protection against common attacks.</li>
            <li><strong>Support & cost</strong> - The service should provide reliable support without being unnecessarily expensive.</li>
          </ol>
          <br>

          <p class="fs-6 lh-base">
          For more information, visit 
          <a class="fw-bold" href="https://cloud.google.com/discover/what-is-web-hosting" target="_blank" rel="noopener">Understanding Web Hosting →</a>
          <br><br>

          <h6 class="fw-bold">Hosting Choice</h6>
          <p class="fs-6 lh-base">
            For this project we will publish to <strong>GitHub Pages</strong>. GitHub Pages is a good fit for this project because it is a static website built with HTML, CSS, and JavaScript. It does not need its own server to generate pages. One limitation is that GitHub Pages cannot run a backend, so I am using Supabase separately for things like authentication and storing user data. 
          </p>
          <p class="fs-6 lh-base">
            We are also using <strong>Vercel</strong> to host the Supabase backend. Vercel is a cloud platform that can host serverless functions and APIs, which is useful for our project because it allows us to run backend code without managing a traditional server.
          </p>  

        </div>

        </div>
      </div>
    `;

    //Return HTML View
    return ui;
  },

  addEvent() {
    // Flip Card On Click
    document.getElementById('hosting-card').addEventListener('click', function() {
      // Toggle('flipped')
      this.classList.toggle("flipped");
    });
  },

}