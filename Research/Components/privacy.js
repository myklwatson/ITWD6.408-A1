//PRIVACY COMPONENT

//EXPORT
export const privacy = {

  //------------------------------------
  //Component UI
  renderUI() {

    //Build HTML View
    let ui = `
      <div class="flip-card position-relative" id="privacy-card">
        <div class="flip-card-inner position-relative w-100 h-100">

        <div class="flip-card-front position-absolute w-100 h-100 
                    d-flex flex-column justify-content-center align-items-center 
                    text-center p-3 rounded">
          <img src="Images/privacy policy.jpg" alt="Privacy Policy" class="mb-2">
          <h4 class="fw-bold">Privacy and Privacy Policy</h4>
        </div>

        <div class="flip-card-back position-absolute w-100 h-100 p-3 rounded text-start">
          <h5 class="fw-bold mb-2">Privacy and Privacy Policy</h5>
          <p class="fs-6 lh-base">
            A <strong>privacy policy</strong> explains what personal information a website collects, why it needs the information, and what it does to keep it safe. <br><br>
            In New Zealand, the <strong>Privacy Act 2020</strong> includes 13 Information Privacy Principles that organisations need to follow.
          </p>
          <ol class="fs-6">
            <li><strong>Purpose</strong> - Only collect information for a lawful and necessary purpose.</li>
            <li><strong>Source</strong> - Where possible, collect the information directly from the person.</li>
            <li><strong>Collection</strong> - Tell people what information is being collected and why.</li>
            <li><strong>Manner</strong> - Collect information fairly, legally, and without being unnecessarily intrusive.</li>
            <li><strong>Storage</strong> - Keep personal information secure and protect it from being lost or misused.</li>
            <li><strong>Access</strong> - People have the right to ask for access to their personal information.</li>
            <li><strong>Correction</strong> - People can ask for their information to be corrected if it is wrong.</li>
            <li><strong>Accuracy</strong> - Make sure information is accurate before using it.</li>
            <li><strong>Retention</strong> - Do not keep personal information longer than it is needed.</li>
            <li><strong>Use</strong> - Generally, only use information for the reason it was originally collected.</li>
            <li><strong>Disclosure</strong> - Do not share personal information with other organisations unless there is a valid reason to do so.</li>
            <li><strong>Unique Identifiers</strong> - Be careful about using things like ID numbers to identify people.</li>
            <li><strong>Cross-Border Disclosure</strong> - Take appropriate steps to protect information when it is sent overseas.</li>
          </ol>

          <p class="fs-6 lh-base">
          These principles are important because they give people more control over their personal information and set expectations for how organisations should handle it.
          <br>
          <br>

          For more information, visit the
          <a class="fw-bold" href="https://www.privacy.org.nz/privacy-act-2020/privacy-principles/" target="_blank" rel="noopener">Privacy Commission Website →</a>
          </p>
          <br>

          <h6 class="fw-bold">Privacy Risks</h6>
            <p class="fs-6 lh-base">
              This website collects personal information in two main areas. The two forms on the Forms Page (HTML & Google) collect details such as a name, address, phone number, and gender. The Supabase authentication system (JS Demo 4) also stores information such as an email address, password, address, and phone number. This creates some privacy risks, particularly if someone gains unauthorised access to the stored information or if users are not clearly told what information is being collected and why.
            </p>
            <p class="fs-6 lh-base">
              To reduce these risks, I have used <strong>Row Level Security (RLS)</strong> policies in the Supabase database. These policies mean that users can only view or edit their own profile information rather than accessing someone else's data. I have also included a privacy policy in the website footer that explains what information is collected and how it is used.
            </p>
            <p class="fs-6 lh-base">
              For a real website rather than a student project, I would also add stronger password requirements, enable the email verification through Supabase, and display a clear policy about how long user data is kept for and how it can be deleted. This would provide some extra protection for users and their information.
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
    document.getElementById('privacy-card').addEventListener('click', function() {
      // Toggle('flipped')
      this.classList.toggle("flipped");
    });
  },

}