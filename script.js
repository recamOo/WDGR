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