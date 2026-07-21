document.querySelectorAll('[data-current-year]').forEach(function (element) {
    element.textContent = new Date().getFullYear();
});
