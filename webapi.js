// Import from Supabase
import {createClient} from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';
// Supabase URL
const supabaseUrl = 'https://ttvvbnwepzedsqxqnhqe.supabase.co';
// Supabase API Key
const supabaseKey = 'sb_publishable_c3TjLFAYPL0aDBmpfglIwg_5p-TcTA9';
const supabase = createClient(supabaseUrl, supabaseKey);

// Store the fetched records in an array
let allRecords = [];

// Retrieve Data
async function getData() {
    const { data, error } = await supabase
        .from('mobiletechnologyform')
        .select('*')
        .order('created_at', { ascending: false });
  
    if (error) {
        console.error('Error fetching data:', error);
        alert('Error Fetching Data');
        return [];
    }
    return data;
}

// Render Data as Cards
function displayCards(data) {
    const outputElement = document.getElementById('mobiletechnologyform-data');
    outputElement.innerHTML = '';

    if (data.length === 0) {
        outputElement.innerHTML = '<p class="text-muted">No matching results found.</p>';
        return;
    }

    // Format display of records
    data.forEach(data => {
        const colElement = document.createElement('div');
        colElement.className = 'col-12 col-lg-6 mb-4';

        // Convert phoneType Array into a string
        const phoneTypeDisplay = Array.isArray(data.phone_type) && data.phone_type.length > 0
            ? data.phone_type.join(', ')
            : 'N/A';

        // address2 and study_use are optional, so display N/A is empty
        const address2Display = data.address2 && data.address2.trim() !== '' ? data.address2 : null;
        const studyUseDisplay = data.study_use && data.study_use.trim() !== '' ? data.study_use : 'N/A';

        // Format the submittion date
        const submittedDisplay = data.created_at
            ? new Date(data.created_at).toLocaleDateString()
            : 'N/A';


        // Card display/rendering
        colElement.innerHTML = `
            <div class="card h-100 shadow-sm">
                <div class="card-body">
                    <h5 class="card-title fw-bold">${data.fname} ${data.lname}</h5>
                    <p class="card-text">Gender: ${data.gender}</p>
                    <p class="card-text">Address: ${data.address1}, ${address2Display ? ', ' + address2Display : ''}</p>
                    <p class="card-text">Town: ${data.town}</p>
                    <p class="card-text">Phone Type: ${phoneTypeDisplay}</p>
                    <p class="card-text mb-1"><strong>Provider:</strong> ${data.provider || 'N/A'}</p>
                    <p class="card-text mb-1"><strong>Study Use:</strong> ${studyUseDisplay}</p>
                    <p class="card-text text-muted small mb-0"><strong>Submitted:</strong> ${submittedDisplay}</p>
                </div>
            </div>
        `;

        outputElement.appendChild(colElement);
    });
}

// Filters allRecords based on the search
function displayFilteredCards() {
    const searchInput = document.getElementById('searchInput');
    const term = searchInput.value.toLowerCase();

      if (term === '') {
        displayCards(allRecords);
        return;
    }


   // Field filtering
    const filtered = allRecords.filter(data => {
        const fname = (data.fname || '').toLowerCase();
        const lname = (data.lname || '').toLowerCase();
        const gender = (data.gender || '').toLowerCase();
        const town = (data.town || '').toLowerCase();
        const provider = (data.provider || '').toLowerCase();
        const studyUse = (data.study_use || '').toLowerCase();
        const phoneType = Array.isArray(data.phone_type) ? data.phone_type.join(' ').toLowerCase() : '';

        return fname.includes(term)
            || lname.includes(term)
            || gender.includes(term)
            || town.includes(term)
            || provider.includes(term)
            || studyUse.includes(term)
            || phoneType.includes(term);
    });

    displayCards(filtered);
}

// Expose to global scope so the inline onclick in the HTML can find it
window.displayFilteredCards = displayFilteredCards;

// Allow pressing Enter in the search box to trigger the search too
const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        displayFilteredCards();
    }
});

// Fetch data, store it, and render it initially
getData().then(data => {
    console.log(JSON.stringify(data, null, 2));
    allRecords = data;
    displayCards(allRecords);
});
