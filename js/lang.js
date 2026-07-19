function setLang(lang) {
  document.body.classList.toggle('lang-it', lang === 'it');
  document.getElementById('btn-en').classList.toggle('active', lang === 'en');
  document.getElementById('btn-it').classList.toggle('active', lang === 'it');
  document.documentElement.lang = lang;
  try { localStorage.setItem('cbeach-lang', lang); } catch (e) {}
}
(function () {
  var saved = null;
  try { saved = localStorage.getItem('cbeach-lang'); } catch (e) {}
  var lang = saved || ((navigator.language || '').toLowerCase().indexOf('it') === 0 ? 'it' : 'en');
  setLang(lang);
})();
