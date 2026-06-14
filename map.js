const companyLat = 49.176769;
const companyLng = 16.637311;
const addressText = "NOJA CZ s.r.o.";
const map = L.map('contact_map').setView([companyLat, companyLng], 15);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    maxZoom: 19
}).addTo(map);

L.marker([companyLat, companyLng])
    .addTo(map)
    .bindPopup(addressText)
    .openPopup();

function updateMapTheme() {
    const container = map.getContainer(); // div#contact_map
    if (document.body.classList.contains('darkmode')) {
        container.classList.add('dark-mode');
    } else {
        container.classList.remove('dark-mode');
    }
}
updateMapTheme();

const observer = new MutationObserver(updateMapTheme);
observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });