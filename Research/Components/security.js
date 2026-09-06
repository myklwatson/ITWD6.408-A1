//SECURITY COMPONENT

//EXPORT
export const security = {

  //------------------------------------
  //Component UI
  renderUI() {

    //Build HTML view
    let ui = `
      <div class="flip-card position-relative" id="security-card">
        <div class="flip-card-inner position-relative w-100 h-100">

        <div class="flip-card-front position-absolute w-100 h-100 
                    d-flex flex-column justify-content-center
                    align-items-center text-center p-3 rounded">
          
          <img src="Images/cyber security.jpg" alt="Web Security" class="mb-2">
          <h4 class="fw-bold">Web Security</h4>
        </div>

        <div class="flip-card-back position-absolute w-100 h-100 p-3 rounded overflow-y-auto text-start">
          <h5 class="fw-bold mb-2">Web Security</h5>  

          <p class="fs-6 lh-base">
            Web security is about protecting websites and their users from things like hacking, data theft, and malicious software. Some common security threats are:
          </p>
          <ol class="fs-6">
          <li><strong>Phishing</strong> - Fake emails or websites can trick people into giving away passwords or other personal information. User awareness and email filtering can help reduce this risk.</li>
          <li><strong>SQL Injection</strong> - An attacker can try to put malicious SQL code into an input field. Using parameterised queries helps prevent this.</li>
          <li><strong>XSS (Cross-Site Scripting)</strong> - Malicious scripts can be added to a webpage through user input. This can be reduced by properly handling and sanitising input before displaying it.</li>
          <li><strong>DDoS attacks</strong> - An attacker can send large amounts of traffic to a server to make it slow or unavailable. Firewalls, monitoring, and other traffic protection can help with this.</li>
          <li><strong>Man-in-the-Middle attacks</strong> - Someone may try to intercept information travelling between a user and a website. HTTPS and SSL/TLS encryption help protect this communication.</li>
          </ol>

          <p class="fs-6 lh-base">
            For more information, visit the
            <a class="fw-bold" href="https://www.cloudflare.com/learning/security/threats/common-cyber-attacks/" target="_blank" rel="noopener">CloudFlare Learning Center →</a>
          </p>
          <br>

          <h6 class="fw-bold">Security Analysis</h6>
          <p class="fs-6 lh-base">
            The main security concerns in my project are the forms (more the HTML one than the Google form), the Supabase authentication system, and the JavaScript demos that accept user input, such as cart quantities, quiz answers, and account details.
          </p>
          <ol class="fs-6">
              <li><strong>Cross-Site Scripting (XSS)</strong> - User input could potentially be used to inject malicious scripts if it is displayed on the page without being handled properly. In my project, I use textContent rather than inserting user input directly with unsanitised innerHTML, which reduces this risk.</li>
              <li><strong>Unauthorised access to data</strong> - Supabase's Row Level Security policies are used to make sure users can only access their own profile information.</li>
              <li><strong>Weak passwords</strong> - Supabase has a minimum password length of six characters. This is enough for the purposes of this demo, but I would use stronger password requirements on a real website.</li>
          </ol>
          <p class="fs-6 lh-base">
            Because this is a student project rather than a real commercial website, the overall security risk is fairly low. However, if I were deploying it for real users, I would need to take these issues more seriously and add stronger authentication, input validation, and access controls.
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
    document.getElementById('security-card').addEventListener('click', function() {
      // Toggle('flipped')
      this.classList.toggle("flipped");
    });
  },

}