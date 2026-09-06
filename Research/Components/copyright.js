//COPYRIGHT COMPONENT

//EXPORT
export const copyright = {

  //------------------------------------
  //Component UI
  renderUI() {

    //Build HTML View
    let ui = `
      <div class="flip-card position-relative" id="copyright-card">
        <div class="flip-card-inner position-relative w-100 h-100">

          <div class="flip-card-front position-absolute w-100 h-100
                      d-flex flex-column justify-content-center align-items-center
                      text-center p-3 rounded">

            <img src="Images/research-copyright.jpg" alt="Copyright and Creative Commons" class="mb-2">
            <h4 class="fw-bold">Copyright, CC Licenses & Fair Use</h4>
          </div>

          <div class="flip-card-back position-absolute w-100 h-100 p-3 rounded text-start">
            <h5 class="fw-bold mb-2">Copyright, Creative Commons Licenses & Fair Use</h5>

            <p class="fs-6 lh-base">
              <strong>Copyright</strong> automatically protects original creative work when it is created. You do not need to register it first. It gives the creator rights over things like copying, sharing, changing, and publicly displaying their work.
              In New Zealand, copyright will last for the creator's lifetime plus 50 years after death.
              </p>
            <p class="fs-6 lh-base">
              <strong>Creative Commons (CC)</strong> licences are a way for creators to let other people use their work while still keeping some control over it. 
              </p>

            <p class="fs-6 lh-base">
            There are several different licences:
            </p>
              <ol class="fs-6">
              <li><strong>CC BY</strong> - Other people can reuse the work as long as they give credit to the creator.</li>
              <li><strong>CC BY-SA</strong> - Credit must be given, and any changes or adaptations must be shared under the same licence. </li>
              <li><strong>CC BY-NC</strong> - The work can be reused with credit, but only for non-commercial purposes.</li>
              <li><strong>CC BY-ND</strong> - The work can be reused with credit, but it cannot be changed or adapted.</li>
            </ol>
  
            <p class="fs-6 lh-base">
              <strong>Fair Use (NZ):</strong> New Zealand uses the term "fair dealing" rather than "fair use". Under the Copyright Act 1994, there are some situations where copyrighted material can be used without getting permission. These include things such as criticism, review, news reporting, research, and private study. 
              <br><br>
              There are limits on how much and how the material can be used, so it does not mean that copyrighted work can simply be used freely.
            </p>
            <br>
            
            <p class="fs-6 lh-base">
            For more information, visit the
            <a class="fw-bold"href="https://creativecommons.org/cc-licenses/" target="_blank" rel="noopener">Creative Commons Website →</a>
            </p>
            <br>

            <h6 class="fw-bold">Copyright Analysis</h6>
            <p class="fs-6 lh-base">
              This website uses a mixture of images provided for the course and stock or placeholder images for product demonstrations and research. Some of the product photos in the JavaScript demo (Demo 2) are being used for educational purposes as part of my coursework, rather than for a commercial website. However, this does not mean the images are free from copyright. They may still belong to the original manufacturers, photographers, or other copyright owners.
            </p>
            <p class="fs-6 lh-base">
              I would license this website under <strong>CC BY-NC</strong> (Attribution-NonCommercial). This would allow other people to look at, learn from, and adapt my code and layout for their own coursework, as long as they give me credit. It would also prevent them from using my work commercially. This seems appropriate for a student project that is intended for learning and demonstration rather than commercial use.
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
    document.getElementById('copyright-card').addEventListener('click', function() {
      // Toggle('flipped')
      this.classList.toggle("flipped");
    });
  },

}