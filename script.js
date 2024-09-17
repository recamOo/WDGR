window.onload = function(){    
    const blocks = document.querySelectorAll('.container__blocos');

        blocks.forEach(block => {
            block.addEventListener('mouseover', () => {
                blocks.forEach(b => {
                    if (b !== block) {
                        b.classList.add('shrink');
                    }
                });
                block.classList.add('hovered');
            });

            block.addEventListener('mouseout', () => {
                blocks.forEach(b => {
                    b.classList.remove('shrink');
                });
                block.classList.remove('hovered');
            });
        });

    let slideIndex = 0;
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;

    function showSlide(index) {
        if (index >= totalSlides) {
            slideIndex = 0;
        } else if (index < 0) {
            slideIndex = totalSlides - 1;
        } else {
            slideIndex = index;
        }
        slides.style.transform = `translateX(-${slideIndex * 100}%)`;
    }

    function nextSlide() {
        showSlide(slideIndex + 1);
    }

    function prevSlide() {
        showSlide(slideIndex - 1);
    }
    let autoSlideInterval = setInterval(nextSlide, 5000);

    // Função para reiniciar o intervalo
    function resetAutoSlide() {
        clearInterval(autoSlideInterval); // Para o intervalo atual
        autoSlideInterval = setInterval(nextSlide, 5000); // Reinicia o intervalo
    }

    // Eventos nos botões
    document.querySelector('.next').addEventListener('click', () => {
        nextSlide();
        resetAutoSlide(); // Reinicia o temporizador ao clicar no botão
    });

    document.querySelector('.prev').addEventListener('click', () => {
        prevSlide();
        resetAutoSlide(); // Reinicia o temporizador ao clicar no botão
    });
};      