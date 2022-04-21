document.querySelector('.togBtn').addEventListener('click', () => {
    document.querySelectorAll('.hidTxt').forEach((item) => {
        item.classList.toggle("hiddenTxt");
    });
});