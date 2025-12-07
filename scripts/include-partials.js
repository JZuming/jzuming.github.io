// Simple HTML partial include loader
document.addEventListener('DOMContentLoaded', function () {
    const nodes = document.querySelectorAll('[data-include]');
    nodes.forEach(node => {
        const url = node.getAttribute('data-include');
        if (!url) return;
        fetch(url)
            .then(resp => {
                if (!resp.ok) throw new Error('Failed to fetch ' + url);
                return resp.text();
            })
            .then(html => {
                node.innerHTML = html;
                node.removeAttribute('data-include');
            })
            .catch(err => {
                console.error('Include partial failed:', err);
            });
    });
});
