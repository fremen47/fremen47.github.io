//Services js that handles popups
for (let i = 1; i <= 9; i++) {
    const open = document.getElementById(`open${i}`);
    const wrapper = document.getElementById(`wrapper${i}`);
    
    open.addEventListener('click', () => {
        wrapper.classList.add('show');
    });
}

document.querySelectorAll('#close').forEach(button => {
    button.addEventListener('click', (event) => {
        document.querySelectorAll('.service_wrapper').forEach(
            wrapper => wrapper.classList.remove('show')
        );
    });
});

document.querySelectorAll('.service_wrapper').forEach(wrapper => {
    wrapper.addEventListener('click', (event) => {
        if (event.target === wrapper) wrapper.classList.remove('show');
    });
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        document.querySelectorAll('.service_wrapper.show').forEach(w => w.classList.remove('show'));
    }
});