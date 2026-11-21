(() => {
    const languageButtons = document.querySelectorAll('[data-set-language]');
    const translated = document.querySelectorAll('[data-en][data-zh]');
    const download = document.getElementById('cv-download');

    function setLanguage(language) {
        translated.forEach((element) => {
            element.textContent = element.dataset[language];
        });
        languageButtons.forEach((button) => {
            button.setAttribute('aria-pressed', String(button.dataset.setLanguage === language));
        });
        document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
        download.href = download.dataset[language + 'Href'];
    }

    languageButtons.forEach((button) => {
        button.addEventListener('click', () => setLanguage(button.dataset.setLanguage));
    });
})();
