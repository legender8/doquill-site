(function() {
  // Skip if already in /fr/ subfolder
  if (window.location.pathname.indexOf('/fr/') !== -1) return;

  // Check if user has manually chosen
  // a language (respect their choice)
  if (sessionStorage.getItem('lang-chosen')) return;

  // Get browser language
  var lang = (navigator.language ||
    navigator.userLanguage || '').toLowerCase();

  // Redirect if French browser
  if (lang.startsWith('fr')) {
    var path = window.location.pathname;
    var page = path.split('/').pop() ||
      'index.html';
    if (!page) page = 'index.html';

    var frPages = [
      'index.html', 'pricing.html',
      'solutions.html', 'industries.html',
      'integrations.html', 'about.html',
      'contact.html', 'demo.html',
      'ai-automation.html', 'insights.html',
      'docs.html', 'api.html',
      'african-businesses-replacing-spreadsheets-with-erp.html',
      'ai-document-processing-eliminates-data-entry.html',
      'why-generic-erp-no-longer-makes-sense.html'
    ];

    if (frPages.indexOf(page) !== -1 ||
        page === '') {
      // Save that we auto-redirected
      // so we don't loop
      sessionStorage.setItem('lang-chosen',
        'fr-auto');
      window.location.replace('/fr/' + page);
    }
  }
})();

// When user manually clicks a language
// option — save their explicit choice
document.addEventListener('DOMContentLoaded',
function() {
  // EN switcher links (navbar + footer)
  var enLinks = document.querySelectorAll(
    '.lang-option[href="/"], ' +
    '.lang-option[href="../"], ' +
    '.nav-y a[href="/"], ' +
    '.nav-y a[href="../"]'
  );
  enLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      sessionStorage.setItem('lang-chosen', 'en');
    });
  });

  // FR switcher links (navbar + footer)
  var frLinks = document.querySelectorAll(
    '.lang-option[href="/fr/"], ' +
    '.lang-option[href="fr/"], ' +
    '.nav-y a[href="/fr/"]'
  );
  frLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      sessionStorage.setItem('lang-chosen', 'fr');
    });
  });
});
