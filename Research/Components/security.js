//IMPORT

//COMPONENT CODES
export const security = {
  //------------------------------------
  //Data properties

  //------------------------------------
  //Component User Interface (UI)
  renderUI() {
    //Build HTML view
    let ui = `
      <div class="flip-card position-relative" id="security-card">
        <div class="flip-card-inner position-relative w-100 h-100">

        <div class="flip-card-front position-absolute w-100 h-100 d-flex flex-column justify-content-center
            align-items-center text-center p-3 rounded">
          <img src="Images/cyber security.jpg" alt="Web Security" class="mb-2">
          <h4 class="fw-bold">Web Security</h4>
        </div>

        <div class="flip-card-back position-absolute w-100 h-100 p-3 rounded overflow-y-auto text-start">
          <ol class="fs-6">
            <li><strong>Phishing</strong> — fraudulent emails/sites tricking users into revealing information. Prevented via user education and email filtering.</li>
            <li><strong>SQL Injection</strong> — malicious code inserted via input fields. Prevented with parameterized queries.</li>
            <li><strong>XSS</strong> — injecting malicious scripts into pages. Prevented by sanitizing input/output.</li>
            <li><strong>DDoS attacks</strong> — overwhelming a server with traffic. Prevented with firewalls and monitoring.</li>
            <li><strong>Man-in-the-Middle</strong> — intercepting user-server communication. Prevented with HTTPS/SSL.</li>
          </ol>
          <a href="https://owasp.org/www-project-top-ten/" target="_blank" rel="noopener">OWASP Top 10 →</a>
        </div>

        </div>
      </div>
    `;

    //Return HTML view
    return ui;
  },

  addEvent() {
    // Flip cards on click
    document.getElementById('security-card').addEventListener('click', function() {
      this.classList.toggle("flipped");
    });
  },

 //------------------------------------
 //Functions

}