(function() {
  // Only run on English root pages
  // Skip if already in /fr/ subfolder
  if (window.location.pathname.indexOf('/fr/') === 0) return;

  // Check if user has manually chosen
  // a language before (respect their choice)
  if (sessionStorage.getItem('lang-chosen')) return;

  // Get browser language
  var lang = (navigator.language ||
    navigator.userLanguage || '').toLowerCase();

  // French language codes
  var frenchLangs = ['fr', 'fr-fr', 'fr-be',
    'fr-ca', 'fr-ch', 'fr-lu', 'fr-mc',
    'fr-cd', 'fr-ci', 'fr-sn', 'fr-ma',
    'fr-dz', 'fr-tn', 'fr-cm'];

  var isFrench = frenchLangs.some(function(code) {
    return lang === code || lang.startsWith('fr');
  });

  if (isFrench) {
    // Redirect to French version of
    // current page
    var path = window.location.pathname;
    var page = path.split('/').pop() ||
      'index.html';

    // Map current page to fr/ version
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
      window.location.replace('/fr/' +
        (page || 'index.html'));
    }
  }
})();

// Clear lang-chosen when user manually
// clicks a language option
document.addEventListener('DOMContentLoaded',
function() {
  var langLinks = document.querySelectorAll(
    '.lang-option, .nav-y .hstack');
  langLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      sessionStorage.removeItem('lang-chosen');
    });
  });
});
