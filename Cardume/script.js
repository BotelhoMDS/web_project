function scrollToTop(event) {
    event.preventDefault(); 
    window.scrollTo({ //rola a página para o topo
        top: 0,
        behavior: 'smooth' 
    });
}

// Pega o elemento com o id 'begining' para que eu posso aplicar a função scrollToTop
const logo = document.getElementById('begining');

logo.addEventListener('click', scrollToTop);