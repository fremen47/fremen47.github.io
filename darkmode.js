// Simple darkmode swith that adds class darkmode
const toggleButton = document.getElementById('mode_switch');
  
    document.body.classList.remove('darkmode');
    if (toggleButton) {
        toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('darkmode');
        });
    }
