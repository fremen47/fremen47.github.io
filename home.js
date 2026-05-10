//Same js that i used in services section
for (let i = 1; i <= 5; i++) {
    const open = document.getElementById(`gradient${i}`);
    const wrapper = document.getElementById(`portfolio${i}`);
    
    if (open && wrapper) {
        open.addEventListener('click', () => {
            wrapper.classList.add('show');
        });
    }
}

document.querySelectorAll('.portfolio_close').forEach(button => {
    button.addEventListener('click', (event) => {
        document.querySelectorAll('.portfolio_wrapper').forEach(
            wrapper => wrapper.classList.remove('show')
        );
    });
});

document.querySelectorAll('.portfolio_wrapper').forEach(wrapper => {
    wrapper.addEventListener('click', (event) => {
        if (event.target === wrapper) wrapper.classList.remove('show');
    });
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        document.querySelectorAll('.portfolio_wrapper.show').forEach(w => w.classList.remove('show'));
    }
});