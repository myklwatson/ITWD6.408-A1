//IMPORT

//COMPONENT CODES
export const hosting = {
  //------------------------------------
  //Data properties

  //------------------------------------
  //Component User Interface (UI)
  renderUI() {
    //Build HTML view
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
            <li><strong>Uptime guarantee</strong> — look for at least 99.9% uptime.</li>
            <li><strong>Server location & speed</strong> — closer servers reduce load times.</li>
            <li><strong>Scalability</strong> — ability to upgrade as traffic grows.</li>
            <li><strong>Security features</strong> — SSL, backups, firewalls.</li>
            <li><strong>Support & cost</strong> — responsive support at a fair price.</li>
          </ol>
          <a href="https://www.cloudflare.com/learning/performance/what-is-web-hosting/" target="_blank" rel="noopener">Cloudflare →</a>
          <br><br>

          <h6 class="fw-bold">Hosting Choice for This Project</h6>
          <p class="fs-6 lh-base">
            I chose <strong>GitHub Pages</strong> to publish this project. It's free, integrates directly with the Git version control already used to develop the site, supports custom domains if needed later, and is well-suited to a static multi-page HTML/CSS/JS site like this one with no server-side rendering requirements. Its main limitation is that it can't run a backend directly — which is why this project uses Supabase as an external backend-as-a-service for authentication and data storage instead.
          </p>

        </div>

        </div>
      </div>
    `;

    //Return HTML view
    return ui;
  },

  addEvent() {
    // Flip cards on click
    document.getElementById('hosting-card').addEventListener('click', function() {
      this.classList.toggle("flipped");
    });
  },

 //------------------------------------
 //Functions

}