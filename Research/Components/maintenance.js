//IMPORT

//COMPONENT CODES
export const maintenance = {
  //------------------------------------
  //Data properties

  //------------------------------------
  //Component User Interface (UI)
  renderUI() {
    //Build HTML view
    let ui = `
      <div class="flip-card position-relative" id="maintenance-card">
        <div class="flip-card-inner position-relative w-100 h-100">

        <div class="flip-card-front position-absolute w-100 h-100 d-flex flex-column justify-content-center
            align-items-center text-center p-3 rounded">
          <img src="Images/web performance and maintenace.jpg" alt="Web Performance and Maintenance" class="mb-2">
          <h4 class="fw-bold">Performance & Maintenance</h4>
        </div>

        <div class="flip-card-back position-absolute w-100 h-100 p-3 rounded overflow-y-auto text-start">
          <h6 class="fw-bold">Reducing Load Time</h6>
          <ol class="fs-6">
            <li>Compress and resize images.</li>
            <li>Minify CSS and JavaScript files.</li>
            <li>Use browser caching.</li>
            <li>Use a Content Delivery Network (CDN).</li>
            <li>Reduce the number of HTTP requests.</li>
          </ol>
          <h6 class="fw-bold mt-2">Maintenance Tasks</h6>
          <ol class="fs-6">
            <li>Regularly update software and plugins.</li>
            <li>Back up the site consistently.</li>
            <li>Check for and fix broken links.</li>
            <li>Monitor site speed and uptime.</li>
            <li>Review and renew security certificates.</li>
          </ol>
          <a href="https://web.dev/learn/performance" target="_blank" rel="noopener">web.dev →</a>
        </div>

        </div>
      </div>
    `;

    //Return HTML view
    return ui;
  },

  addEvent() {
    // Flip cards on click
    document.getElementById('maintenance-card').addEventListener('click', function() {
      this.classList.toggle("flipped");
    });
  },

  //------------------------------------
  //Functions

}