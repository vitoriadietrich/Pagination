let currentPage = 1;
const totalPages = 5;

function setPage(page) {
    currentPage = page;
    updateUI();
}

function changePage(step) {
    currentPage += step;
    if (currentPage < 1) currentPage = 1;
    if (currentPage > totalPages) currentPage = totalPages;
    updateUI();
}

function goToPage(page) {
    currentPage = page;
    updateUI();
}

function updateUI() {
    const items = document.querySelectorAll('.page-number');
    
    items.forEach((item, index) => {
        if (index + 1 === currentPage) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });

    // Opcional: Desabilitar setas visualmente se estiver no limite
    document.querySelector('.prev-all').style.opacity = currentPage === 1 ? "0.5" : "1";
    document.querySelector('.next-all').style.opacity = currentPage === totalPages ? "0.5" : "1";
}